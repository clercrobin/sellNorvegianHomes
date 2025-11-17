/**
 * Simple in-memory rate limiting for API routes
 * For production with multiple servers, use Redis or external service (Upstash, etc.)
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Clean up old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 5 * 60 * 1000);

interface RateLimitConfig {
  /**
   * Maximum number of requests allowed
   */
  maxRequests: number;
  /**
   * Time window in milliseconds
   */
  windowMs: number;
  /**
   * Custom identifier (defaults to IP address)
   */
  identifier?: string;
}

/**
 * Check if a request should be rate limited
 * @returns true if request should be allowed, false if rate limited
 */
export function checkRateLimit(
  request: Request,
  config: RateLimitConfig
): { allowed: boolean; remaining: number; resetTime: number } {
  // Get identifier (IP address or custom identifier)
  const identifier =
    config.identifier ||
    request.headers.get("x-forwarded-for") ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  // No entry yet, create new one
  if (!entry || now > entry.resetTime) {
    const resetTime = now + config.windowMs;
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime,
    });
    return {
      allowed: true,
      remaining: config.maxRequests - 1,
      resetTime,
    };
  }

  // Check if limit exceeded
  if (entry.count >= config.maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: entry.resetTime,
    };
  }

  // Increment count
  entry.count++;
  return {
    allowed: true,
    remaining: config.maxRequests - entry.count,
    resetTime: entry.resetTime,
  };
}

/**
 * Preset configurations for common use cases
 */
export const RateLimitPresets = {
  /**
   * Contact form: 5 requests per 15 minutes
   */
  CONTACT_FORM: {
    maxRequests: 5,
    windowMs: 15 * 60 * 1000,
  },
  /**
   * Lead magnet download: 10 requests per hour
   */
  LEAD_MAGNET: {
    maxRequests: 10,
    windowMs: 60 * 60 * 1000,
  },
  /**
   * General API: 100 requests per hour
   */
  GENERAL_API: {
    maxRequests: 100,
    windowMs: 60 * 60 * 1000,
  },
  /**
   * Strict: 3 requests per 5 minutes (for sensitive operations)
   */
  STRICT: {
    maxRequests: 3,
    windowMs: 5 * 60 * 1000,
  },
};

/**
 * Middleware helper to apply rate limiting to API routes
 */
export async function withRateLimit(
  request: Request,
  config: RateLimitConfig,
  handler: () => Promise<Response>
): Promise<Response> {
  const result = checkRateLimit(request, config);

  if (!result.allowed) {
    const retryAfter = Math.ceil((result.resetTime - Date.now()) / 1000);
    return new Response(
      JSON.stringify({
        error: "Trop de requêtes. Veuillez réessayer plus tard.",
        retryAfter,
      }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "Retry-After": retryAfter.toString(),
          "X-RateLimit-Limit": config.maxRequests.toString(),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": new Date(result.resetTime).toISOString(),
        },
      }
    );
  }

  const response = await handler();

  // Add rate limit headers to successful responses
  response.headers.set(
    "X-RateLimit-Limit",
    config.maxRequests.toString()
  );
  response.headers.set(
    "X-RateLimit-Remaining",
    result.remaining.toString()
  );
  response.headers.set(
    "X-RateLimit-Reset",
    new Date(result.resetTime).toISOString()
  );

  return response;
}

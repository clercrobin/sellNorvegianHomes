import { NextRequest, NextResponse } from "next/server";
import { saveLead } from "@/lib/lead-storage";
import { sendLeadMagnetEmail } from "@/lib/email-service";
import { getLeadMagnetById } from "@/lib/lead-magnets";
import { withRateLimit, RateLimitPresets } from "@/lib/rate-limit";

// Helper function to validate email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  // Apply rate limiting: 10 requests per hour
  return withRateLimit(request, RateLimitPresets.LEAD_MAGNET, async () => {
    try {
      const body = await request.json();
    const { email, magnetId, magnetTitle } = body;

    // Validate required fields
    if (!email || !magnetId) {
      return NextResponse.json(
        {
          success: false,
          error: "Email et ID du guide sont requis",
        },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "L'adresse email n'est pas valide",
        },
        { status: 400 }
      );
    }

    // Get lead magnet details
    const magnet = getLeadMagnetById(magnetId);
    if (!magnet) {
      return NextResponse.json(
        {
          success: false,
          error: "Guide non trouvé",
        },
        { status: 404 }
      );
    }

    // Save lead to storage
    try {
      await saveLead({
        firstName: "",
        lastName: "",
        email,
        phone: "",
        region: "",
        budget: "",
        projectType: "lead_magnet",
        message: `Téléchargement du guide: ${magnet.title}`,
        source: `lead_magnet_${magnetId}`,
      });
    } catch (error) {
      console.error("Failed to save lead:", error);
      // Continue - we still want to send the email
    }

    // Send email with download link
    try {
      await sendLeadMagnetEmail(email, magnet);
    } catch (error) {
      console.error("Failed to send email:", error);
      // Continue - user can still download from the page
    }

    return NextResponse.json(
      {
        success: true,
        message: "Guide envoyé avec succès",
      },
      { status: 200 }
    );
    } catch (error) {
      console.error("Error processing lead magnet request:", error);
      return NextResponse.json(
        {
          success: false,
          error: "Une erreur serveur est survenue",
        },
        { status: 500 }
      );
    }
  });
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    {
      error: "Method not allowed",
    },
    { status: 405 }
  );
}

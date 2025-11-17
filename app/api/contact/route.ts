import { NextRequest, NextResponse } from "next/server";
import { ContactFormData } from "@/lib/types";
import {
  sendContactEmail,
  sendCustomerConfirmation,
} from "@/lib/email-service";
import { saveLead } from "@/lib/lead-storage";
import { withRateLimit, RateLimitPresets } from "@/lib/rate-limit";

// Helper function to validate email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Helper function to validate phone (basic French phone validation)
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

// Main handler for contact form submission
async function handleContactSubmission(data: ContactFormData) {
  // 1. Send email notification to sales team
  const emailResult = await sendContactEmail(data);

  if (!emailResult.success) {
    console.error("Failed to send email:", emailResult.error);
    // Continue anyway - we still want to save the lead
  }

  // 2. Send confirmation email to customer
  await sendCustomerConfirmation(data).catch((error) => {
    console.error("Failed to send confirmation:", error);
    // Non-critical, continue
  });

  // 3. Save lead to storage (JSON file, or database if configured)
  try {
    await saveLead({
      ...data,
      source: "website-contact-form",
    });
  } catch (error) {
    console.error("Failed to save lead:", error);
    // Continue - at least email was sent
  }

  return { success: true };
}

export async function POST(request: NextRequest) {
  // Apply rate limiting: 5 requests per 15 minutes
  return withRateLimit(request, RateLimitPresets.CONTACT_FORM, async () => {
    try {
      const body = await request.json();

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "region",
      "budget",
      "projectType",
    ];

    for (const field of requiredFields) {
      if (!body[field] || body[field].trim() === "") {
        return NextResponse.json(
          {
            success: false,
            error: `Le champ ${field} est requis`,
          },
          { status: 400 }
        );
      }
    }

    // Validate email format
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        {
          success: false,
          error: "L'adresse email n'est pas valide",
        },
        { status: 400 }
      );
    }

    // Validate phone format (basic validation)
    if (!isValidPhone(body.phone)) {
      return NextResponse.json(
        {
          success: false,
          error: "Le numéro de téléphone n'est pas valide",
        },
        { status: 400 }
      );
    }

    // Process the contact form
    const result = await handleContactSubmission(body as ContactFormData);

    if (result.success) {
      return NextResponse.json(
        {
          success: true,
          message: "Votre demande a été envoyée avec succès",
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          error: "Une erreur est survenue lors de l'envoi",
        },
        { status: 500 }
      );
    }
    } catch (error) {
      console.error("Error processing contact form:", error);
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

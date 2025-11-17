/**
 * Email service integration for NordMaison
 * Supports: Resend (recommended), SendGrid, Brevo
 */

import { ContactFormData } from "./types";

interface EmailConfig {
  provider: "resend" | "sendgrid" | "brevo" | "console";
  apiKey?: string;
  fromEmail: string;
  toEmail: string;
}

// Get email configuration from environment
function getEmailConfig(): EmailConfig {
  const provider = (process.env.EMAIL_PROVIDER || "console") as EmailConfig["provider"];

  return {
    provider,
    apiKey: process.env.EMAIL_API_KEY,
    fromEmail: process.env.EMAIL_FROM || "contact@nordmaison.fr",
    toEmail: process.env.EMAIL_TO || "sales@nordmaison.fr",
  };
}

/**
 * Send email using Resend (recommended for Next.js)
 */
async function sendWithResend(
  config: EmailConfig,
  data: ContactFormData
): Promise<boolean> {
  if (!config.apiKey) {
    console.error("Resend API key not configured");
    return false;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: config.fromEmail,
        to: config.toEmail,
        subject: `Nouvelle demande de devis - ${data.firstName} ${data.lastName}`,
        html: generateEmailHTML(data),
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Resend error:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Failed to send email with Resend:", error);
    return false;
  }
}

/**
 * Send email using SendGrid
 */
async function sendWithSendGrid(
  config: EmailConfig,
  data: ContactFormData
): Promise<boolean> {
  if (!config.apiKey) {
    console.error("SendGrid API key not configured");
    return false;
  }

  try {
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: config.toEmail }],
            subject: `Nouvelle demande de devis - ${data.firstName} ${data.lastName}`,
          },
        ],
        from: { email: config.fromEmail },
        content: [
          {
            type: "text/html",
            value: generateEmailHTML(data),
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("SendGrid error:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Failed to send email with SendGrid:", error);
    return false;
  }
}

/**
 * Send email using Brevo (formerly Sendinblue - French company)
 */
async function sendWithBrevo(
  config: EmailConfig,
  data: ContactFormData
): Promise<boolean> {
  if (!config.apiKey) {
    console.error("Brevo API key not configured");
    return false;
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": config.apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: { email: config.fromEmail, name: "NordMaison" },
        to: [{ email: config.toEmail }],
        subject: `Nouvelle demande de devis - ${data.firstName} ${data.lastName}`,
        htmlContent: generateEmailHTML(data),
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Brevo error:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Failed to send email with Brevo:", error);
    return false;
  }
}

/**
 * Generate HTML email content
 */
function generateEmailHTML(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2d5a3f 0%, #1e3a2a 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #2d5a3f; }
          .value { margin-top: 5px; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
          .priority { background: #fff3cd; border-left: 4px solid #f0ad4e; padding: 10px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🏠 Nouvelle Demande de Devis</h1>
          </div>
          <div class="content">
            <div class="priority">
              <strong>⏰ Action requise:</strong> Répondre sous 24h pour maximiser les chances de conversion.
            </div>

            <div class="field">
              <div class="label">👤 Nom complet:</div>
              <div class="value">${data.firstName} ${data.lastName}</div>
            </div>

            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>

            <div class="field">
              <div class="label">📞 Téléphone:</div>
              <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
            </div>

            <div class="field">
              <div class="label">📍 Région / Département:</div>
              <div class="value">${data.region}</div>
            </div>

            <div class="field">
              <div class="label">💰 Budget approximatif:</div>
              <div class="value">${data.budget}</div>
            </div>

            <div class="field">
              <div class="label">🏡 Type de projet:</div>
              <div class="value">${data.projectType}</div>
            </div>

            ${
              data.message
                ? `
            <div class="field">
              <div class="label">💬 Message:</div>
              <div class="value">${data.message.replace(/\n/g, "<br>")}</div>
            </div>
            `
                : ""
            }

            <div class="field" style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              <div class="label">⏰ Date de soumission:</div>
              <div class="value">${new Date().toLocaleString("fr-FR", {
                dateStyle: "full",
                timeStyle: "short",
              })}</div>
            </div>
          </div>

          <div class="footer">
            <p>Email automatique envoyé depuis le formulaire de contact NordMaison</p>
            <p>Ne pas répondre à cet email - Contacter directement le client</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

/**
 * Main email sending function
 */
export async function sendContactEmail(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  const config = getEmailConfig();

  // Log to console in all cases (backup)
  console.log("=== NEW CONTACT FORM SUBMISSION ===");
  console.log("Date:", new Date().toISOString());
  console.log("Name:", `${data.firstName} ${data.lastName}`);
  console.log("Email:", data.email);
  console.log("Phone:", data.phone);
  console.log("Region:", data.region);
  console.log("Budget:", data.budget);
  console.log("Project Type:", data.projectType);
  console.log("Message:", data.message);
  console.log("=====================================");

  // Send email based on provider
  let success = false;

  switch (config.provider) {
    case "resend":
      success = await sendWithResend(config, data);
      break;
    case "sendgrid":
      success = await sendWithSendGrid(config, data);
      break;
    case "brevo":
      success = await sendWithBrevo(config, data);
      break;
    case "console":
      console.log("✅ Console mode: No email sent (check logs above)");
      success = true;
      break;
    default:
      console.warn(`Unknown email provider: ${config.provider}`);
      success = true; // Still return success if just logging
  }

  if (!success) {
    return {
      success: false,
      error: "Failed to send email notification",
    };
  }

  return { success: true };
}

/**
 * Send confirmation email to the customer
 */
export async function sendCustomerConfirmation(
  data: ContactFormData
): Promise<boolean> {
  const config = getEmailConfig();

  if (config.provider === "console") {
    console.log("✅ Would send confirmation to:", data.email);
    return true;
  }

  if (!config.apiKey) return false;

  const confirmationHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2d5a3f 0%, #1e3a2a 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🏠 Merci pour votre demande !</h1>
          </div>
          <div class="content">
            <p>Bonjour ${data.firstName},</p>

            <p>Nous avons bien reçu votre demande concernant <strong>${data.projectType}</strong> dans la région de <strong>${data.region}</strong>.</p>

            <p><strong>Ce qui se passe maintenant :</strong></p>
            <ol>
              <li>Un conseiller NordMaison va analyser votre demande sous 24h</li>
              <li>Nous vous contacterons par téléphone ou email pour échanger sur votre projet</li>
              <li>Nous vous proposerons un rendez-vous personnalisé (visio ou sur site)</li>
              <li>Vous recevrez une première estimation chiffrée adaptée à vos besoins</li>
            </ol>

            <p><strong>En attendant, découvrez :</strong></p>
            <ul>
              <li><a href="https://nordmaison.fr/maisons">Tous nos modèles de maisons</a></li>
              <li><a href="https://nordmaison.fr/processus">Notre processus de construction</a></li>
              <li><a href="https://nordmaison.fr/faq">Questions fréquentes</a></li>
            </ul>

            <p>À très bientôt,<br><strong>L'équipe NordMaison</strong></p>

            <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
              Vous recevez cet email suite à votre demande sur nordmaison.fr
            </p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    if (config.provider === "resend") {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${config.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: config.fromEmail,
          to: data.email,
          subject: "Nous avons bien reçu votre demande - NordMaison",
          html: confirmationHTML,
        }),
      });
      return response.ok;
    }
    // Add other providers as needed
  } catch (error) {
    console.error("Failed to send confirmation email:", error);
  }

  return false;
}

/**
 * Send lead magnet download email
 */
export async function sendLeadMagnetEmail(
  email: string,
  magnet: { title: string; fileName: string; description: string }
): Promise<boolean> {
  const config = getEmailConfig();

  if (config.provider === "console") {
    console.log("✅ Would send lead magnet to:", email, "Magnet:", magnet.title);
    return true;
  }

  if (!config.apiKey) return false;

  const downloadURL = `${process.env.NEXT_PUBLIC_SITE_URL || "https://nordmaison.fr"}/downloads/${magnet.fileName}`;

  const leadMagnetHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2d5a3f 0%, #1e3a2a 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
          .button { display: inline-block; background: #2d5a3f; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0; }
          .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📚 Votre guide est prêt !</h1>
          </div>
          <div class="content">
            <p>Bonjour,</p>

            <p>Merci d'avoir téléchargé <strong>${magnet.title}</strong>.</p>

            <p>${magnet.description}</p>

            <p style="text-align: center;">
              <a href="${downloadURL}" class="button">📥 Télécharger le guide (PDF)</a>
            </p>

            <p><strong>Ce guide vous aide à :</strong></p>
            <ul>
              <li>Éviter les erreurs coûteuses dans votre projet</li>
              <li>Comprendre tous les aspects de la construction norvégienne</li>
              <li>Prendre les bonnes décisions au bon moment</li>
              <li>Économiser du temps et de l'argent</li>
            </ul>

            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">

            <p><strong>🎁 Bonus : Autres ressources gratuites</strong></p>
            <ul>
              <li><a href="https://nordmaison.fr/blog">Blog : Guides et actualités</a></li>
              <li><a href="https://nordmaison.fr/calculateur">Calculateur de budget personnalisé</a></li>
              <li><a href="https://nordmaison.fr/ressources">Tous nos guides gratuits</a></li>
            </ul>

            <p><strong>Une question sur votre projet ?</strong><br>
            Nos conseillers sont là pour vous aider gratuitement et sans engagement.</p>

            <p style="text-align: center;">
              <a href="https://nordmaison.fr/contact" style="color: #2d5a3f; font-weight: bold;">Demander un devis gratuit →</a>
            </p>

            <p>À bientôt,<br><strong>L'équipe NordMaison</strong></p>

            <div class="footer">
              <p>Vous recevez cet email suite à votre téléchargement sur nordmaison.fr</p>
              <p>Si vous ne souhaitez plus recevoir nos communications, <a href="#">cliquez ici</a></p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    if (config.provider === "resend") {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${config.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: config.fromEmail,
          to: email,
          subject: `📚 Votre guide : ${magnet.title}`,
          html: leadMagnetHTML,
        }),
      });
      return response.ok;
    }
    // Add other providers as needed
  } catch (error) {
    console.error("Failed to send lead magnet email:", error);
  }

  return false;
}

/**
 * Lead storage system for NordMaison
 * Supports: JSON file storage (default), or database (Supabase, PostgreSQL)
 */

import { ContactFormData, Lead } from "./types";
import { promises as fs } from "fs";
import path from "path";

// Generate unique ID for leads
function generateLeadId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Save lead to JSON file storage
 * In production, replace this with a database
 */
export async function saveLead(
  data: ContactFormData & { source: string }
): Promise<Lead> {
  const lead: Lead = {
    ...data,
    id: generateLeadId(),
    createdAt: new Date().toISOString(),
    status: "new",
  };

  try {
    // Save to local JSON file (for development)
    // In production, use a database instead
    const leadsDir = path.join(process.cwd(), "data");
    const leadsFile = path.join(leadsDir, "leads.json");

    // Create data directory if it doesn't exist
    try {
      await fs.access(leadsDir);
    } catch {
      await fs.mkdir(leadsDir, { recursive: true });
    }

    // Read existing leads or initialize empty array
    let leads: Lead[] = [];
    try {
      const data = await fs.readFile(leadsFile, "utf-8");
      leads = JSON.parse(data);
    } catch {
      // File doesn't exist yet, that's okay
    }

    // Add new lead
    leads.push(lead);

    // Write back to file
    await fs.writeFile(leadsFile, JSON.stringify(leads, null, 2));

    console.log("✅ Lead saved to storage:", lead.id);
  } catch (error) {
    console.error("Failed to save lead to file:", error);
    // Don't throw - we don't want to fail the whole request
  }

  // TODO: For production, integrate with your database:
  // - Supabase: await supabase.from('leads').insert([lead])
  // - PostgreSQL: await db.leads.create(lead)
  // - Airtable: await airtable('Leads').create(lead)

  return lead;
}

/**
 * Get all leads (for admin dashboard)
 */
export async function getLeads(): Promise<Lead[]> {
  try {
    const leadsFile = path.join(process.cwd(), "data", "leads.json");
    const data = await fs.readFile(leadsFile, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

/**
 * Update lead status
 */
export async function updateLeadStatus(
  leadId: string,
  status: Lead["status"]
): Promise<boolean> {
  try {
    const leadsFile = path.join(process.cwd(), "data", "leads.json");
    const data = await fs.readFile(leadsFile, "utf-8");
    const leads: Lead[] = JSON.parse(data);

    const lead = leads.find((l) => l.id === leadId);
    if (lead) {
      lead.status = status;
      await fs.writeFile(leadsFile, JSON.stringify(leads, null, 2));
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

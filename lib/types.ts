export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  region: string;
  budget: string;
  projectType: string;
  message: string;
}

export interface Lead extends ContactFormData {
  id: string;
  createdAt: string;
  source: string;
  status: "new" | "contacted" | "qualified" | "quoted" | "won" | "lost";
  notes?: string;
}

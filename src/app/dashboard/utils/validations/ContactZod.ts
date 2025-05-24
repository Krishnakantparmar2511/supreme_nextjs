import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(1, "Name is required.")
    .max(50, "Full name must be less than 50 characters"),

  email: z
    .string()
    .min(1, "Invalid email address.")
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),

  subject: z
    .string()
    .min(1, "Subject is required")
    .max(100, "Subject must be less than 100 characters"),

  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

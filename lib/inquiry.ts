import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Digits only"),
  eventType: z.enum([
    "Wedding",
    "Pre-Wedding",
    "Studio",
    "Event",
    "Video",
    "Other",
  ]),
  eventDate: z.string().trim().max(40).optional(),
  message: z.string().trim().max(1000).optional(),
  packageName: z.string().optional(),
  preferredBranch: z.string().optional(),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;

export function formatInquiryMessage(values: InquiryFormValues): string {
  const lines = [
    "Hi Raj Studio,",
    "",
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    `Event: ${values.eventType}`,
  ];

  if (values.eventDate?.trim()) {
    lines.push(`Date: ${values.eventDate.trim()}`);
  }
  if (values.preferredBranch?.trim()) {
    lines.push(`Preferred branch: ${values.preferredBranch.trim()}`);
  }
  if (values.packageName?.trim()) {
    lines.push(`Package: ${values.packageName.trim()}`);
  }
  if (values.message?.trim()) {
    lines.push(`Message: ${values.message.trim()}`);
  }

  lines.push("", "Sent from the website.");
  return lines.join("\n");
}

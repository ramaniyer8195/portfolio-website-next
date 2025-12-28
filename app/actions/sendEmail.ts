"use server";


import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function sendEmail(formData: z.infer<typeof contactFormSchema>) {
  const result = contactFormSchema.safeParse(formData);

  if (!result.success) {
    return { error: "Invalid form data" };
  }

  const { firstName, lastName, email, phone, message } = result.data;

  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <contact@codewithraman.com>", // Using verified domain
      to: ["ramaniyer8195@gmail.com"], // Hardcoded recipient

      replyTo: email,
      subject: `New message from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { error: "Failed to send email" };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Internal error:", err);
    return { error: "Internal server error" };
  }
}

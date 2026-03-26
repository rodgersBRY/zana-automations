import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/components";
import ContactEnquiry from "@/emails/ContactEnquiry";

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { name, business, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const html = await render(
      ContactEnquiry({ name, business, email, message }),
    );

    await resend.emails.send({
      from: "Zana Automations <info@zanaautomations.co.ke>",
      to: ["brianmawira2@gmail.com"],
      replyTo: email,
      subject: `New enquiry from ${name}${business ? ` — ${business}` : ""}`,
      html,
      text: `Name: ${name}\nBusiness: ${business || "Not provided"}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}

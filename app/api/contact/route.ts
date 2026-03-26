import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/components";
import ContactEnquiry from "@/emails/ContactEnquiry";
import AutoReply from "@/emails/AutoReply";

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

    const [enquiryHtml, autoReplyHtml] = await Promise.all([
      render(ContactEnquiry({ name, business, email, message })),
      render(AutoReply({ name })),
    ]);

    await Promise.all([
      resend.emails.send({
        from: "Zana Automations <info@zanaautomations.co.ke>",
        to: ["brianmawira2@gmail.com"],
        replyTo: email,
        subject: `New enquiry from ${name}${business ? ` — ${business}` : ""}`,
        html: enquiryHtml,
        text: `Name: ${name}\nBusiness: ${business || "Not provided"}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
      resend.emails.send({
        from: "Zana Automations <info@zanaautomations.co.ke>",
        to: [email],
        subject: "We got your message — we'll be in touch soon.",
        html: autoReplyHtml,
        text: `Hey ${name},\n\nThanks for reaching out to Zana Automations. We've received your message and will get back to you within 24 hours.\n\nIn the meantime, feel free to book a free discovery call at zanaautomations.co.ke/contact.\n\n— The Zana Automations team`,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}

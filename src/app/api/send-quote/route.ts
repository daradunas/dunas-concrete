import { generateQuoteEmail } from "@/lib/email/quoteTemplate"
import { generateClientConfirmationEmail } from "@/lib/email/clientTemplate"
import { generateClientConfirmationEmailEs } from "@/lib/email/clientTemplateEs"
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const companyMailOptions = {
      from: process.env.SMTP_USER,
      replyTo: body.contactInformation.email,
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      cc: process.env.OFFICE_RECIPIENTS?.split(",").map((email) => email.trim()),
      subject: `New Quote Request from ${body.contactInformation.name}`,
      html: generateQuoteEmail(body),
    }

    const isSpanish = body.lang?.startsWith("es")

    const clientMailOptions = {
      from: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      to: body.contactInformation.email,
      subject: isSpanish
        ? "Hemos recibido tu solicitud de cotización"
        : "We received your quote request",
      html: isSpanish
        ? generateClientConfirmationEmailEs(body)
        : generateClientConfirmationEmail(body),
    }

    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(clientMailOptions),
    ])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    )
  }
}
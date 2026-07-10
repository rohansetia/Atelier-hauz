import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    console.log("========== NEW INQUIRY ==========");

    console.log(
      "RESEND_API_KEY:",
      process.env.RESEND_API_KEY ? "Loaded ✅" : "Missing ❌"
    );

    console.log("TO_EMAIL:", process.env.TO_EMAIL);

    const body = await req.json();

    console.log("Received Body:", body);

    const {
      name,
      phone,
      email,
      state,
      city,
      project,
      message,
    } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        {
          success: false,
          error: "Please fill all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    const emailResponse = await resend.emails.send({
      from: "AtelierHauz <onboarding@resend.dev>",
      to: process.env.TO_EMAIL || "atelierhauzin@gmail.com",
      subject: `🏡 New Site Visit Request - ${name}`,

      html: `
      <div style="font-family:Arial,sans-serif;padding:30px;background:#fafafa">

        <h1 style="margin-bottom:20px;">
          New Site Visit Request
        </h1>

        <hr />

        <table cellpadding="8">

          <tr>
            <td><strong>Name</strong></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td><strong>Phone</strong></td>
            <td>${phone}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><strong>State</strong></td>
            <td>${state}</td>
          </tr>

          <tr>
            <td><strong>City</strong></td>
            <td>${city}</td>
          </tr>

          <tr>
            <td><strong>Project</strong></td>
            <td>${project}</td>
          </tr>

          <tr>
            <td><strong>Message</strong></td>
            <td>${message || "-"}</td>
          </tr>

        </table>

      </div>
      `,
    });

    console.log("Resend Response:");
    console.log(emailResponse);

    if ((emailResponse as any)?.error) {
      console.error("Resend Error:", (emailResponse as any).error);

      return NextResponse.json(
        {
          success: false,
          error: (emailResponse as any).error,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error: any) {
    console.error("========== API ERROR ==========");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Unknown Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
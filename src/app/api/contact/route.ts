import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("New form message:", data);

    // Если хочешь отправлять на email через Resend:
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Landing Form <onboarding@resend.dev>",
      to: "your@email.com",
      subject: "New Contact Message",
      text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
    });
    */

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

import { Resend } from "resend";

console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY);

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }

    // Отправка письма
    await resend.emails.send({
      from: "Website <onboarding@resend.dev>", // можно оставить тестовый email
      to: ["nikulin.danilo@gmail.com"], // email клиента
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
        <h3>New contact form message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: any) {
    console.error("Error sending email:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Unknown error" }),
      { status: 500 }
    );
  }
}

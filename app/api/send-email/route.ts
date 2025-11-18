import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

export async function POST(req: NextRequest) {
	const frontendDomain = process.env.VERCEL_URL ? process.env.VERCEL_URL : "dajohys.com";
	const origin =
		process.env.NODE_ENV === "production"
			? "https://dajohys.com"
			: frontendDomain.includes("localhost")
			? "http://localhost:3001"
			: `https://${frontendDomain}`;

	const res = NextResponse.next();
	res.headers.set("Access-Control-Allow-Origin", origin);
	res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
	res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

	// Handle OPTIONS request for CORS preflight
	if (req.method === "OPTIONS") {
		return new NextResponse(null, { status: 200 });
	}

	// Ensure that req.body is defined
	const body = await req.json();
	if (!body || !body.body) {
		return new NextResponse("Request body is missing", { status: 400 });
	}

	const emailData = body.body;

	sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

	const { to, bcc, from, replyTo, subject, text, html } = emailData;

	const msg = {
		to,
		bcc,
		from: from || "DaJohys Cleaning Inc. <no-reply@dajohys.com>",
		replyTo: replyTo || from,
		subject,
		text,
		html,
	};

	// Log the email details for debugging
	console.log("Email Details:", { to, bcc, from, subject, text, html });

	try {
		await sgMail.send(msg);
		return new NextResponse("Email sent successfully", { status: 200 });
	} catch (error) {
		console.error("Error sending email:", error);
		return new NextResponse("Failed to send email", { status: 500 });
	}
}

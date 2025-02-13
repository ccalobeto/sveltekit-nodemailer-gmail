import {
	EMAIL_APP_PASSWORD,
	EMAIL_APP_TO_ADDRESS,
	EMAIL_APP_USER,
	EMAIL_AUTH_ACCESS_TOKEN
} from '$env/static/private';
import { fail } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

export const actions = {
	sendEmail: async ({ request }) => {
		try {
			const data = await request.formData();
			const name = data.get('name')?.toString();
			const email = data.get('email')?.toString();
			const subject = data.get('subject')?.toString();
			const reason = data.get('reason')?.toString();
			const message = data.get('message')?.toString();
			// if (subject) {
			// 	// Honeypot
			// 	return {
			// 		status: 200,
			// 		body: {
			// 			message: 'Email sent successfully'
			// 		}
			// 	};
			// }

			// Create a transporter object using the nodemailer library
			const transporter = nodemailer.createTransport({
				host: 'smtp.gmail.com',
				port: 465,
				secure: true,
				auth: {
					type: 'OAuth2',
					user: EMAIL_APP_USER,
					accessToken: EMAIL_AUTH_ACCESS_TOKEN,
				}
			});

			// Set up email data
			const mail_options = {
				from: `"${name}" <${email}>`,
				to: EMAIL_APP_TO_ADDRESS,
				subject: reason,
				text: message,
			};
			// Send email
			const info = await transporter.sendMail(mail_options);

			return {
				status: 200,
				body: {
					message: 'Email sent successfully',
					messageId: info.messageId
				}
			};
		} catch (error) {
			return fail(500, {
				error: 'Internal server error'
			});
		}
	}
};

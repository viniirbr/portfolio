import { NextRequest } from "next/server";
import { Transporter, createTransport } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

type EmailRequestBody = { subject: string; message: string; from: string };

export async function POST(request: NextRequest) {
  const requestBody: EmailRequestBody = await request.json();
  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: "viniciusribeirodeveloper@gmail.com",
      pass: process.env.EMAIL_PASS,
    },
  });

  sendCustomerEmail(transporter, requestBody);
  sendConfirmationEmail(transporter, requestBody);

  return new Response("Some response whatever");
}

function sendCustomerEmail(
  transporter: Transporter<SMTPTransport.SentMessageInfo>,
  requestBody: EmailRequestBody
) {
  const mailOptions = {
    to: "viniciusribeirodeveloper@gmail.com",
    subject: requestBody.subject,
    text: requestBody.from + "\n" + requestBody.message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log("error customer", error);
    }

    console.log("success customer", error);
  });
}

function sendConfirmationEmail(
  transporter: Transporter<SMTPTransport.SentMessageInfo>,
  requestBody: EmailRequestBody
) {
  const mailOptions = {
    to: requestBody.from,
    subject: "Vincicius Ribeiro, Software Developer",
    text: "This email is to confirm that I have received your message. I will get back to you as soon as possible. \n\nKind regards, \nVinicius Ribeiro",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log("error customer", error);
    }

    console.log("success customer", error);
  });
}

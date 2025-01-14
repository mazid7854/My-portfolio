import Client from "../module/clientModel.js";
import nodemailer from "nodemailer";

export const contact_post = async (req, res) => {
  const { name, email, message } = req.body;
  console.log(name, email, message);

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newMessage = {
    name,
    email,
    message,
  };

  /* save message in db */
  try {
    const savedMessage = await Client.create(newMessage);
  } catch (error) {
    console.log(error);
  }

  /* nodemailer */
  const transporter = nodemailer.createTransport({
    host: "mail.mazid.info",
    port: 465,
    secure: true,
    requireTLS: true,
    auth: {
      user: "mail@mazid.info",
      pass: "4FMoI)GeYNJL",
    },
  });

  async function main() {
    const info = await transporter.sendMail({
      from: "mail@mazid.info",
      to: "mazidali218@gmail.com",
      subject: "Enquiry from portfolio",
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            padding-bottom: 20px;
            border-bottom: 1px solid #dddddd;
          }
          .header h1 {
            color: #333333;
            font-size: 24px;
            margin: 0;
          }
          .content {
            padding: 20px 0;
          }
          .content p {
            color: #555555;
            font-size: 16px;
            line-height: 1.6;
            margin: 10px 0;
          }
          .footer {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #dddddd;
          }
          .footer p {
            color: #999999;
            font-size: 14px;
            margin: 0;
          }
          .button {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            background-color: #007BFF;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>Enquiry</h1>
          </div>
          <div class="content">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          <div class="footer">
            <p>&copy; 2024 Mazid ali. All rights reserved.</p>
            <p>If you did not make this request, please ignore this email.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    });
    console.log("Message sent:", info);
  }

  main().catch(console.error);

  return res.status(200).json(newMessage);
};

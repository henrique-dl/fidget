import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "03472a0ed13c81",
    pass: "d9a91a0a1345e1"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget coiefeedget.com>',
      to: 'Henrique Duarte <hduarteleite@gmail.com>',
        subject,
        html: body,
      });
    }
  }
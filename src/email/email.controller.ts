import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendEmailRequest } from './email.models';

@Controller('email')
export class EmailController {
  @Post()
  sendEmail(@Body() emailRequest: SendEmailRequest): void {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
 
    sgMail
      .send(emailRequest)
      .then(() => {
        console.log('Email sent');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  @Get()
  getEmail(): any {
    return {
      email: 'Email'
    }
  }
}

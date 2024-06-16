import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendEmailRequest, TestAuth } from './email.models';

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

  @Post('auth')
  authenticateTest(@Body() authRequest: TestAuth): any {
    return {
      isAuthenticated: authRequest.testApiKey === process.env.TEST_API_KEY
    }
  }
}

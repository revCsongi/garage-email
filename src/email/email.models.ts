export interface SendEmailRequest {
  to: string; 
  from: string; 
  subject: string;
  html: string;
}

export interface TestAuth {
  testApiKey: string;
}

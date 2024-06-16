import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration, {
  configurationPath,
} from './configuration/configuration';
import { EmailController } from './email/email.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: configurationPath,
      load: [configuration],
      isGlobal: true,
    }),
  ],
  controllers: [EmailController],
  providers: [],
})
export class AppModule {}

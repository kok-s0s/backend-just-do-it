import { Controller, Get } from '@nestjs/common';
import { WebsiteService } from './website.service';

@Controller('website')
export class WebsiteController {
  constructor(private readonly webSite: WebsiteService) {}

  @Get('websites')
  getQuestions(): any {
    return this.webSite.getWebSites();
  }
}

import { Controller, Get, Post, Param } from '@nestjs/common';
@Controller('report/income')
export class AppController {
  @Get(':type')
  getAllIncomeReports(@Param() type: string) {
    console.log(type)
    return [];
  }
}

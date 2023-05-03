// import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
// import { CreateCatDto, UpdateCatDto, ListAllEntities } from './create-cat.dto';

// @Controller('cats')
// export class CatsController {
//   @Post()
//   create(@Body() createCatDto: CreateCatDto) {
//     return 'This action adds a new cat';
//   }

//   @Get()
//   findAll(@Query() query: ListAllEntities) {
//     return `This action returns all cats (limit: ${query.limit} items)`;
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return `This action returns a #${id} cat`;
//   }

//   @Put(':id')
//   update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
//     return `This action updates a #${id} cat`;
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return `This action removes a #${id} cat`;
//   }
// }

// import { Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
// import { Response } from 'express';

// @Controller('cats')
// export class CatsController {
  
//   @Post()
//   create(@Res() res: Response) {
//     res.status(HttpStatus.CREATED).send();
//   }

//   @Get()
//   findAll(@Res({ passthrough: true }) res: Response) {
//   res.status(HttpStatus.OK);
//   return [];
//   }
// }

import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }


  @Post()
  async create1(@Body() createCatDto: CreateCatDto) {
  return 'This action adds a new cat';
}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }


}
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GithubService } from './github.service';


@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) { }

  @Get()
  findAll() {
    return this.githubService.findAll();
  }
}

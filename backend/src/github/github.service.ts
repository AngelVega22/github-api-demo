import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Github } from './entities/github.entity';

@Injectable()
export class GithubService {
  constructor(private readonly httpService: HttpService) { }

  findAll(): Observable<Github[]> {
    const url = 'https://api.github.com/repos/AngelVega22/github-api-demo/commits';
    return this.httpService.get(url).pipe(
      map((response: AxiosResponse) => response.data)
    );
  }
}

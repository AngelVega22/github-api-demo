import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Github } from './entities/github.entity';

@Injectable()
export class GithubService {
  constructor(private readonly httpService: HttpService) { }
  private readonly githubToken = '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';

  findAll(): Observable<Github[]> {
    const url = 'https://api.github.com/repos/AngelVega22/github-api-demo/commits';

    const headers = {
      Authorization: `Bearer ${this.githubToken}`,
    };
    return this.httpService.get(url, { headers }).pipe(
      map((response: AxiosResponse) => response.data)
    );
  }
}

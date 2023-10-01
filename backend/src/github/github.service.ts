import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Github } from './entities/github.entity';
import configuration from 'src/config/configuration';


@Injectable()
export class GithubService {
  constructor(private readonly httpService: HttpService) { }

  private readonly configuration = configuration();

  findAll(): Observable<Github[]> {
    const url = 'https://api.github.com/repos/AngelVega22/github-api-demo/commits';

    const headers = {
      Authorization: `Bearer ${this.configuration.github_token}`,
    };
    return this.httpService.get(url, { headers }).pipe(
      map((response: AxiosResponse) => response.data)
    );
  }
}

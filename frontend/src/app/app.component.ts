import { Component } from '@angular/core';
import { GithubService } from './github.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  commitData: any;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getDatos().subscribe((data) => {
      this.commitData = data;

    });
  }

}

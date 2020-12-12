import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GithubService } from './../../services/github.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user = null;
  userName: string;
  error = null;

  constructor(
    private ref: ChangeDetectorRef,
    private router: Router,
    private githubService: GithubService
  ) {}

  ngOnInit(): void {}

  handelFindUser() {
    this.githubService.getUserDetails(this.userName).subscribe(
      (user) => {
        this.user = user;
        this.error = null;
        this.ref.detectChanges();
      },
      (err) => {
        this.user = null;
        //this.error = 'User Not Found';
        this.router.navigateByUrl('**');
        this.ref.detectChanges();
      }
    );
  }
}

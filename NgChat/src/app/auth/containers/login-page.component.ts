import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { Authenticate } from '../models/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  pending: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.pending = false;
    console.log(this.authService.isLoggedIn());
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/chat']);
    }
  }

  onSubmit($event: Authenticate) {
    this.pending = true;
    this.authService.login($event);

    if (this.authService.redirectUrl) {
      this.router.navigateByUrl(this.authService.redirectUrl);
    } else {
      this.router.navigate(['/chat']);
    }
  }

}

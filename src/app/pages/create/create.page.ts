import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  constructor(
    public authService: AuthService,
    public router: Router,
  ) { }

  ngOnInit() {
    if (!this.authService.userData) this.router.navigate(['/login']);
  }

}
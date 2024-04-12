import { Component, OnInit } from '@angular/core';
import { IUserData } from 'src/app/interfaces/user-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {
  public userData!: IUserData;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../user/header/header.component'
import { FooterComponent } from '../../user/footer/footer.component'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

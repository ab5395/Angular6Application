import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ComfirmAccountService } from './confirmaccount.service'
import { AppRoute } from '../../shared/AppRoute'

@Component({
  selector: 'app-confirmaccount',
  templateUrl: './confirmaccount.component.html',
  styleUrls: ['./confirmaccount.component.css'],
  providers: [ComfirmAccountService]
})
export class ConfirmaccountComponent implements OnInit {
  emailMessage: string;
  email: string;
  code: string;

  constructor(private route: ActivatedRoute, private confirmAccountService: ComfirmAccountService) {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.code = params['code'];
    });
  }

  ngOnInit() {
    if (this.email && this.code) {
      
      this.confirmAccountService.confirmEmail(this.email, this.code).subscribe(result => {
        this.emailMessage=result.message;
      });
    }
  }

}

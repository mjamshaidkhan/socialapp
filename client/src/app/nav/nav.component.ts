import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../_services/accounts.service';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}

  currentUser$: Observable<User>
  constructor(public accountService: AccountsService) { }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }


  login() {

    console.log(this.model);
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      }, error => {
      console.log(error);
    })

  }

  logout() {
    this.accountService.logout();

  }


}
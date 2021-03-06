import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../_services/accounts.service';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}

  currentUser$: Observable<User>
  constructor(public accountService: AccountsService, private router: Router, private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }


  login() {

    console.log(this.model);
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('/members');
      });

  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');

  }


}

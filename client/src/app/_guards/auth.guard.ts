import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountsService } from '../_services/accounts.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountsService, private toastr : ToastrService){}
  canActivate()    : Observable<boolean> {
    return this.accountService.currentUser$.pipe(

      map(user=>{

        if(user)
        return true;
        this.toastr.error("You shall not pass!")
      })
    );
  }
  
}

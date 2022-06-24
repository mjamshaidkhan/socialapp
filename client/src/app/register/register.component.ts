import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountsService } from '../_services/accounts.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() usersFromHomeComponenet: any;
  @Output() cancelRegister  = new EventEmitter();
  model :any ={}
  constructor(private accountService : AccountsService, private toastr: ToastrService ) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe(response=>{

      console.log(response);
      this.cancel();
    }, error=>{

      console.log(error);
      this.toastr.error(error.error);
    })
    console.log(this.model)
  }


  cancel(){
    this.cancelRegister.emit(false)
    
  }
}

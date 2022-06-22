import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() usersFromHomeComponenet: any;
  @Output() cancelRegister  = new EventEmitter();
  model :any ={}
  constructor(private accountService : AccountsService ) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe(response=>{

      console.log(response);
      this.cancel();
    }, error=>{

      console.log(error);
    })
    console.log(this.model)
  }


  cancel(){
    this.cancelRegister.emit(false)
    
  }
}

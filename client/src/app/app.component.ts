import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  title = 'The Social App';
  users:any;
  
  ngOnInit() {
  this.getUsers();
  }
  

  getUsers(){

    this.http.get('https://localhost:5001/api/users')
    .subscribe(response =>{
      this.users = response;
      console.log(this.users);
      },error=>{

        console.log(error);
      });
  }


}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/libs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
userData: any;
  constructor(private UserService:UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.UserService.getAllUsers().subscribe(data =>{
      this.userData = data;
    },error =>{
      alert(`${error.error.exception.message}`);
      console.log("errors",error);
    });
  
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users=["serap","zehra"];
  isLoggedIn=false;

    
  
  constructor() { }

login(){
  this.isLoggedIn=!this.isLoggedIn;

}




}



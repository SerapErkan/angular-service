import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthChildGuard implements CanActivateChild {
constructor(private userService:UserService){}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot):

    boolean  {
      console.log("isLoggedIn",this.userService.isLoggedIn);
      console.log("route", childRoute);
      console.log("state",state);

      return this.userService.isLoggedIn;
  
      //CanActivateChild
  }



}

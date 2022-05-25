import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthExitGuard implements CanDeactivate<boolean> {
  constructor(private userService:UserService){}
  canDeactivate(
    component: boolean,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot):

    boolean {
    console.log("isLoggedIn", this.userService.isLoggedIn);


    return !this.userService.isLoggedIn;
  }


}

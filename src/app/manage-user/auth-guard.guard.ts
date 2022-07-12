import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

constructor(private _AuthService: AuthService, private _router: Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {

    const isAuth = this._AuthService.getIsAuth();

    if (!isAuth){
      this._router.navigate(['/user-login']);
    }
    else{
      
    }
    return isAuth;
  }
   
  
}

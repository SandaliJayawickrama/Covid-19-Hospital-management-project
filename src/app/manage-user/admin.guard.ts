import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private _AdminService: AdminService, private _router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ):  boolean | Observable<boolean> | Promise<boolean>  {
      
      const isAuth = this._AdminService.getIsAuth();
      if(!isAuth){
        this._router.navigate(['/admin-login']);
      }
      return isAuth;
  }
  
}

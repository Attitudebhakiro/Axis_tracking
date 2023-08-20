import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TicketingService } from './ticketing.service';






@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(

    private tservice: TicketingService,
    public router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.tservice.isLoggedIn !== true) {
      // window.alert("Access not allowed!");
      this.router.navigate(['login'])
    }
    return true;
  }
}

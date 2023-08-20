import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class TicketingService {
  private signinUrl = 'http://140.82.25.196:8057/swagger/index.html/api/tokens';
  private listevents = "http://140.82.25.196:8057/swagger/index.html/api/matchevents";
  private dashboardUrl = "http://140.82.25.196:8057/swagger/index.html/api/v1/dashboard";
  //private allSUrl = 'http://localhost:7575/allsalaries';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

    // Sign-in
    signIn(username:string, password:string) {
      return this.http.post<any>(this.signinUrl, {username,password})
  
    }
    getToken() {
      return localStorage.getItem('access_token');
    }
    
    getUsername(){
      return localStorage.getItem('access_username');
    }
    
    getName(){
      return localStorage.getItem('access_name')
    }
    get isLoggedIn(): boolean {
      let authToken = localStorage.getItem('access_token');
      return (authToken !== null) ? true : false;
    }
    
    doLogout() {
      let removeToken = localStorage.removeItem('access_token');
      if (removeToken == null) {
        this.router.navigate(['login']);
    
      }
    }

    //
    listEvents(): Observable<any> {
      return this.http.get(this.dashboardUrl, httpOptions).pipe(
      map((response: any) => {
        return response || {}
      }),
      )
      }

      // dashboard statistics
      dashboard(): Observable<any>{
        return this.http.get(this.listevents, httpOptions).pipe(
          map((response: any) => {
            return response || {}
          }),
          )
      }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TicketingService } from '../ticketing.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  info: any
  user:any;

  constructor(
    private tservice: TicketingService,
    private router: Router,

  ){}

  ngOnInit(): void {
    // chech details for logged user
    this.info = {
      token: this.tservice.getToken(),
      username: this.tservice.getUsername(),
      name: this.tservice.getName(),

    };
}

doLogout(){
let removeToken = localStorage.removeItem('access_token');
if (removeToken == null) {
this.router.navigate(['login']);
}
}

}

import { Component } from '@angular/core';
import { TicketingService } from '../ticketing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  statistics: any

  constructor(
    private tservice: TicketingService,
    private router: Router,

  ){

  }
  ngOnInit(): void {
    // fetch 
   this.tservice.dashboard().subscribe((response: any) => {
    this.statistics = response;
    console.log(this.statistics);

  })
  }

}

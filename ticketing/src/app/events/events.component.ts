import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TicketingService } from '../ticketing.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events: any
  
  constructor(
    private tservice: TicketingService,
    private router: Router,

  ){

  }
  ngOnInit(): void {
    // fetch 
   this.tservice.dashboard().subscribe((response: any) => {
    this.events = response;
    console.log(this.events);

  })
  }

}

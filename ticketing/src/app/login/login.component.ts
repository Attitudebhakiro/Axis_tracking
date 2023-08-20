import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketingService } from '../ticketing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform!: FormGroup

  constructor(
    private tservice: TicketingService,
    private router: Router,
    public fb: FormBuilder, ){

  }
  ngOnInit(): void {
    this.loginform = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }
  login(){
    this.tservice.signIn(this.loginform.value.username, this.loginform.value.password)
    .subscribe(
      (data: any)  => {
       console.log(data.username);
        localStorage.setItem('access_token', data.accessToken)
        localStorage.setItem('access_username', data.username)
    
      //  this.router.navigate(['home']);
     },
       error => {
            console.log(error);

        }

      );

}

}

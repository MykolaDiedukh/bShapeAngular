import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient}  from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {
  }
  errors=[{
    show:false,
    description:"hasła nie są takie same"

  }]

  loginForm = new FormGroup({username :new FormControl(), password : new FormControl()}) // grupa formularza Form Control tworzy pola w formularzu.
  LoginUser = (form)=>{
    console.log(form)
    // this.http.get("/adrresAPI")
    //   .subscribe((response)=>{
    //     // robie cos z responsem z bazy danych
    //   })
  }

  registerForm = new FormGroup({firstName: new FormControl(), lastName: new FormControl(), email : new FormControl(), sex : new FormControl(), password : new FormControl(), submitPassword : new FormControl() })


  RegisterUser = (form)=> {
    console.log(form)

    if (form.password === form.submitPassword) {
      // this.http.get("/adrresAPI")
      this.errors[0].show = false;
      //   .subscribe((response)=>{
      //     // robie cos z responsem z bazy danych
      //   })
    } else {
      this.errors[0].show = true;

    }
  }
}

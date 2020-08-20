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

  login= new FormGroup({username :new FormControl(), password : new FormControl()}) // grupa formularza Form Control tworzy pola w formularzu.
  LoginUser = (form)=>{
    console.log(form)
    this.http.get("/adrresAPI")
      .subscribe((response)=>{
        // robie cos z responsem z bazy danych
      })
  }

}

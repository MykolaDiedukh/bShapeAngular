import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient}  from '@angular/common/http'
import * as $ from 'jquery';
/*import * as lightbox from 'lightbox2'*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {
  }

  errors = [{
    show: false,
    description: "hasła nie są takie same"

  }]

  loginForm = new FormGroup({username: new FormControl(), password: new FormControl()}) // grupa formularza Form Control tworzy pola w formularzu.
  LoginUser = (form) => {
    console.log(form)
     this.http.get("http://localhost:8092/user/login")
       .subscribe((response)=>{

       })
  }

  registerForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    sex: new FormControl(),
    password: new FormControl(),
    submitPassword: new FormControl()
  })


  RegisterUser = (form) => {
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

  public ngOnInit() {

      // @ts-ignore
    document.getElementById('bgvid').play();

    // @ts-ignore

    !function ($) {
//eyeOpenClass: 'fa-eye',
//eyeCloseClass: 'fa-eye-slash',
      'use strict';

      $(function () {
        $('[data-toggle="password"]').each(function () {
          var input = $(this);
          var eye_btn = $(this).parent().find('.input-group-text');
          eye_btn.css('cursor', 'pointer').addClass('input-password-hide');
          eye_btn.on('click', function () {
            if (eye_btn.hasClass('input-password-hide')) {
              eye_btn.removeClass('input-password-hide').addClass('input-password-show');
              eye_btn.find('.fa').removeClass('fa-eye').addClass('fa-eye-slash')
              input.attr('type', 'text');
            } else {
              eye_btn.removeClass('input-password-show').addClass('input-password-hide');
              eye_btn.find('.fa').removeClass('fa-eye-slash').addClass('fa-eye')
              input.attr('type', 'password');
            }
          });
        });
      });
      // @ts-ignore
    }(window.jQuery);
  }

}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faFilm} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { JQueryScriptsComponent } from './jquery-scripts/jquery-scripts.component';
import { UserScheduleComponent } from './user-schedule/user-schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    JQueryScriptsComponent,
    UserScheduleComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faFilm);
  }
}

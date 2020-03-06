import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {CoreComponent} from './Core/core.component';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {FormGroup} from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,LoginComponent,CoreComponent],
  bootstrap:    [ AppComponent,LoginComponent ]
})
export class AppModule { }

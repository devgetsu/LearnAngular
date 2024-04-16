import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableModule } from 'primeng/table';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { CreateInputComponent } from './components/create-input/create-input.component';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

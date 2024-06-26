import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GetAllComponent } from './components/get-all/get-all.component';
import { HttpClientModule } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
import { CreateComponent } from './components/create/create.component';

import { FormsModule } from '@angular/forms';
import { GetByIdComponent } from './components/get-by-id/get-by-id.component';
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GetAllComponent,
    CreateComponent,
    GetByIdComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    DecimalPipe,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

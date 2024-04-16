import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProductListComponent } from './components/product-list/product-list.component';

// def

import {MatTableModule} from '@angular/material/table';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { DeleteproductComponent } from './components/deleteproduct/deleteproduct.component';
import { GetProductByIdComponent } from './components/get-product-by-id/get-product-by-id.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductListComponent,
    CreateproductComponent,
    UpdateProductComponent,
    DeleteproductComponent,
    GetProductByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

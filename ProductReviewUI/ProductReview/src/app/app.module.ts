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
import { GetProductByIdComponent } from './components/get-product-by-id/get-product-by-id.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductListComponent,
    CreateproductComponent,
    UpdateProductComponent,
    GetProductByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

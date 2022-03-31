import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './Components/navi/navi.component';
import { BrandComponent } from './Components/brand/brand.component';
import { ColorComponent } from './Components/color/color.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { CarComponent } from './Components/car/car.component';
import { RentalComponent } from './Components/rental/rental.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarImageComponent } from './Components/car-image/car-image.component';
import { CitiesComponent } from './Components/cities/cities.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CarComponent,
    RentalComponent,
    CarImageComponent,
    CitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

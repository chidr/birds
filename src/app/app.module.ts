import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';
import { TakeAwayComponent } from './order/take-away/take-away.component';
import { CartComponent } from './order/cart/cart.component';
import { SpotComponent } from './order/spot/spot.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginInComponent } from './login-in/login-in.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OrderComponent,
    TakeAwayComponent,
    CartComponent,
    SpotComponent,
    SignInComponent,
    LoginInComponent,
    PagenotfoundComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

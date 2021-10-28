import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginInComponent } from './login-in/login-in.component';
import { CartComponent } from './order/cart/cart.component';
import { OrderComponent } from './order/order.component';
import { SpotComponent } from './order/spot/spot.component';
import { TakeAwayComponent } from './order/take-away/take-away.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'footer',component:FooterComponent},
  {path:'order',component:OrderComponent,children:[
    {path:'cart',component:CartComponent},
    {path:'take-away',component:TakeAwayComponent},
    {path:'spot',component:SpotComponent}       
  ]},
  {path:'sign-in',component:SignInComponent},
  {path:'login-in',component:LoginInComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

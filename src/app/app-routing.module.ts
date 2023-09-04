import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {ProviderHomeComponent} from "./component/provider-home/provider-home.component";
import {BookingListComponent} from "./component/booking-list/booking-list.component";
import {ProviderLoginComponent} from "./component/provider-login/provider-login.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "property",
    component: ProviderHomeComponent
  },
  {
    path: "bookings",
    component: BookingListComponent
  },
  {
    path: "provider/login",
    component: ProviderLoginComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

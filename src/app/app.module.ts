import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import {Routes, RouterModule} from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';

import {HttpClientModule} from '@angular/common/http'
import { SignupService } from './signup.service';
import { FooterComponent } from './footer/footer.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const appRoutes:Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'forgotpassword', component: ForgotpasswordComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    PricingComponent,
    FooterComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,    
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }

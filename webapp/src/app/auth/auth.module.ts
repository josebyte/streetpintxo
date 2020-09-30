import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';

// Components
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

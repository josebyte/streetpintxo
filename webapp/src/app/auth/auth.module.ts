import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";

// Components
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }

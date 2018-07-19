import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './views/login/login.component';
import { ServicesModule } from './snippets/services/services.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENT_NOROUNT = [];

@NgModule({
  imports: [
    LoginRoutingModule,
    ServicesModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
      ...COMPONENT_NOROUNT,
      LoginComponent,
  ]
  // entryComponents: COMPONENT_NOROUNT
})
export class LoginModule { }

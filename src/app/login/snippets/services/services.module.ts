import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';
@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [],
    providers: [
        LoginService,
       ]
})
export class ServicesModule {}

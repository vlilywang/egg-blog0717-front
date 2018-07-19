import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainModule } from './main/main.module';
import { LoginModule } from './login/login.module';
const routes: Routes = [
    {
        path: 'app',
        // loadChildren: 'app/main/main.module#MainModule',
        // loadChildren: 'app/main/main.module#MainModule',
        // loadChildren: 'app/group/group.module#GroupModule',
        // loadChildren: 'app/main/main.module#MainModule',
        // loadChildren: 'app/main/main.module#MainModule',
        loadChildren: () => MainModule
    },
    {
        path: 'login',
        loadChildren: () => LoginModule
    },

    {
        path: '',
        redirectTo: '/app/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

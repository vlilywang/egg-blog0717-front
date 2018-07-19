import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainModule } from './main/main.module';

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

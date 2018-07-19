import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './views/main/main.component';

import { HomeComponent } from './views/home/home.component';
import { ArticleComponent } from './views/article/article.component';
import { ArticleDetailComponent } from './views/article-detail/article-detail.component';
const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'article', component: ArticleComponent },
    { path: 'detail/:id', component: ArticleDetailComponent }
    // {
    //   path: 'summary', component: CollectComponent,
    //   children: [
    //     { path: '', component: CollectDefaultComponent, pathMatch: 'full' },
    //     { path: 'category/:id', component: ClueCollectComponent },
    //     // { path: 'reports/:id', component: ReportsCollectComponent },
    //     //  { path: 'clues/detail/:id', component: CollectDetailComponent },
    //     // { path: 'reports/detail/:id', component: ReportsCollectDetailComponent }
    //   ]
    // }
  ]
},


{ path: '**', redirectTo: '/app/home' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

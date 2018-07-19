import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './views/main/main.component';
import { ServicesModule } from './snippets/services/services.module';
import { HomeComponent } from './views/home/home.component';
import { ArticleComponent } from './views/article/article.component';
import { CommonModule } from '@angular/common';
import { ArticleDetailComponent } from './views/article-detail/article-detail.component';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './views/pagination/pagination.component';

const COMPONENT_NOROUNT = [];

@NgModule({
  imports: [
    MainRoutingModule,
    ServicesModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
      ...COMPONENT_NOROUNT,
      MainComponent,
      HomeComponent,
      ArticleComponent,
      ArticleDetailComponent,
      PaginationComponent,
  ]
  // entryComponents: COMPONENT_NOROUNT
})
export class MainModule { }

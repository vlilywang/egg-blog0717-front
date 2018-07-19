import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';
import { ArticleService } from './article.service';
import { ArticleDetailService } from './article-detail.service';
@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [],
    providers: [
        HomeService,
        ArticleService,
        ArticleDetailService
       ]
})
export class ServicesModule {}

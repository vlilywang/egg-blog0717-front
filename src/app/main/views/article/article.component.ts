import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../snippets/services/article.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {
  articles = [];
  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(val => {
      this.articles = val;
      console.log(this.articles);
    });
  }

}

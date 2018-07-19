import { Component, OnInit } from '@angular/core';
import { ArticleDetailService } from '../../snippets/services/article-detail.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.less']
})
export class ArticleDetailComponent implements OnInit {
  article: any;
  articleId: any;
  constructor(
    private articleDetailService: ArticleDetailService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.articleId = this.activatedRoute.snapshot.paramMap.get('id');
    this.articleDetailService.getArticle(this.articleId).subscribe(val => {
      this.article = val;
    });
  }
  getLastArticle() {
    // getLastArticle
    this.articleDetailService.getLastArticle(this.articleId).subscribe(val => {
      this.router.navigateByUrl('/app/detail/' + val);
    });
  }

}

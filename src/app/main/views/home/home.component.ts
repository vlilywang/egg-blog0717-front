import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HomeService } from '../../snippets/services/home.service';
import { Router } from '@angular/router';
// import { $ } from '../../../../../node_modules/protractor';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
    areas = [];
    articles = [];
    page = 1;
    pageSize = 20;
    allPage: number;
    result: any;
    // @ViewChild('myPager') myPager: ElementRef;
    constructor(
        private homeService: HomeService,
        private router: Router,
    ) { }
    ngOnInit() {
        this.homeService.getAreas().subscribe(val => {
            this.areas = val;
        });
        this.homeService.getArticles(this.page, this.pageSize).subscribe(val => {
            this.result = val;
            this.articles = this.result.data;
            this.allPage = this.result.totalPage;
            // this.allPage = this.result.totalAmount[0]['COUNT(*)'] / this.pageSize;
            console.log(this.allPage);
        });
    }
    gotoDetail(id) {
        this.router.navigateByUrl('/app/detail/' + id);
    }
    getPageNumber(value) {
        this.page = value;
        this.homeService.getArticles(this.page, this.pageSize).subscribe(val => {
            this.articles = val.data;
        });
    }
}

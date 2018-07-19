import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.less']
})
export class PaginationComponent implements OnInit {

  @Output() fromChild = new EventEmitter();
  @Input() totalPage;
  value: number;
  currentPage: number;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currentPage = 1;
    const queryParamMap = this.activatedRoute.snapshot.queryParamMap;
    console.log(queryParamMap.get('page'));
    // this.currentPage = parseInt();
    if (!this.currentPage) {
      this.currentPage = 1;
    }
  }
  routerChange(currentPage) {
    this.router.navigate(['/app/home'], {
      queryParams: {
        page: currentPage
      }
    });

  }
  moveToFirstPage() {
    this.currentPage = 1;
    this.fromChild.emit(this.currentPage);
    // this.routerChange(this.currentPage);
  }
  moveToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
      this.fromChild.emit(this.currentPage);
      // this.routerChange(this.currentPage);
    }
  }
  changePage(pageNum) {
    this.currentPage = pageNum;
    this.fromChild.emit(this.currentPage);
    // this.routerChange(this.currentPage);
  }
  moveToLastPage() {
    this.currentPage = this.totalPage;
    this.fromChild.emit(this.totalPage);
    // this.routerChange(this.currentPage);
  }
  moveToNextPage() {
    if (this.currentPage < this.totalPage) {
      this.currentPage = this.currentPage + 1;
      this.fromChild.emit(this.currentPage);
      // this.routerChange(this.currentPage);
    }
  }
}

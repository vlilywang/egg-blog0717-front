import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ArticleDetailService {

    private headers = new HttpHeaders({ 'content-Type': 'application/json' });
    constructor(
        private http: HttpClient,
    ) { }

    getArticle(id): Observable<any> {
        return this.http.get(`/api/getArticleDetail/${id}`).pipe(
            map(res => res)
        );
    }
    getLastArticle(id): Observable<any> {
        return this.http.get(`/api/getLast/${id}`).pipe(map(res => res));
    }
}



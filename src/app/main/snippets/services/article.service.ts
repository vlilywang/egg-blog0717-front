import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ArticleService {

    private headers = new HttpHeaders({ 'content-Type': 'application/json' });
    constructor(
        private http: HttpClient,
    ) { }

    getArticles(): Observable<any> {
        return this.http.get('/api/getAllArticle').pipe(
            map(res => res)
        );
    }
}



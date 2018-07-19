import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HomeService {

    private headers = new HttpHeaders({ 'content-Type': 'application/json' });
    constructor(
        private http: HttpClient,
    ) { }

    getAreas(): Observable<any> {
        return this.http.get('/api/areas').pipe(
            map(res => res)
        );
    }
    getArticles(page, pageSize): Observable<any> {
        return this.http.get(`/api/getAllArticle?page=${page}&pageSize=${pageSize}`).pipe(
            map(res => res)
        );
    }
}



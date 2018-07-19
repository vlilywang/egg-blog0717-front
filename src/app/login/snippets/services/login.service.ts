import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {

    private headers = new HttpHeaders({ 'content-Type': 'application/json' });
    constructor(
        private http: HttpClient,
    ) { }
    login(name, password): Observable<any> {
        return this.http.get(`/api/login?name=${name}&password=${password}`).pipe(map(res => res));
    }
    test(): Observable<any> {
        return this.http.get(`/api/test`).pipe(map(res => res));
    }

    // getArticle(id): Observable<any> {
    //     return this.http.get(`/api/getArticleDetail/${id}`).pipe(
    //         map(res => res)
    //     );
    // }
}



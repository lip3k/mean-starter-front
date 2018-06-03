import {Injectable} from '@angular/core';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Router} from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

    constructor(private http: Http, private router: Router) {}

    signIn(username: string, password: string) {
        return this.http.post(`${environment.apiUrl}/api/signin`, {username, password}).pipe(map(res => res.json()));
    }

    signOut() {
        localStorage.removeItem('token');
        this.router.navigate(['out/login']);
    }

    signUp(username, password, email) {
        return this.http.post(`${environment.apiUrl}/api/signup`, {username, password, email}).pipe(map(res => res.json()));
    }

    verifyToken() {
        const token = this.getToken();
        return this.http.post(`${environment.apiUrl}/api/verify`, {token}).pipe(map(res => res.json()));
    }

    isUserLoggedIn() {
        return localStorage.getItem('token') !== null;
    }

    getToken() {
        return localStorage.getItem('token');
    }

    private jwt() {
        const token = JSON.parse(localStorage.getItem('token'));

        if (token) {
            const headers = new Headers({'Authorization': 'Bearer ' + token});
            return new RequestOptions({headers: headers});
        }
    }
}

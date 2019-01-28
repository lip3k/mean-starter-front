import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
import {User} from '../_models/user.model';
import {Flashcard} from '../_models/flashcard.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: Http, private router: Router) {
    }

    ping() {
        return this.http.get(`${environment.apiUrl}/api/ping`).pipe(map(res => res.json()));
    }

}

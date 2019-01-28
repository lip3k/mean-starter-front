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
export class FlashcardsService {

    constructor(private http: Http, private router: Router) {
    }

    create(flashcard: Flashcard) {
        return this.http.post(`${environment.apiUrl}/api/flashcard/`, {flashcard}, this.jwt()).pipe(map(res => res.json()));
    }

    get() {
        return this.http.get(`${environment.apiUrl}/api/flashcard/`, this.jwt()).pipe(map(res => res.json()));
    }

    update(flashcard: Flashcard) {
        return this.http.put(`${environment.apiUrl}/api/flashcard/`, {flashcard}, this.jwt()).pipe(map(res => res.json()));
    }

    delete(flashcard: Flashcard) {
        return this.http.delete(`${environment.apiUrl}/api/flashcard/${flashcard['_id']}`,  this.jwt()).pipe(map(res => res.json()));
    }

    private jwt() {
        const token = localStorage.getItem('token');

        if (token) {
            const headers = new Headers({'Authorization': 'Bearer ' + token});
            return new RequestOptions({headers: headers});
        }
    }
}

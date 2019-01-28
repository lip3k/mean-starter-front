import {Component, OnInit} from '@angular/core';
import {UserService} from './_services/user.service';
import {ApiService} from './_services/api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    apiProcessing: boolean;

    constructor(private api: ApiService) {
        this.apiProcessing = true;
    }

    ngOnInit() {

        this.api.ping().subscribe(res => {
            this.apiProcessing = false;
        });

    }
}

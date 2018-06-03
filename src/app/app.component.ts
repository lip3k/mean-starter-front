import {Component, OnInit} from '@angular/core';
import {UserService} from './_services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userService.verifyToken().subscribe(res => {
            if (!res.success) {
                this.userService.signOut();
            }
        });
    }

    isUserLoggedIn(): boolean {
        return this.userService.isUserLoggedIn();
    }
}

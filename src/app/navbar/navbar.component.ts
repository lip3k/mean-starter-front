import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    isUserLoggedIn = false;

    constructor(private userService: UserService, private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.checkIfUserSignedIn();
            }
        });
    }

    ngOnInit() {
        this.checkIfUserSignedIn();
    }

    checkIfUserSignedIn() {
        if (this.userService.isUserLoggedIn()) {
            this.userService.verifyToken().subscribe(res => {
                if (!res.success) {
                    this.signOut();
                }
                this.isUserLoggedIn = true;
            });
        } else {
            this.isUserLoggedIn = false;
        }
    }

    signOut() {
        this.userService.signOut();
        this.isUserLoggedIn = false;
    }

}

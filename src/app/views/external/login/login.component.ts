import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../_services/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    login: string = 'lip3k';
    password: string = 'london09';

    constructor(private userService: UserService, private router: Router) {
    }

    ngOnInit() {}

    signIn() {
        this.userService.login(this.login, this.password).subscribe(res => {
            if (res.token) {
                localStorage.setItem('token', res.token);
                this.goToDashboard();
            }
        });
    }

    goToDashboard() {
        this.router.navigate(['']);
    }
}

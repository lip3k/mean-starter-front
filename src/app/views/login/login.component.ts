import {Component, OnInit} from '@angular/core';
import {UserService} from '../../_services/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    email: string = 'dawid@optimalmonitoring.com';
    password: string = 'london09';

    constructor(private userService: UserService, private router: Router) {
    }

    ngOnInit() {
        this.userService.verifyToken().subscribe(res => {
            if (res.success) {
                this.goToDashboard();
            }
        });
    }

    signIn() {
        this.userService.signIn(this.email, this.password).subscribe(res => {
            if (res.token) {
                localStorage.setItem('token', res.token);
                this.goToDashboard();
            }
        });
    }

    goToDashboard() {
        this.router.navigate(['dashboard']);
    }
}

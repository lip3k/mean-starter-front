import {Component, OnInit} from '@angular/core';
import {User} from '../../_models/user.model';
import {UserService} from '../../_services/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    user: User = new User('', '', '', false);
    passConfirm: string;

    constructor(private userService: UserService) {
    }

    ngOnInit() {

    }

    registerNewUser() {
        console.log(this.user);
        this.userService.signUp(this.user).subscribe(res => {
            console.log(res);
        });
    }

}

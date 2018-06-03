import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRouting} from './app.routing';
import {UserService} from './_services/user.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRouting
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

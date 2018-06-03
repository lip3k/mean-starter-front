import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {ExternalRouting} from './external.routing';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ExternalRouting,
        FormsModule
    ],
    declarations: [LoginComponent]
})
export class ExternalModule {
}

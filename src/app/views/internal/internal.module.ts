import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {InternalRouting} from './internal.routing';

@NgModule({
    imports: [
        CommonModule,
        InternalRouting
    ],
    declarations: [DashboardComponent]
})
export class InternalModule {
}

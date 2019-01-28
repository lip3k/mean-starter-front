import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from './_services/auth.guard';
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';
import {ReviewContainerComponent} from './_components/review-container/review-container.component';
import {FlashcardCreatorComponent} from './_components/flashcard-creator/flashcard-creator.component';
import {FlashcardListComponent} from './_components/flashcard-list/flashcard-list.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent
    },
    {
        path: 'create',
        canActivate: [AuthGuard],
        component: FlashcardCreatorComponent
    },
    {
        path: 'learn',
        canActivate: [AuthGuard],
        component: FlashcardListComponent
    },
    {
        path: 'review',
        canActivate: [AuthGuard],
        component: ReviewContainerComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting {
}

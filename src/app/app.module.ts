import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRouting} from './app.routing';
import {UserService} from './_services/user.service';
import {NavbarComponent} from './navbar/navbar.component';
import {FlashcardComponent} from './_components/flashcard/flashcard.component';
import {FlashcardCreatorComponent} from './_components/flashcard-creator/flashcard-creator.component';
import {FlashcardListComponent} from './_components/flashcard-list/flashcard-list.component';
import {FlashcardsService} from './_services/flashcards.service';
import {ReviewContainerComponent} from './_components/review-container/review-container.component';
import {LoginComponent} from './views/login/login.component';
import {FormsModule} from '@angular/forms';
import {ApiService} from './_services/api.service';
import {LoaderComponent} from './_components/loader/loader.component';
import {RegisterComponent} from './views/register/register.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FlashcardComponent,
        FlashcardCreatorComponent,
        FlashcardListComponent,
        ReviewContainerComponent,
        LoginComponent,
        LoaderComponent,
        RegisterComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        AppRouting
    ],
    providers: [UserService, FlashcardsService, ApiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

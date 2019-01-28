import {Component, OnInit} from '@angular/core';
import {Flashcard} from '../../_models/flashcard.model';
import {FlashcardsService} from '../../_services/flashcards.service';

@Component({
    selector: 'app-flashcard-creator',
    templateUrl: './flashcard-creator.component.html',
    styleUrls: ['./flashcard-creator.component.scss']
})
export class FlashcardCreatorComponent implements OnInit {

    flashcard: Flashcard;

    constructor(private flashcardService: FlashcardsService) {
        this.initNewCard();
    }

    ngOnInit() {
    }

    initNewCard() {
        this.flashcard = new Flashcard('', '', 0, 0);
    }

    saveFlashcard() {
        this.flashcardService.create(this.flashcard).subscribe(res => {
            if (res.success) {
                this.initNewCard();
            }
        });
    }

}

import {Component, OnInit} from '@angular/core';
import {Flashcard} from '../../_models/flashcard.model';
import {FlashcardsService} from '../../_services/flashcards.service';
import * as moment from 'moment';

@Component({
    selector: 'app-review-container',
    templateUrl: './review-container.component.html',
    styleUrls: ['./review-container.component.scss']
})
export class ReviewContainerComponent implements OnInit {

    cards: Flashcard[];

    cardIndex: number;

    allCards: number;
    cardsToReview: number;
    goodAnswers: number;


    constructor(private flashcardService: FlashcardsService) {
    }

    ngOnInit() {
        this.flashcardService.get().subscribe(res => {
            if (!res.success) {
                console.error('Whops', res.msg);
            }
            this.cards = res.payload;

            this.allCards = this.cards.length;
            this.goodAnswers = 0;
            this.cardIndex = -1;

            this.getReviewCards();

        });
    }

    nextCard(answerCorrect) {
        const card = this.cards.shift();
        if (!answerCorrect) {
            card['failedToAnswer'] = true;
            this.cards = this.cards.concat([card]);
        } else {
            if (!card['failedToAnswer']) {
                this.goodAnswers++;
            }
        }
    }

    getReviewCards() {
        const now = moment().unix();
        this.cards = this.cards.filter(card => {
            return card.reviewTimestamp < now;
        });

        this.cardsToReview = this.cards.length;
    }

}

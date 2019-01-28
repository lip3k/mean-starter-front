import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Flashcard} from '../../_models/flashcard.model';
import {FlashcardsService} from '../../_services/flashcards.service';
import * as moment from 'moment';

const dayIntervals = [1, 2, 3, 5, 7, 14, 21, 28, 56];

@Component({
    selector: 'app-flashcard',
    templateUrl: './flashcard.component.html',
    styleUrls: ['./flashcard.component.scss']
})
export class FlashcardComponent implements OnInit {

    @Input() card: Flashcard;
    @Output() onAnswerGiven = new EventEmitter();

    footerBtns = [false, false, false];
    footerBtnCount = 0;

    flipped = false;

    constructor(private flashcardService: FlashcardsService) {
    }

    ngOnInit() {}

    flipCard() {
        this.flipped = !this.flipped;
        this.showFooterBtn();
    }

    answerYes() {
        this.addScore();
        this.flashcardService.update(this.card).subscribe(res => {
            this.emitAnswer(true);
        });
    }

    answerNo() {
        this.zeroScore();
        this.flashcardService.update(this.card).subscribe(res => {
            this.emitAnswer(false);
        });
    }

    emitAnswer(answer: boolean) {
        this.onAnswerGiven.emit(answer);
        this.flipped = !this.flipped;
    }

    showFooterBtn() {
        if (this.footerBtnCount < this.footerBtns.length) {
            this.footerBtns[this.footerBtnCount++] = true;
            setTimeout(() => {
                this.showFooterBtn();
            }, 50);
        }
    }

    public addScore() {
        this.card.score++;
        this.card.reviewTimestamp = this.getNextReviewDate();
    }

    public zeroScore() {
        this.card.score = 0;
        this.card.reviewTimestamp = this.getNextReviewDate();
    }

    private getNextReviewDate(): number {
        const now = moment();
        return now.add(dayIntervals[this.card.score], 'days').hour(0).minute(0).second(0).unix();
    }
}

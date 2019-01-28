import { Component, OnInit } from '@angular/core';
import {FlashcardsService} from '../../_services/flashcards.service';
import {Flashcard} from '../../_models/flashcard.model';

@Component({
  selector: 'app-flashcard-list',
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.scss']
})
export class FlashcardListComponent implements OnInit {

  cards: Flashcard[];

  constructor(private flashcardService: FlashcardsService) { }

  ngOnInit() {
      this.getCards();
  }

  getCards() {
      this.flashcardService.get().subscribe(res => {
          if (!res.success) {
              console.error('Whops', res.msg);
          }
          this.cards = res.payload;
      });
  }

  deleteCard(flashcard: Flashcard) {
      this.flashcardService.delete(flashcard).subscribe(res => {
          if (res.success) {
              this.getCards();
          }
      });
  }
}

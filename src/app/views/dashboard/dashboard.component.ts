import { Component, OnInit } from '@angular/core';
import {Flashcard} from '../../_models/flashcard.model';
import {FlashcardsService} from '../../_services/flashcards.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor() { }

  ngOnInit() {}

}

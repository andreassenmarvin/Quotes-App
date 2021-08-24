import { Quotes } from './../../quote';
import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  constructor() { }

  quote!: Quotes;

  upvote() {
    this.quote.upvotes++;
    this.quote.score++;
  }

  downvote() {
    this.quote.downvotes++;
    this.quote.score--;
  }

  ngOnInit(): void {
  }
}

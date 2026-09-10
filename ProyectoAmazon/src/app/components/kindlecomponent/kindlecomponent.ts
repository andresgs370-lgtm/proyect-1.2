import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Kindleservise, Book } from '../../servise/kindleservise';

@Component({
  selector: 'app-kindlecomponent',
  standalone: false,
  templateUrl: './kindlecomponent.html',
  styleUrl: './kindlecomponent.css',
})
export class Kindlecomponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book | null = null;
  bookText = '';

  constructor(
    protected kindleservise: Kindleservise,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.kindleservise.getBooks().subscribe((res) => {
      this.books = res.results;
      this.cdr.detectChanges();
    });
  }

  openBook(book: Book) {
    this.selectedBook = book;
    const url = this.kindleservise.getBookText(book);
    if (url) {
      this.kindleservise.getBookContent(url).subscribe((text) => {
        this.bookText = text.slice(0, 5000);
        this.cdr.detectChanges();
      });
    }
  }

  closeBook() {
    this.selectedBook = null;
    this.bookText = '';
  }
}

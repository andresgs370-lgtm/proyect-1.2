import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Book {
  id: number;
  title: string;
  authors: { name: string }[];
  formats: { [key: string]: string };
  subjects: string[];
}

interface GutendexResponse {
  count: number;
  next: string | null;
  results: Book[];
}

@Injectable({
  providedIn: 'root',
})
export class Kindleservise {
  private baseUrl = 'https://gutendex.com/books/';

  constructor(private http: HttpClient) {}

  getBooks(search?: string): Observable<GutendexResponse> {
    const url = search ? `${this.baseUrl}?search=${search}` : this.baseUrl;
    return this.http.get<GutendexResponse>(url);
  }

  getBookText(book: Book): string {
    return book.formats['text/plain; charset=utf-8'] || book.formats['text/plain'] || '';
  }

  getBookContent(url: string): Observable<string> {
    return this.http.get(url, { responseType: 'text' });
  }
  getBookCover(book: Book): string | null {
    return book.formats['image/jpeg'] || null;
  }
}

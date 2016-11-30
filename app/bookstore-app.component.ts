import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

import {Book} from './book';
import {BookService} from './shared/book.service';

@Component({
	selector: 'my-app',
	providers: [BookService],
	templateUrl: 'app/bookstore-app.component.html'
})
export class BookstoreAppComponent implements OnInit{
	books: Book[];
	
	constructor(private bookService: BookService){}
	
	getBooks(): void{
		this.books = this.bookService.getBooks();
	}
	
	ngOnInit(): void{
		this.getBooks();
	}
}
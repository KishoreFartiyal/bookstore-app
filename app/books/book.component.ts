import {Component, Input} from '@angular/core';
import {Book} from '../book';

@Component({
	selector: 'book',
	templateUrl: 'app/books/book.component.html'
})
export class BookComponent{
	@Input() book: Book;
}
import {Component, Input} from '@angular/core';

import {Book} from '../book';

@Component({
	selector: 'book-footer',
	templateUrl: 'app/books/book-footer.component.html'
})
export class BookFooterComponent{
	@Input() book: Book;
	currentTab: string = "Description";
	
	showDescription = function(){
		this.currentTab = "Description";
		console.log("description clicked");
	};
	
	showSpecifications = function(){
		this.currentTab = "Specifications";
	};
	
	showReviews = function(){
		this.currentTab = "Reviews";
	};
}
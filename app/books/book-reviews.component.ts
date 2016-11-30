import {Component, Input} from '@angular/core';
import {FormGroup,
	FormBuilder, 
	FormControl,
	Validators} from '@angular/forms'; 
import {Book} from '../book';

function isEmailIdValid (input: FormControl) {
  const isEmailIdValid = /^[a-zA-Z0-9_\.]*@..*\...*$/g.test(input.value);

  return isEmailIdValid ? null : { isEmailIdValid: true };
}

@Component({
	selector: 'book-reviews',
	templateUrl: 'app/books/book-reviews.component.html'
})
export class BookReviewsComponent{
	@Input() book: Book;
	
	reviewForm: FormGroup;
	rating: FormControl;
	ratingComment: FormControl;
	emailId: FormControl;
	
	constructor(formBuilder: FormBuilder){
		this.rating = new FormControl('', []);
		this.rating.setValue(1);
		this.ratingComment = new FormControl('', [
			Validators.required
		]);
		this.emailId = new FormControl('', [isEmailIdValid]);
		
		this.reviewForm = formBuilder.group({
			rating: this.rating,
			ratingComment: this.ratingComment,
			emailId: this.emailId
		});
	}
	
	saveReview = function(): void{
		this.book.reviews.push({
			rating: this.rating.value,
			reviewComment: this.ratingComment.value,
			reviewerEmail: this.emailId.value 
		});
		
		this.ratingComment.setValue(undefined);
		this.emailId.setValue(undefined);
	}
	
}
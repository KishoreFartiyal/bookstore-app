import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {BookstoreAppComponent} from './bookstore-app.component';
import {BookComponent} from './books/book.component';
import {BookFooterComponent} from './books/book-footer.component';
import {BookReviewsComponent} from './books/book-reviews.component';

@NgModule({
	imports: [BrowserModule,
		ReactiveFormsModule,
		FormsModule],
	declarations: [
					BookstoreAppComponent, 
					BookComponent, 
					BookFooterComponent,
					BookReviewsComponent
	],
	bootstrap: [BookstoreAppComponent]
})
export class BookStoreAppModule{}
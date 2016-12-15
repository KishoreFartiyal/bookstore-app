import {Injectable} from '@angular/core';

import {Book} from '../book';
import {BOOKS} from './mock-books';

@Injectable()
export class BookService{
	
	getBooks(): Book[]{
		//instead of calling http service, we are using mock json objects
		//if we were to use http service and observables, then we could  implement
		// observable subscritpion error handling services like
		// this.http('url')
		//		.map(mapFunction)
		//		.subscribe(onNextFunction, errorFunction, onCompleteFunction);
		//But in our case, we can't use such error handling as we are not using observable streams
		return BOOKS;
	}
}

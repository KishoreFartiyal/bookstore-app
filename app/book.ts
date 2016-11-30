class BookSpecification{
	type: string;
	pageCount: number;
	author: string;
	publicationYear: string;
	
	constructor(type: string, pageCount: number, author: string,
				publicationYear: string){
		this.type = type;
		this.pageCount = pageCount;
		this.author = author;
		this.publicationYear = publicationYear;
	}
}

class BookReview{
	rating: number;
	reviewComment: string;
	reviewerEmail: string;
	
	constructor(rating: number, reviewComment: string, reviewerEmail: string){
		this.rating = rating;
		this.reviewComment = reviewComment;
		this.reviewerEmail = reviewerEmail;
	}
}

export class Book{
	title: string;
	price: number;
	description: string;
	imageUrl: string;
	specification: BookSpecification;
	reviews: Array<BookReview>;
	isAvailable: boolean;
	
	constructor(title: string, price: number, description: string, imageUrl: string,
				specification: BookSpecification, reviews: Array<BookReview>, isAvailable: boolean){
		this.title = title;
		this.price = price;
		this.description = description;
		this.imageUrl = imageUrl;
		this.specification = specification;
		this.reviews = reviews;
		this.isAvailable = isAvailable;
	}
}
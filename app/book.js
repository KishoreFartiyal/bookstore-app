"use strict";
var BookSpecification = (function () {
    function BookSpecification(type, pageCount, author, publicationYear) {
        this.type = type;
        this.pageCount = pageCount;
        this.author = author;
        this.publicationYear = publicationYear;
    }
    return BookSpecification;
}());
var BookReview = (function () {
    function BookReview(rating, reviewComment, reviewerEmail) {
        this.rating = rating;
        this.reviewComment = reviewComment;
        this.reviewerEmail = reviewerEmail;
    }
    return BookReview;
}());
var Book = (function () {
    function Book(title, price, description, imageUrl, specification, reviews, isAvailable) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this.specification = specification;
        this.reviews = reviews;
        this.isAvailable = isAvailable;
    }
    return Book;
}());
exports.Book = Book;
//# sourceMappingURL=book.js.map
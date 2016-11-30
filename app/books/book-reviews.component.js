"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var book_1 = require('../book');
function isEmailIdValid(input) {
    var isEmailIdValid = /^[a-zA-Z0-9_\.]*@..*\...*$/g.test(input.value);
    return isEmailIdValid ? null : { isEmailIdValid: true };
}
var BookReviewsComponent = (function () {
    function BookReviewsComponent(formBuilder) {
        this.saveReview = function () {
            this.book.reviews.push({
                rating: this.rating.value,
                reviewComment: this.ratingComment.value,
                reviewerEmail: this.emailId.value
            });
            this.ratingComment.setValue(undefined);
            this.emailId.setValue(undefined);
        };
        this.rating = new forms_1.FormControl('', []);
        this.rating.setValue(1);
        this.ratingComment = new forms_1.FormControl('', [
            forms_1.Validators.required
        ]);
        this.emailId = new forms_1.FormControl('', [isEmailIdValid]);
        this.reviewForm = formBuilder.group({
            rating: this.rating,
            ratingComment: this.ratingComment,
            emailId: this.emailId
        });
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', book_1.Book)
    ], BookReviewsComponent.prototype, "book", void 0);
    BookReviewsComponent = __decorate([
        core_1.Component({
            selector: 'book-reviews',
            templateUrl: 'app/books/book-reviews.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], BookReviewsComponent);
    return BookReviewsComponent;
}());
exports.BookReviewsComponent = BookReviewsComponent;
//# sourceMappingURL=book-reviews.component.js.map
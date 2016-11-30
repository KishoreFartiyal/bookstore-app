import {Book} from '../book';

export const BOOKS: Book[] = [
	new Book(
		'Land of Seven Rivers', 
		278, 
		"A Brief History of India’s Geography", 
		'land-of-seven-rivers.jpg', 
		{
			type: 'Paperback',
			pageCount: 331,
			author: 'Sanjeev Sanyal',
			publicationYear: '2012'
		}, 
		[{
			rating: 4,
			reviewComment: 'Seven rivers, five thousand years, one nation, one history, one terrific book',
			reviewerEmail: 'abc@gmail.com'
		},{
			rating: 3,
			reviewComment: 'A must read',
			reviewerEmail: 'xyz@gmail.com'
		}], 
		true
	),
	new Book(
		'Breaking india: Western Interventions in Dravidian and Dalit Faultlines', 
		550, 
		"Know about the interventions of the West on the Eastern traditions", 
		'breaking-india.jpg', 
		{
			type: 'HardCover',
			pageCount: 666,
			author: 'Rajiv Malhotra',
			publicationYear: '2011'
		}, 
		[{
			rating: 4,
			reviewComment: '5.0 out of 5 starsIf you are a true patriotic. you will worship this..if not..you will become one :)',
			reviewerEmail: 'abc@gmail.com'
		},{
			rating: 3,
			reviewComment: 'Amazing book',
			reviewerEmail: 'xyz@gmail.com'
		}],  
		false
	),
	new Book(
		'I am The Mind', 
		199, 
		"Imagine if you can understand how others Mind function.", 
		'I-am-the-mind.jpg', 
		{
			type: 'HardCover',
			pageCount: 254,
			author: 'Deep Trivedi',
			publicationYear: '2016'
		}, 
		[{
			rating: 4,
			reviewComment: 'The book makes for a great reading with wonderful anecdotes and illustrations',
			reviewerEmail: 'abc@gmail.com'
		},{
			rating: 3,
			reviewComment: 'Thought provoking!!',
			reviewerEmail: 'xyz@gmail.com'
		}],  
		true
	),
	new Book(
		'The Monk Who Sold His Ferrari', 
		280, 
		"A renowned inspirational fiction", 
		'monk-sold-ferari.jpg', 
		{
			type: 'Paperback',
			pageCount: 254,
			author: 'Robin Sharma',
			publicationYear: '2014'
		}, 
		[{
			rating: 4,
			reviewComment: 'an amazing fuel of inspiration , motivation and spirituality',
			reviewerEmail: 'abc@gmail.com'
		},{
			rating: 3,
			reviewComment: 'Book of wisdom',
			reviewerEmail: 'xyz@gmail.com'
		}],  
		true
	)
];
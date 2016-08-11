//Could also be stored on the window and hydrated by the client
var ItemsById = {
	1: { 
		name: 'Passenger - All the Little Lights', 
		desc: 'All the Little Lights is the fourth studio album by English singer-songwriter Passenger and was released by Black Crow Records and Nettwerk on 24 February 2012.',
		price: 10.99,
		artwork: 'passenger.jpg',
		taxable: true,
		inCart: true,
		stock: 18
	},
	2: { 
		name: 'Jodie Abacus - For real life and not pretend', 
		desc: 'Hailing from the “wonderful world of people from different cultures” that is South London, Jodie Abacus sprang onto the scene this year with a sound that is as classic as it is futuristic.', 
		price: 15.00, 
		artwork: 'jodie_abacus.jpg',
		inCart: true,
		taxable: true,
		stock: 14
	},
	3 : {
		name: 'Nick Cave & The Bad Seeds', 
		desc: 'Nick Cave and the Bad Seeds are an Australian alternative rock band that was formed in Melbourne in 1983 by lead singer Nick Cave, multi-instrumentalist Mick Harvey and guitarist Blixa Bargeld.', 
		price: 12.85,
		artwork: 'nick_cave.jpg', 
		inCart:true,
		taxable:false,
		stock: 11
	},
	4: {
		name: 'Reverb Conspiracy', 
		desc: 'Fuzz Club and The Reverberation Appreciation Society are proud to announce the third edition of our compilation series The Reverb Conspiracy.', 
		price: 19.99,
		artwork: 'reverb_conspiracy.jpg',
		inCart: false, 
		taxable:false,
		stock: 27	
	},
	5: {
		name: 'Shapes in Space', 
		desc: 'This album was made using a Buchla 100 modular synthesiser system from the 1960s.', 
		price: 15.99,
		artwork: 'shapes_in_space.jpg',
		inCart: false,  
		taxable:true,
		stock: 4
	},
	6: {
		name: 'Vacationer', 
		desc: 'Vacationer is an American band based out of Philadelphia, Pennsylvania and Brooklyn, NY.', 
		price: 12.99,
		artwork: 'vacationer.jpg',
		inCart: false,  
		taxable:true,
		stock: 9
	}
}

//Products returned from an api will not be normalized
export default ItemsById;

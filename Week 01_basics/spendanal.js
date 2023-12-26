/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    for(let i=0;i<transactions.length;i++){
        console.log(`category is ${transactions[i].category} ,totalSpent ${transactions[i].price}`)
    }
    //console.log(transactions[1].category)
  }
  
  const transactions=[ {
    id: 1,
    timestamp: 1656076800000,
    price: 910,
    category: 'Food',
    itemName: 'Pizza',
},
{
    id: 2,
    timestamp: 1656076800000,
    price: 898989678,
    category: 'Car',
    itemName: 'Audi',
}];
calculateTotalSpentByCategory(transactions);

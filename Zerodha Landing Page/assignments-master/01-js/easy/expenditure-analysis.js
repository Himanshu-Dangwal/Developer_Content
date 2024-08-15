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


// class Food{
//   constructor(c,p){
//     this.category = c;
//     this.totalSpent = p;
//   }
// }

function calculateTotalSpentByCategory(transactions) {
  const totalSpentByCategory = {};

  for (let i = 0; i < transactions.length; i++) {
    const { category, price } = transactions[i];

    if (!totalSpentByCategory[category]) {
      totalSpentByCategory[category] = 0;
    }

    totalSpentByCategory[category] += price;
  }

  const result = [];
  for (const [category, totalSpent] of Object.entries(totalSpentByCategory)) {
    result.push({
      category: category,
      totalSpent: totalSpent,
    });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;

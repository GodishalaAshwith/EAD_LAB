use ead_lab

db.BookInventory.insertMany([
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    availableCopies: 10,
    price: 550
  },
  {
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    category: "Programming",
    availableCopies: 7,
    price: 450
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-Help",
    availableCopies: 12,
    price: 300
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    category: "Self-Help",
    availableCopies: 5,
    price: 400
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    availableCopies: 8,
    price: 350
  }
])

#Total Number of Books Available per Category
db.BookInventory.aggregate([
  {
    $group: {
      _id: "$category",
      totalCopies: { $sum: "$availableCopies" }
    }
  }
])


#Average Price of Books in Each Category
db.BookInventory.aggregate([
  {
    $group: {
      _id: "$category",
      averagePrice: { $avg: "$price" }
    }
  }
])


#List All Books in a Specific Category Sorted by Price (Descending)
db.BookInventory.aggregate([
  { $match: { category: "Programming" } },
  { $sort: { price: -1 } },
  {
    $project: {
      _id: 0,
      title: 1,
      author: 1,
      price: 1
    }
  }
])


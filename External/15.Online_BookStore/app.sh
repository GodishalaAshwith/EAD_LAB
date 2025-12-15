use ead_lab

db.BookInventory.insertMany([
  {
    title: "Dune",
    author: "Frank Herbert",
    category: "Science Fiction",
    availableCopies: 5
  },
  {
    title: "Foundation",
    author: "Isaac Asimov",
    category: "Science Fiction",
    availableCopies: 3
  },
  {
    title: "Neuromancer",
    author: "William Gibson",
    category: "Science Fiction",
    availableCopies: 0
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-Help",
    availableCopies: 7
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    availableCopies: 4
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    availableCopies: 2
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "History",
    availableCopies: 6
  }
])


#Retrieve All Books in “Science Fiction” Category
db.BookInventory.find({ category: "Science Fiction" })


#Decrease availableCopies by 1 When a Book Is Purchased
db.BookInventory.updateOne(
  { title: "Dune" },
  { $inc: { availableCopies: -1 } }
)


#Delete All Out-of-Stock Books (availableCopies = 0)
db.BookInventory.deleteMany({ availableCopies: 0 })

#

use ead_lab

// CREATE
db.students.insertMany([
  {
    rollNo: 101,
    name: "Ashwith",
    branch: "IT",
    marks: 85,
    skills: ["JS", "MongoDB"]
  },
  {
    rollNo: 102,
    name: "Shravya",
    branch: "CSE",
    marks: 90,
    skills: ["Java", "SQL"]
  },
  {
    rollNo: 103,
    name: "Ravi",
    branch: "IT",
    marks: 72,
    skills: ["Python"]
  }
])

// READ
db.students.find()
db.students.find({ branch: "IT" })
db.students.find({ marks: { $gt: 80 } })
db.students.find({ branch: { $in: ["IT", "CSE"] } })

// UPDATE
db.students.updateOne(
  { rollNo: 101 },
  { $set: { marks: 88 } }
)

db.students.updateOne(
  { rollNo: 103 },
  { $inc: { marks: 5 } }
)

db.students.updateOne(
  { rollNo: 102 },
  { $push: { skills: "MongoDB" } }
)

db.students.updateMany(
  { branch: "IT" },
  { $inc: { marks: 2 } }
)

// DELETE
db.students.deleteOne({ rollNo: 103 })
db.students.deleteMany({ marks: { $lt: 75 } })

use("CrudDB")
// console.log(db);

db.createCollection("courses");

db.courses.insertOne({
    "name": "Asmit's free course learning",
    "price": 0,
    "assignments": 12,
    "projects": 2
})

// db.courses.insertMany([
//     {
//       "name": "Asmit's free course learning",
//       "price": 0,
//       "assignments": 12,
//       "projects": 2
//     },
//     {
//       "name": "Jane's advanced coding course",
//       "price": 500,
//       "assignments": 15,
//       "projects": 3
//     },
//     {
//       "name": "John's beginner programming",
//       "price": 100,
//       "assignments": 10,
//       "projects": 1
//     },
//     {
//       "name": "Doe's data science workshop",
//       "price": 800,
//       "assignments": 20,
//       "projects": 5
//     },
//     {
//       "name": "Smith's AI and ML bootcamp",
//       "price": 1200,
//       "assignments": 25,
//       "projects": 6
//     },
//     {
//       "name": "Emily's web development",
//       "price": 300,
//       "assignments": 18,
//       "projects": 4
//     },
//     {
//       "name": "Michael's database management",
//       "price": 450,
//       "assignments": 14,
//       "projects": 3
//     },
//     {
//       "name": "Sophia's cybersecurity basics",
//       "price": 700,
//       "assignments": 12,
//       "projects": 2
//     },
//     {
//       "name": "Chris's cloud computing",
//       "price": 600,
//       "assignments": 16,
//       "projects": 4
//     },
//     {
//       "name": "Anna's software testing",
//       "price": 250,
//       "assignments": 11,
//       "projects": 2
//     }
//   ]
//   )

let a = db.courses.find({"price": 0})  
// console.log(a);
// console.log(a.count());
// console.log(a.toArray());
let b = db.courses.findOne({"price": 0})  

db.courses.updateOne({"price": 0},{$set: {"price": 100}})

db.courses.updateMany({"price": 0},{$set: {"price": 1000}})


db.courses.deleteOne({"price": 100})

db.courses.deleteMany({"price": 100})

//query&projection operators
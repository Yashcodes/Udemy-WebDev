const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

// const fruitSchema = new mongoose.Schema({
//   name: String,
//   rating: Number,
//   review: String,
// });

//! Validation expressions

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no names specified!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 10,
  review: "Peaches are so yummy!",
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

// * anything that you pass as the first agrument in singular, mongo converts it into the plural form in the database

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Great fruit",
});

// pineapple.save();

const grapes = new Fruit({
  name: "Grapes",
  rating: 7,
  review: "Tasty fruit",
});

// grapes.save();

const person = new Person({
  name: "Ashish",
  age: 19,
  favouriteFruit: pineapple,
});

// person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "The best fruit!",
// });

// const orange = new Fruit({
//   name: "Orange",
//   rating: 5,
//   review: "Too sour for me",
// });

// const banana = new Fruit({
//   name: "Banana",
//   rating: 8,
//   review: "Good to eat",
// });

// Fruit.insertMany([kiwi, orange, banana], (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully inserted all the fruits to fruitsDB");
//   }
// });

// const fruitValidate = {rating: {$gt: 7}}

Fruit.find((err, fruits) => {
  if (err) {
    console.log(errr);
  } else {
    // console.log(fruits);

    mongoose.connection.close();

    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({_id: "6300fba81ec4d086cd645c37"}, {name: "Peach"}, (err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Succesfully updated the documents.");
//   }
// })

// Fruit.deleteOne({ _id: "6300fba81ec4d086cd645c37" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted the documents.");
//   }
// });

// Person.deleteMany({ naem: "Yash" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted all the documents");
//   }
// });

// Person.updateOne({_id: "63010c58a93238adbc0f4bd5"}, {favouriteFruit: grapes}, (err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Succesfully updated the documents.");
//   }
// });

// Fruit.updateOne(
//   { _id: "63011136f5de0be7fc8b4d1a" },
//   { name: "Grapes" },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Succesfully updated the documents.");
//     }
//   }
// );

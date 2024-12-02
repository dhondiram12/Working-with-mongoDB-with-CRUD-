const mongoose = require('mongoose');


main().
then(()=>{
console.log("Connection SucessFully..........")
}).catch((err)=>{console.log(err)});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  
}

const employeSchema = new mongoose.Schema({
    name : String,
    email : String,
    age   :Number,
    
});

const Employe = mongoose.model("Employe",employeSchema);

//find findOne() method : -

// Employe.findOne({age :{$gte:30}}).then((data)=>{console.log(data);});


// FindById Method : -


// Employe.findById("674d69c83a7438a31d836ee6").then((data)=>{console.log(data)});



// condition 

// Employe.find({age : {$gt:30}}).
// then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});


// UPDATE Code : -

//1.UdateOne :-
// Employe.updateOne({name:"George Hall"},{age:10}).then((data)=>{console.log(data)});

//2.UdateMany :-
Employe.updateMany({age : {$gt:20}},{age:55}).then((data)=>{console.log(data)});



// Employe.insertMany([
//     {
//       "name": "John Doe",
//       "email": "johndoe@example.com",
//       "age": 25
//     },
//     {
//       "name": "Jane Smith",
//       "email": "janesmith@example.com",
//       "age": 30
//     },
//     {
//       "name": "Alice Johnson",
//       "email": "alicejohnson@example.com",
//       "age": 22
//     },
//     {
//       "name": "Bob Brown",
//       "email": "bobbrown@example.com",
//       "age": 28
//     },
//     {
//       "name": "Charlie Davis",
//       "email": "charliedavis@example.com",
//       "age": 35
//     },
//     {
//       "name": "Diana Adams",
//       "email": "dianaadams@example.com",
//       "age": 27
//     },
//     {
//       "name": "Ethan Wilson",
//       "email": "ethanwilson@example.com",
//       "age": 24
//     },
//     {
//       "name": "Fiona Carter",
//       "email": "fionacarter@example.com",
//       "age": 29
//     },
//     {
//       "name": "George Hall",
//       "email": "georgehall@example.com",
//       "age": 33
//     },
//     {
//       "name": "Hannah Moore",
//       "email": "hannahmoore@example.com",
//       "age": 26
//     }
//   ]).then((data)=>{
//     console.log(data); 
// });




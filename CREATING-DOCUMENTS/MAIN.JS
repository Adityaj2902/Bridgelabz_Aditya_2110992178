// natours-test> db.tours.insertMany([{name:"Chitkara University" , price: 45 , rating:4.8 },{name:"Kalka Devi Mandir" , price:1,00,000 ,rating:5}])
// Uncaught:
// SyntaxError: Unexpected token (1:114)

// > 1 | db.tours.insertMany([{name:"Chitkara University" , price: 45 , rating:4.8 },{name:"Kalka Devi Mandir" , price:1,00,000 ,rating:5}])
//     |                                                                                                                   ^
//   2 |

// natours-test> db.tours.insertMany([{name:"Chitkara University" , price: 45 , rating:4.8 },{name:"Kalka Devi Mandir" , price:100000 , rating:5}})
// Uncaught:
// SyntaxError: Unexpected token, expected "," (1:128)

// > 1 | db.tours.insertMany([{name:"Chitkara University" , price: 45 , rating:4.8 },{name:"Kalka Devi Mandir" , price:100000 , rating:5}})
//     |                                                                                                                                 ^
//   2 |

// natours-test> db.tours.insertMany([{name:"Chitkara University" , price: 45 , rating:4.8 },{name:"Kalka Devi Mandir" , price:100000 , rating:5}])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('678e1944cf35637d21db9822'),
//     '1': ObjectId('678e1944cf35637d21db9823')
//   }
// }
// natours-test> show collections
// tours
// natours-test> db.tours.find()
// [
//   {
//     _id: ObjectId('678e1066cf35637d21db9821'),
//     name: 'The Jungle Safari',
//     price: 297,
//     rating: 4.7
//   },
//   {
//     _id: ObjectId('678e1944cf35637d21db9822'),
//     name: 'Chitkara University',
//     price: 45,
//     rating: 4.8
//   },
//   {
//     _id: ObjectId('678e1944cf35637d21db9823'),
//     name: 'Kalka Devi Mandir',
//     price: 100000,
//     rating: 5
//   }
// ]
// natours-test> 
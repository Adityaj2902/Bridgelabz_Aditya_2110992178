// natours-test> db.tours.find()
// [
//   {
//     _id: ObjectId('678e1066cf35637d21db9821'),
//     name: 'The Jungle Safari',
//     price: 597,
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
//     rating: 5,
//     premium: true
//   }
// ]
// natours-test> db.tours.deleteOne({rating:{$lte:4.7}}) //COMMAND

// { acknowledged: true, deletedCount: 1 } //OUTPUT

// natours-test> db.tours.find()
// [
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
//     rating: 5,
//     premium: true
//   }
// ]


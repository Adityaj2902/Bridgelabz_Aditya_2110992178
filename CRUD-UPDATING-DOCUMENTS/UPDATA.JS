// natours-test> db.tours.updateOne({name:'The Jungle Safari'},{$set:{price:597}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }

// if the same name mathced with many then it will update only the first one 
// otherwise we have updateMany to update all the records of the same name at a single time 

// natours-test> db.tours.updateMany({price:{$gt:500},rating:{$gte:4.8}},{$set:{premium:true}})  // if we want update some properties based on the given properties
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
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


// if we want to not only insert the new properties but also replace the properties then we havve to use ::
// debugger.tours.replaceOne()

// db.tours.replaceMany()

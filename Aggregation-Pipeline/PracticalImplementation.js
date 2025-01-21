// natours-test> use store
// switched to db store
// store> db.orders.insertMany([
// ...   { status: "active", category: "electronics", value: 100 },
// ...   { status: "active", category: "clothing", value: 50 },
// ...   { status: "inactive", category: "electronics", value: 200 },
// ...   { status: "active", category: "clothing", value: 150 },
// ...   { status: "active", category: "electronics", value: 300 },
// ...   { status: "active", category: "groceries", value: 30 },
// ...   { status: "inactive", category: "groceries", value: 20 }
// ... ]);
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('678f1db6cf35637d21db9824'),
//     '1': ObjectId('678f1db6cf35637d21db9825'),
//     '2': ObjectId('678f1db6cf35637d21db9826'),
//     '3': ObjectId('678f1db6cf35637d21db9827'),
//     '4': ObjectId('678f1db6cf35637d21db9828'),
//     '5': ObjectId('678f1db6cf35637d21db9829'),
//     '6': ObjectId('678f1db6cf35637d21db982a')
//   }
// }
// store> db.orders.aggregate([
// ...   { $match: { status: "active" } },
// ...   { $group: { _id: "$category", total: { $sum: "$value" } } },
// ...   { $sort: { total: -1 } }
// ... ]);
// [
//   { _id: 'electronics', total: 400 },
//   { _id: 'clothing', total: 200 },
//   { _id: 'groceries', total: 30 }
// ]
// store> 
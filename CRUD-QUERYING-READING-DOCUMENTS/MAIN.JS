natours-test> db.tours.find()
[
  {
    _id: ObjectId('678e1066cf35637d21db9821'),
    name: 'The Jungle Safari',
    price: 297,
    rating: 4.7
  },
  {
    _id: ObjectId('678e1944cf35637d21db9822'),
    name: 'Chitkara University',
    price: 45,
    rating: 4.8
  },
  {
    _id: ObjectId('678e1944cf35637d21db9823'),
    name: 'Kalka Devi Mandir',
    price: 100000,
    rating: 5
  }
]

// WE CAN BE ABLE TO SEARCH IT HERE BY PUTTING ANY PROPERTY IN IT 
natours-test> db.tours.find({name:"Chitkara University"})
[
  {
    _id: ObjectId('678e1944cf35637d21db9822'),
    name: 'Chitkara University',
    price: 45,
    rating: 4.8
  }
]

// WE CAN BE ABLE TO SEARCH IT BY PURTTING SOME CONDITION 

natours-test> db.tours.find({price:{$lte:500}})  // LTE MEANS HERE LESS THANM 
[
  {
    _id: ObjectId('678e1066cf35637d21db9821'),
    name: 'The Jungle Safari',
    price: 297,
    rating: 4.7
  },
  {
    _id: ObjectId('678e1944cf35637d21db9822'),
    name: 'Chitkara University',
    price: 45,
    rating: 4.8
  }
]








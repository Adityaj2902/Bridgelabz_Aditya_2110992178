

db.tours.find({$or:[{price:{$lt:500}},{rating:{$gte:4.8}}]})

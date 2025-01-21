// The aggregation pipeline in MongoDB is a powerful framework for performing data transformations and computations 
// within the database. It allows you to process data in multiple stages, where each stage transforms the data in a 
// specific way.

// Here's a quick overview of how it works:

// Stages: The pipeline is made up of a series of stages, each of which performs an operation on the data. 

// Common stages include:

// $match: Filters the documents based on specific criteria (similar to find).

// $group: Groups documents by a specific field and performs aggregation operations (e.g., sum, average).

// $project: Reshapes the documents (e.g., adding or removing fields).

// $sort: Sorts the documents.

// $limit: Limits the number of documents.

// $skip: Skips a specified number of documents.

// $unwind: Deconstructs an array field into multiple documents.

// $lookup: Performs a left outer join to another collection.

// $addFields, $set: Adds or modifies fields.
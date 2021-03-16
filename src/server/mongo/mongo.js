const MongoClient = require('mongodb').MongoClient;

// Connect URL
const url = 'mongodb://localhost:27017/blogdb';




// Connec to MongoDB
MongoClient.connect(url, {
    useNewUrlParser: false,
    useUnifiedTopology: false
}, (err, client) => {
    if (err) {
        return console.log(err);
    }

    // Specify database you want to access
    const db = client.db('blogdb');
    console.log(`MongoDB Connected: ${url}`);


    db.createCollection("users", {
     validator: {
        $jsonSchema: {
           bsonType: "object",
           required: [ "username", "password"],
           properties: {
              username: {
                 bsonType: "string",
                 description: "must be a string and is required"
              },
              password: {
                bsonType: "string",
                description: "must be a string and is required"
              },
           }
        }
     }
  })
  console.log("Collection created");
});

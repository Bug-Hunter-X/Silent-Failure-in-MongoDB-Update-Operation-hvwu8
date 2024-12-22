```javascript
const MongoClient = require('mongodb').MongoClient;

async function updateDocument() {
  const uri = "mongodb://localhost:27017/"; // Replace with your connection string
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('myDatabase');
    const collection = database.collection('myCollection');

    // Incorrect update operation: attempting to update a field that doesn't exist
    const result = await collection.updateOne({ name: 'John Doe' }, { $set: { age: 30, city: 'New York' } });

    console.log(`Modified ${result.modifiedCount} document(s)`);
  } finally {
    await client.close();
  }
}

updateDocument();
```
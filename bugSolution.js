```javascript
const query = { name: 'John Doe' };
// Correct usage of $in operator with an array
db.collection('users').find({ name: { $in: ['John Doe'] } }).toArray((err, docs) => {
  console.log(docs);
});
```
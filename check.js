const express = require('express');
const app = express();
const port = 3000;

const data = [
  { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
  { id: 2, name: 'Jane Doe', email: 'janedoe@example.com' },
  { id: 3, name: 'Peter Jones', email: 'peterjones@example.com' },
];

app.get('/api/dummy-data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
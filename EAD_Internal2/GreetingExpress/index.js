const express = require('express');
const app = express();
const port = 3000;

app.get('/greet/:name', (req, res) => {
  const { name } = req.params;
  const { title } = req.query;
  
  const greeting = `Hello, ${title || ''} ${name}!`;
  
  res.json({ salutation: greeting });
});

app.listen(port, () => {
  console.log(`Greeting server running on http://localhost:${port}`);
});
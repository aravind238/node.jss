const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate fetching data (replace with your actual logic)
  const data = { message: 'Hello from the api!' };

  res.json(data); // Send structured JSON response
});

// Error handling example (basic)
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging
  res.status(500).send({ error: 'Internal Server Error' }); // Send generic error response
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


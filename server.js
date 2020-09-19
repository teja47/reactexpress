const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = {
    temp:9
  };

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
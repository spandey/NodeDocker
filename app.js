const express = require('express');
const app = express();






const PORT = process.env.port || 3000;
const HOST = "localhost";
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
}); 


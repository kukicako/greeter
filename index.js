require('dotenv').config();

const express = require('express');

console.log('\nmessage:', process.env.MSG);

const server = express();

server.get('/', (req, res) => {
  res.status(200).json({ message: process.env.MSG });
});


const port = process.env.PORT || 4000;


server.listen(port, () => {
  console.log(`\n Server running on port ${port} \n`);
});

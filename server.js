//server.js

const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3001;
const dbPath = path.join(__dirname, 'db', 'db.json');

app.use(express.static('public'));
app.use(express.json());

// Loading notes from db.json
app.get('/api/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync(dbPath));
  res.json(notes);
});


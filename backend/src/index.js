const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const reports = require('./routes/reports');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/civic-issues', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/reports', reports);

app.get('/', (req, res) => res.send('Civic Issue Reporting API running!'));

app.listen(5000, () => console.log('Backend API listening on port 5000'));
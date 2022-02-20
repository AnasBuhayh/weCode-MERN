const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Init middleware
app.use(express.json({ extended: false }));

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

// Use Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profiles', require('./routes/api/profiles'));
app.use('/api/posts', require('./routes/api/posts'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
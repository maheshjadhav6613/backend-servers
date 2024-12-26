const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const taskRoutes = require('./routes/TaskR'); // Assuming you have task routes set up
const projectRoutes = require('./routes/projectRoutes');
const roleRouter = require('./routes/rolesRotes');
const authRoutese = require('./routes/signInrought');
const kanbanRoutes = require('./controller/kanbanController');
const statusRoutes =  require('./routes/statusRoutes');
const userRoutes = require('./routes/usersRoutes');
const eventRoutes = require('./routes/calenderR');


// Assuming you have user ro/tes set up
const app = express();

// Middleware
app.use(express.json()); // Body parser middleware for JSON
app.use(cors()); // Cross-Origin Resource Sharing middleware

const mongoose = require('mongoose');

// mongodb+srv://maheshofficial06613:N9WEY1eW6a3avEG9@dashboard.1gs3c.mongodb.net/?retryWrites=true&w=majority&appName=dashboard

//mongodb://127.0.0.1:27017/maheshdb

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

connectToDatabase();


// Use Routes
 // Route for users
//  app.use('/api/tasks', taskRoutes);// Route for tasks
app.use('/api/projects', projectRoutes); // Route for projects
app.use('/api', authRoutese);
app.use('/api',kanbanRoutes);
app.use('/api/status', statusRoutes);
app.use('/api', roleRouter);
app.use('/api/users', userRoutes);
app.use("/api/tasks", taskRoutes);
app.use('/api', eventRoutes);

// Start Server
app.listen(4000, () => console.log('Server running on http://localhost:4000'));
 
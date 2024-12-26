const express = require('express');
const eventsController = require('../controller/calender');

const router = express.Router();

// Route to get all events
router.get('/events', eventsController.getAllEvents);

// Route to add a new event
router.post('/events', eventsController.addEvent);

// Route to update an event by ID
router.put('/events/:id', eventsController.updateEvent);

// Route to delete an event by ID
router.delete('/events/:id', eventsController.deleteEvent);

// Route to get events for a specific date
router.get('/events/dates', (req, res) => {
    const { date } = req.query; // Expecting date in 'YYYY-MM-DD' format
    const eventsForDate = eventsController.getEventsByDate(date); // Assuming this method exists in your controller
    res.json(eventsForDate);
  });
  

module.exports = router;

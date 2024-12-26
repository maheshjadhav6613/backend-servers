const Event = require('../models/calenderModal');

const getAllEvents = async (req, res) => {
    try{
        const events = await Event.find();
        res.status(200).json(events);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

const addEvent = async (req, res) => {
    try {
      const newEvent = new Event(req.body); // Use the correct model name here
      await newEvent.save();
      res.status(201).json(newEvent);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

const updateEvent = async (req, res)=>{
    try {
        const {id} = req.params;
        const updatedEvent = await Event.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(updatedEvent);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

const deleteEvent = async (req, res) =>{
    try{
        const {id} = req.params;
        await Event.findByIdAndDelete(id);
        res.status(200).json({message: 'Event deleted successfully'});
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

module.exports = {getAllEvents, addEvent, updateEvent, deleteEvent};
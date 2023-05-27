const { Router } = require('express');
const { Events, UserEvents } = require('../db/models');

const Event = Router();

Event.get('/all', async (req, res) => {
  try {
    const events = await Events.findAll();
    return res.json(events);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while retrieving events' });
  }
});

Event.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Events.findByPk(id);

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    return res.json(event);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while retrieving event' });
  }
});

Event.post('/', async (req, res) => {
  const event = req.body;
  try {
    const newEvent = await Events.create(event);
    return res.json(newEvent);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while creating event' });
  }
});

Event.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { field, value } = req.body;
  try {
    const event = await Events.findByPk(id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    await event.update({ [field]: value });
    return res.status(200).json({ message: 'Event updated' });
  } catch (error) {
    console.error('Failed to PATCH event BY ID:', error);
    return res.status(500).json({ error: 'An error occurred while updating event' });
  }
});

Event.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Events.findByPk(id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    await event.destroy();
    return res.status(200).json({ message: 'Event deleted ' });
  } catch (error) {
    console.log('An error occurred while deleting event', error);
    return res.status(500).json({ error: 'An error occurred while deleting event' });
  }
})

module.exports = Event;

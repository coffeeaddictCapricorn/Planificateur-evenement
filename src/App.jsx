import React, { useState, useEffect } from 'react';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import './App.css'

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const inMemoryEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(inMemoryEvents);
  }, []);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const addEvent = (event) => {
    setEvents([...events, { id: Date.now(), ...event }]);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div>
      <h1>Planificateur d'évènements</h1>
      <EventForm addEvent={addEvent} />
      <EventList events={events} deleteEvent={deleteEvent} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Calendar from './Calendar';

function EventForm({ addEvent }) {
    const [eventName, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (eventName.trim() !== '') {
            const dateTime = new Date();
            addEvent({ eventName, dateTime });
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Ajouter des évènements <i class="fa-solid fa-chevron-down"></i></h2>
            <div
                className="input-container">
                <input
                    className="input"
                    type="text"
                    placeholder="Entrer le nouvel évènement ici"
                    value={eventName}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button
                    id="eventbtn"
                    type="submit"> Ajouter
                </button>
            </div>
        </form>
    );
}

export default EventForm;
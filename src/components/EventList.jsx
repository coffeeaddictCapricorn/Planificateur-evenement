import React from 'react';

function EventList({ events, deleteEvent }) {

    return (
        <div>
            <h2>Liste des évènements <i class="fa-solid fa-chevron-down"></i></h2>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        <strong>{event.eventName}</strong> - {event.dateTime.toLocaleString()}
                        <button
                            id="deletebtn"
                            onClick={() => deleteEvent(event.id)}
                        ><i class="fa-solid fa-trash"></i></button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EventList;

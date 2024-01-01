import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, setOptions } from '@mobiscroll/react';

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

function Calendar() {
    return (
        <div>
            <Datepicker
                controls={['calendar', 'time']}
                display="inline"
            />
        </div>
    );
}


export default Calendar;
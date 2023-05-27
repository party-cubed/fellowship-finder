import React, { useState, useEffect, useContext } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';


function DateSelect({ date, setDate, label }) {
  const [selectedDate, setSelectedDate] = useState(date);

  const handleDateChange = (event) => {
    const newDate = dayjs(event.target.value);
    setSelectedDate(newDate);
    setDate(newDate);
  };

  const inputId = `datetimepicker-${label.replace(/\s+/g, '').toLowerCase()}`;

  return (
    <div style={{ padding: '8px' }}>
      <label htmlFor={inputId}>
        {label}:
        <br />
        <input
          type="datetime-local"
          id={inputId}
          value={selectedDate.format('YYYY-MM-DDTHH:mm')}
          onChange={handleDateChange}
        />
      </label>
    </div>
  );
  
  // MUI VERSION

  // return (
  //   <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ p: 2 }}>
  //     <DateTimePicker
  //       value={date}
  //       label={label || ''}
  //       onChange={(newDate) => setSelectedDate(newDate)}
  //       sx={{ width: '90%' }}
  //     />
  //   </LocalizationProvider>
  // );
}

export default DateSelect;

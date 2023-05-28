import React, { useState } from 'react';
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
    <div style={{
      padding: '6px', width: '200px', marginRight: '10px', backgroundColor: '#f0f0f0', borderRadius: '4px', marginBottom: '5px'
    }}
    >
      <label htmlFor={inputId} style={{ fontSize: '14px', color: '#333' }}>
        {label}:
        <br />
        <input
          type="datetime-local"
          id={inputId}
          value={selectedDate.format('YYYY-MM-DDTHH:mm')}
          onChange={handleDateChange}
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            marginTop: '4px',
            fontSize: '14px',
            cursor: 'pointer',
          }}
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

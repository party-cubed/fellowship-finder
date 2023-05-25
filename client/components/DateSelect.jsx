import React, { useState, useEffect, useContext } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


function DateSelect({ date, setSelectedDate, label }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ p: 2 }}>
      <DateTimePicker
        value={date}
        label={label || ''}
        onChange={(newDate) => setSelectedDate(newDate)}
        sx={{ width: '90%' }}
      />
    </LocalizationProvider>
  );
}

export default DateSelect;

import React, { useState } from 'react';
import { Container } from "./datePickerComponent.styles";
import DatePicker from "react-datepicker";
import { registerLocale } from  "react-datepicker";
import enUS from 'date-fns/locale/en-US';
import { set } from 'date-fns';
import { Booking } from '../../types';
registerLocale('enUS', enUS)

interface DatePicketProps {
  callback(startDate: Date | null, endDate: Date | null): void;
  defaultStartDate?: Date,
  defaultEndDate?: Date,
  title?: string,
  excludedDates?: Booking[],
  styleType?: "standard" | "wide",
}

const DatePickerComponent = ({
  callback,
  defaultStartDate,
  defaultEndDate,
  excludedDates,
  title = "Choose the dates to book",
  styleType = "standard"
}: DatePicketProps) => {

  const [startDate, setStartDate] = useState<Date | null>(defaultStartDate || set(new Date(), { hours: 0, minutes: 0, seconds: 0}));
  const [endDate, setEndDate] = useState<Date | null>(defaultEndDate || null);

  const handleSaveBooking = () => {
    try {
      callback(startDate, endDate);
      setEndDate(null);
      setStartDate(null);
    } catch (e) {
      console.log("ERROR: please try again.");
    }
  }

  const handleSetStartDate = (date: Date | null) =>{
    setStartDate(date);
    setEndDate(null);
  }

  return (
    <Container styleType={styleType}>
      <h3> { title }</h3>

      <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => handleSetStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          excludeDateIntervals={excludedDates}
          placeholderText='Start Date'
        />

        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          excludeDateIntervals={excludedDates}
          placeholderText='End Date'
          disabled={!startDate}
        />

        <button onClick={handleSaveBooking}>Confirm booking</button>
      </div>
      
    </Container>
  );
}

export default DatePickerComponent;

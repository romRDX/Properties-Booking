import React, { createContext, useState, useContext, useCallback } from 'react';
import { Booking } from "../types";
import toast from 'react-hot-toast';
import { set, isAfter, isBefore } from 'date-fns'

interface BookingsContextData {
  bookings: Booking[];
  handleSaveBooking(startDate: Date, endDate: Date, propertyId: number, bookingsx?: Booking[]): void,
  handleDeleteBooking(bookingId: number): void;
  handleUpdateBooking(id: number, startDate: Date, endDate: Date,): void;
}

type Props = {
  children?: React.ReactNode
};

const BookingsContext = createContext<BookingsContextData>({} as BookingsContextData);

export const BookingsProvider: React.FC<Props> = ({ children }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const handleSaveBooking = useCallback((startDate: Date, endDate: Date, propertyId: number) => {
    if(startDate && endDate){
      const newStartDate = set(startDate, { hours: 0, minutes: 0, seconds: 0});
      const newEndDate = set(endDate, { hours: 0, minutes: 0, seconds: 0});

      let error = false;
      
      bookings.forEach((bookingItem) => {
        if(isAfter(bookingItem.start, newStartDate) && isBefore(bookingItem.end, newEndDate)){          
          error = true;
        }
      });

      if(error){
        toast("You cannot have unavailable dates between your start date and end date.");
        throw new Error("Error: 1");
      } else {
        setBookings(prev => 
          [
            ...prev,
            {
              id: (bookings.length + 1),
              propertyId: propertyId,
              userId: 1,
              start: newStartDate,
              end: newEndDate,
              scheduledOn: new Date(),
            }
          ]
        );
        toast("Booking saved successfully!");
      }
    } else {
      toast("You must choose a start date and end date.")
      throw new Error("Error: 2");
    }
  }, [bookings]);

  const handleDeleteBooking = useCallback((bookingId: number) => {
    setBookings(prev => prev.filter((booking) => booking.id !== bookingId))
    toast("Booking deleted successfully!");
  }, []);

  const handleUpdateBooking = useCallback((id: number, startDate: Date, endDate: Date,) => {
    if(startDate && endDate){
      let error = false;
        
      bookings.forEach((bookingItem) => {
        if(isAfter(bookingItem.start, startDate) && isBefore(bookingItem.end, endDate)){          
          error = true;
        }
      });

      if(error){
        toast("You cannot have unavailable dates between your start date and end date.");
        throw new Error("Error: 1");
      }

      setBookings(prev => prev.map((booking) => {
        if(booking.id === id){
          return {
            ...booking,
            start: startDate,
            end: endDate
          }
        } else {
          return booking;
        }
      }))
      toast("Booking updated successfully!");
    } else {
      toast("You must choose a start date and end date.")
      throw new Error("Error: 2");
    }
  }, [bookings]);

  return (
    <BookingsContext.Provider
      value={{ bookings, handleSaveBooking, handleDeleteBooking, handleUpdateBooking }}
    >
      {children}
    </BookingsContext.Provider>
  );
};

export function useBookings(): BookingsContextData {
  const context = useContext(BookingsContext);

  return context;
}
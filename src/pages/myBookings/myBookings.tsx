import React, { useState, useCallback } from 'react';
import { useBookings } from '../../hooks/useBookings';
import { Container, ModalContent } from "./myBookings.styles";
import BookingItem from '../../components/bookingItem/bookingItem';
import ReactModal from 'react-modal';
import DatePickerComponent from '../../components/datePickerComponent/datePickerComponent';
import { format } from 'date-fns';
import { Booking } from '../../types';

const MyBookings = () => {

  const { bookings, handleUpdateBooking } = useBookings();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedBooking, setEditedBooking] = useState<Booking>();

  const handleEditBooking = (booking: any) => {
    setIsModalOpen(true);
    setEditedBooking(booking);
  }

  const handleSetBooking = useCallback((startDate: Date, endDate: Date) => {
    handleUpdateBooking(editedBooking?.id || 1, startDate, endDate);
    setIsModalOpen(false);
  }, [handleUpdateBooking, editedBooking]);

  const excludedDates = () => {
    const bookingsWithoutEditedBooking = bookings.filter((booking) => booking.id !== editedBooking?.id);
    return bookingsWithoutEditedBooking.filter((booking) => (booking.propertyId === editedBooking?.propertyId));
  };

  return (
    <Container>
      
      <h1>My Bookings</h1>

      { bookings.length > 0 ?
        <ul>
          {
            bookings.map((booking) => (
              <BookingItem key={booking.id} booking={booking} handleEditBooking={handleEditBooking} />
            ))
          }
        </ul>
        :
        <p>You have no bookings.</p>
      }

      <ReactModal
        isOpen={isModalOpen}
        style={{
          overlay: {
            backgroundColor: "rgba(20, 20, 20, 0.75)",
          },
          content: {
            width: "90%",
            maxWidth: "600px",
            height: "200px",
            margin: "auto",
            overflow: "visible",
            padding: "10px",
          }
        }}
        contentLabel="modal"
        closeTimeoutMS={500}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
      >
        <ModalContent>
          <p><span>Current start Date:</span>{ editedBooking && format(editedBooking.start, "MMMM do yyyy") }</p>
          <p><span>Current end Date:</span>{ editedBooking && format(editedBooking.end, "MMMM do yyyy") }</p>
          <button onClick={() => setIsModalOpen(false)} >Cancel</button>
        </ModalContent>
        <DatePickerComponent
          callback={handleSetBooking}
          defaultStartDate={editedBooking?.start}
          defaultEndDate={editedBooking?.end}
          excludedDates={excludedDates()}
          title="Change the dates below to update the booking:"
          styleType='wide'
        />
        
      </ReactModal>
    </Container>
  );
}

export default MyBookings;

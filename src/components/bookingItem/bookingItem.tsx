import { Container, ButtonsContainer, DataContainer } from './bookingItem.styles';
import { Booking } from "../../types";
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns'
import { useProperties } from '../../hooks/useProperties';
import { useBookings } from '../../hooks/useBookings';

interface BookingItemProps {
    booking: Booking;
    handleEditBooking: React.Dispatch<React.SetStateAction<Booking>>
}

const BookingItem = ({ booking, handleEditBooking }: BookingItemProps) => {

    const { getPropertyById } = useProperties();
    const { handleDeleteBooking } = useBookings();
    const navigate = useNavigate();

    const propertyData = getPropertyById(booking.propertyId);
  
    return (
        <Container>
            <DataContainer>
                <h3><span>Property Name: </span>{propertyData?.name}</h3>
                <div>
                    <p><span>Start Date:</span>{ format(booking.start, "MMMM do yyyy") }</p>
                    <p><span>End Date:</span>{ format(booking.end, "MMMM do yyyy") }</p>
                </div>
                <p><span>Scheduled on:</span> { format(booking.scheduledOn, "MMMM do yyyy")} </p>
            </DataContainer>
            <ButtonsContainer>
                <div>
                    <button onClick={() => handleEditBooking(booking)}>Update</button>
                    <button onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
                </div>
                <button onClick={() => navigate(`/property/${booking.propertyId}`)}>See property details</button>
            </ButtonsContainer>
        </Container>
    )
    
};

export default BookingItem;

import React, { useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useProperties } from '../../hooks/useProperties';
import { Container, PropertyData, PickerContainer } from "./propertyPage.styles";
import DatePickerComponent from '../../components/datePickerComponent/datePickerComponent';
import { useBookings } from '../../hooks/useBookings';

const PropertyPage = () => {

  const { propertyId } = useParams();
  const { getPropertyById } = useProperties();
  const { handleSaveBooking, bookings } = useBookings();

  const propertyData = useMemo(() => {
    const parsedId = propertyId ? parseInt(propertyId) : 0;
    return getPropertyById(parsedId);
  }, [propertyId, getPropertyById]);

  const handleSetBooking = useCallback((startDate: Date, endDate: Date) => {
    handleSaveBooking(startDate, endDate, parseInt(propertyId || ""));
  }, [handleSaveBooking, propertyId]);
  
  const excludedDates = () => {
    return bookings.filter((booking) => (booking.propertyId === parseInt(propertyId || "0")));
  }

  return (
    <Container>
      <div>
        <img loading='lazy' src="/house-img.jpg" alt="House property" />

        <PickerContainer>
          <h1>{propertyData?.name}</h1>
          
          <DatePickerComponent callback={handleSetBooking} excludedDates={excludedDates()} />

          <PropertyData>
            <p><span>Owner:</span> {propertyData?.owner}</p>
            <p><span>Contact:</span> {propertyData?.contact}</p>
            <p><span>Address:</span> {propertyData?.address}</p>
            <p><span>Description:</span> {propertyData?.description}</p>
          </PropertyData>
        </PickerContainer>
      </div>
      
    </Container>
  );
}

export default PropertyPage;

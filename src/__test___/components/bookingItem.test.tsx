import { render, screen } from '@testing-library/react';
import { add, format } from 'date-fns';
import { act } from 'react-dom/test-utils';
import BookingItem from "../../components/bookingItem/bookingItem";

const mockedDeleteFunc = jest.fn();
const fakeHandleEditBooking = jest.fn();
const mockedNavigate = jest.fn();

const fakeBooking = {
  id: 1,
  userId: 1,
  propertyId: 1,
  start: add(new Date(), { days: 1}),
  end: add(new Date(), { days: 2}),
  scheduledOn: new Date(),
}

jest.mock('../../hooks/useProperties', () => {
  return {
    useProperties: () => ({
      getPropertyById: () => ({
            id: 1,
            name: "Equitable Property",
            owner: "Owner 1",
            contact: "(123) 456-7890",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices lobortis metus a luctus. Nunc eget felis sed nisi facilisis fermentum a eget ex. Vestibulum aliquam mi libero, suscipit mattis metus eleifend quis.",
            address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            availability: [],
        })
    })
  }
})

jest.mock('../../hooks/useBookings', () => {
  return {
    useBookings: () => ({
      handleDeleteBooking: mockedDeleteFunc
    })
  }
});

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockedNavigate
  }
});

test('Booking item component should render base components and correct data from booking and property', () => {
  
  render(<BookingItem booking={fakeBooking} handleEditBooking={fakeHandleEditBooking} />);

  const propertyNameField = screen.getByText("Property Name:");
  const bookingStartDateField = screen.getByText("Start Date:");
  const bookingEndDateField = screen.getByText("End Date:");
  const bookingScheduledOnDateField = screen.getByText("Scheduled on:");

  const updateButton = screen.getByText("Update");
  const deleteButton = screen.getByText("Delete");
  const seeDetailsButton = screen.getByText("See property details");

  const propertyName = screen.getByText("Equitable Property");
  const bookingStartDate = screen.getByText(format(fakeBooking.start, "MMMM do yyyy"));
  const bookingEndDate = screen.getByText(format(fakeBooking.end, "MMMM do yyyy"));
  const bookingScheduledOnDate = screen.getByText(format(fakeBooking.scheduledOn, "MMMM do yyyy"));

  expect(propertyName).toBeInTheDocument();
  expect(bookingStartDate).toBeInTheDocument();
  expect(bookingEndDate).toBeInTheDocument();
  expect(bookingScheduledOnDate).toBeInTheDocument();

  expect(updateButton).toBeInTheDocument();
  expect(deleteButton).toBeInTheDocument();
  expect(seeDetailsButton).toBeInTheDocument();

  expect(propertyNameField).toBeInTheDocument();
  expect(bookingStartDateField).toBeInTheDocument();
  expect(bookingEndDateField).toBeInTheDocument();
  expect(bookingScheduledOnDateField).toBeInTheDocument();
});

test('Booking item component should be deleted', () => {

  render(<BookingItem booking={fakeBooking} handleEditBooking={fakeHandleEditBooking} />);

  const deleteButton = screen.getByText("Delete");

  act(() =>{
    deleteButton.click();
  });

  expect(mockedDeleteFunc).toHaveBeenCalledTimes(1);
});

test('Booking item component should be updated', () => {

  render(<BookingItem booking={fakeBooking} handleEditBooking={fakeHandleEditBooking} />);

  const updateButton = screen.getByText("Update");

  act(() =>{
    updateButton.click();
  });

  expect(fakeHandleEditBooking).toHaveBeenCalledTimes(1);
});

test('Booking item component should go to property details', () => {

  render(<BookingItem booking={fakeBooking} handleEditBooking={fakeHandleEditBooking} />);

  const seeDetailsButton = screen.getByText("See property details");

  act(() =>{
    seeDetailsButton.click();
  });

  expect(mockedNavigate).toHaveBeenCalledTimes(1);
});
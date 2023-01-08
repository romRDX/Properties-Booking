import { render, screen } from '@testing-library/react';
import { add, format } from 'date-fns';
import PropertyPage from "../../pages/propertyPage/propertyPage";

const mockedDeleteFunc = jest.fn();

const mockBookings = [
  {
    id: 123,
    userId: 456,
    propertyId: 789,
    start: new Date(),
    end: add(new Date(), { days: 1}),
    scheduledOn: new Date(),
  }
]

jest.mock('../../hooks/useBookings', () => {
  return {
    useBookings: () => ({
      bookings: mockBookings,
      handleDeleteBooking: mockedDeleteFunc
    })
  }
});

jest.mock('../../hooks/useProperties', () => {
  return {
    useProperties: () => ({
      getPropertyById: () => (
        {
          id: 123,
          name: "Equitable Property",
          owner: "fake owner",
          contact: "(123) 456-7890",
          description: "fake description",
          address: "fake address",
          availability: [],
        })
    })
  }
});

test('Should be able to render property page with all its components', () => {
  
  render(<PropertyPage />);

  const todayDate = format(new Date(), "MM/dd/yyyy");

  const pickerTitle = screen.getByText("Choose the dates to book");
  const startDatePicker = screen.getByPlaceholderText("Start Date");
  const endDatePicker = screen.getByPlaceholderText("End Date");
  const confirmButton = screen.getByText("Confirm booking");

  const propertyOwner = screen.getByText("Owner:");
  const propertyContact = screen.getByText("Contact:");
  const propertyAddress = screen.getByText("Address:");
  const propertyDescription = screen.getByText("Description:");

  expect(pickerTitle).toBeInTheDocument();
  expect(startDatePicker).toBeInTheDocument();
  expect(startDatePicker).toHaveAttribute("value", todayDate);
  expect(endDatePicker).toBeInTheDocument();
  expect(confirmButton).toBeInTheDocument();

  expect(propertyOwner).toBeInTheDocument();
  expect(propertyContact).toBeInTheDocument();
  expect(propertyAddress).toBeInTheDocument();
  expect(propertyDescription).toBeInTheDocument();
});

test('Should be able to render property page with the right property values', () => {
  
  render(<PropertyPage />);

  const propertyName = screen.getByText("Equitable Property");
  const propertyOwnerValue = screen.getByText("fake owner");
  const propertyContactValue = screen.getByText("(123) 456-7890");
  const propertyAddressValue = screen.getByText("fake address");
  const propertyDescriptionValue = screen.getByText("fake description");

  expect(propertyName).toBeInTheDocument();
  expect(propertyOwnerValue).toBeInTheDocument();
  expect(propertyContactValue).toBeInTheDocument();
  expect(propertyAddressValue).toBeInTheDocument();
  expect(propertyDescriptionValue).toBeInTheDocument();
});
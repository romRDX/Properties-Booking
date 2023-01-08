import { render, screen } from '@testing-library/react';
import { add, format } from 'date-fns';
import MyBookings from "../../pages/myBookings/myBookings";

jest.useFakeTimers();

const mockedNavigate = jest.fn();
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
      bookings: [],
      handleDeleteBooking: mockedDeleteFunc
    })
  }
});

/**
 * I tried to mock the hook for each test to have different values in bookings but i didnt manage to do that
 */

// jest.mock('../../hooks/useBookings', () => {
//   return {
//     useBookings: () => ({
//       bookings: jest.fn().mockReturnValueOnce([]).mockReturnValueOnce([]).mockReturnValueOnce(mockBookings),
//       handleDeleteBooking: mockedDeleteFunc
//     })
//   }
// });

jest.mock('../../hooks/useProperties', () => {
  return {
    useProperties: () => ({
      properties: [
        {
          id: 1,
          name: "Equitable Property",
          owner: "Owner 1",
          contact: "(123) 456-7890",
          description: "fake description 1",
          address: "fake address 1",
          availability: [],
        },
        {
          id: 2,
          name: "Brick Cane",
          owner: "Owner 2",
          contact: "(123) 456-7890",
          description: "fake description 2",
          address: "fake address 2",
          availability: [],
        },
        {
          id: 3,
          name: "Wind Alley",
          owner: "Owner 3",
          contact: "(123) 456-7890",
          description: "fake description 3",
          address: "fake address 3",
          availability: [],
        },
      ]
    })
  }
});

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockedNavigate
  }
});

describe("text", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('Should be able to render my bookings page with all its components', () => {

    render(<MyBookings />);

    const pageTitle = screen.getByText("My Bookings");

    expect(pageTitle).toBeInTheDocument();
  });

  test('Should be able to show a warning message when there is no booking', () => {

    render(<MyBookings />);

    const warningMesage = screen.getByText("You have no bookings.");

    expect(warningMesage).toBeInTheDocument();
  });

  test('Should be able to show the bookings data', () => {

    render(<MyBookings />);

    const fakeStartDate = screen.getByText(format(mockBookings[0].start, "MMMM do yyyy"));

    expect(fakeStartDate).toBeInTheDocument();
  });
})
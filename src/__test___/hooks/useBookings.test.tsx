import { renderHook } from '@testing-library/react';
import { add, format } from 'date-fns';
import { act } from 'react-dom/test-utils';
import { useBookings, BookingsProvider } from '../../hooks/useBookings';

test('Should be able to use bookings hook', async () => {

  const { result } = renderHook(() => useBookings(), {
    wrapper: BookingsProvider,
  });

  expect(typeof result.current.bookings).toBe("object");
  expect(typeof result.current.handleDeleteBooking).toBe("function");
  expect(typeof result.current.handleSaveBooking).toBe("function");
  expect(typeof result.current.handleUpdateBooking).toBe("function");
});

test('Should be able to create a booking', async () => {

  const { result } = renderHook(() => useBookings(), {
    wrapper: BookingsProvider,
  });

  const fakeStartDate = add(new Date(), { days: 1});
  const fakeEndDate = add(new Date(), { days: 2});

  act(() => {
    result.current.handleSaveBooking(fakeStartDate, fakeEndDate, 123);
  })

  expect(result.current.bookings[0].id).toEqual(1);
  expect(result.current.bookings[0].propertyId).toEqual(123);
  expect(result.current.bookings[0].userId).toEqual(1);
  expect(format(result.current.bookings[0].start, "MM/dd/yyyy")).toEqual(format(fakeStartDate, "MM/dd/yyyy"));
  expect(format(result.current.bookings[0].end, "MM/dd/yyyy")).toEqual(format(fakeEndDate, "MM/dd/yyyy"));
  expect(format(result.current.bookings[0].scheduledOn, "MM/dd/yyyy")).toEqual(format(new Date(), "MM/dd/yyyy"));
});

test('Should be able to update a booking', async () => {

  const { result } = renderHook(() => useBookings(), {
    wrapper: BookingsProvider,
  });

  const fakeStartDate = add(new Date(), { days: 1});
  const fakeEndDate = add(new Date(), { days: 2});

  const fakeUpdatedStartDate = add(new Date(), { days: 3});
  const fakeUpdatedEndDate = add(new Date(), { days: 4});

  act(() => {
    result.current.handleSaveBooking(fakeStartDate, fakeEndDate, 123);
  });

  act(() => {
    result.current.handleUpdateBooking(1, fakeUpdatedStartDate, fakeUpdatedEndDate);
  });

  expect(format(result.current.bookings[0].start, "MM/dd/yyyy")).toEqual(format(fakeUpdatedStartDate, "MM/dd/yyyy"));
  expect(format(result.current.bookings[0].end, "MM/dd/yyyy")).toEqual(format(fakeUpdatedEndDate, "MM/dd/yyyy"));
});

test('Should be able to delete a booking', async () => {

  const { result } = renderHook(() => useBookings(), {
    wrapper: BookingsProvider,
  });

  const fakeStartDate = add(new Date(), { days: 1});
  const fakeEndDate = add(new Date(), { days: 2});

  act(() => {
    result.current.handleSaveBooking(fakeStartDate, fakeEndDate, 123);
  });

  act(() => {
    result.current.handleDeleteBooking(1);
  });

  expect(result.current.bookings[0]).toEqual(undefined);
});
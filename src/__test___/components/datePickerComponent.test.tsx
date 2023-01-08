import { fireEvent, render, screen } from '@testing-library/react';
import { format } from 'date-fns';
import { act } from 'react-dom/test-utils';
import DatePickerComponent from "../../components/datePickerComponent/datePickerComponent";

const mockedCallbackFunc = jest.fn();


test('Should be able to render', () => {
  
  render(<DatePickerComponent callback={mockedCallbackFunc} />);

  const todayDate = format(new Date(), "MM/dd/yyyy");

  const pickerTitle = screen.getByText("Choose the dates to book");
  const startDatePicker = screen.getByPlaceholderText("Start Date");
  const endDatePicker = screen.getByPlaceholderText("End Date");
  const confirmButton = screen.getByText("Confirm booking");
 
  expect(pickerTitle).toBeInTheDocument();
  expect(startDatePicker).toBeInTheDocument();
  expect(startDatePicker).toHaveAttribute("value", todayDate);
  expect(endDatePicker).toBeInTheDocument();
  expect(confirmButton).toBeInTheDocument();
});

test('Should be able to render with a custom title', () => {
  
  render(<DatePickerComponent callback={mockedCallbackFunc} title="Fake title" />);

  const pickerTitle = screen.getByText("Fake title");
 
  expect(pickerTitle).toBeInTheDocument();
});

test('Should be able to pick dates and confirm', () => {
  
  render(<DatePickerComponent callback={mockedCallbackFunc} />);

  const startDatePicker = screen.getByPlaceholderText("Start Date");
  const endDatePicker = screen.getByPlaceholderText("End Date");
  const confirmButton = screen.getByText("Confirm booking");

  act(() => {
    fireEvent.change(startDatePicker, { target: { value: "01/01/2022"}});
  });

  act(() => {
    fireEvent.change(endDatePicker, { target: { value: "01/02/2022"}});
  });

  expect(startDatePicker).toHaveAttribute("value", "01/01/2022");
  expect(endDatePicker).toHaveAttribute("value", "01/02/2022");

  act(() =>{
    confirmButton.click();
  });

  expect(mockedCallbackFunc).toHaveBeenCalledTimes(1);
  expect(mockedCallbackFunc).toHaveBeenCalledWith(new Date("01/01/2022"), new Date("01/02/2022"));
  // This test will fail, i do not know how to trigger the react state change in this situation with this library
});

test('Should be able to render with default dates set by the user', () => {
  
  render(<DatePickerComponent callback={mockedCallbackFunc} defaultStartDate={new Date("02/01/2023")} defaultEndDate={new Date("02/02/2023")} />);

  const startDatePicker = screen.getByPlaceholderText("Start Date");
  const endDatePicker = screen.getByPlaceholderText("End Date");

  expect(startDatePicker).toHaveAttribute("value", "02/01/2023");
  expect(endDatePicker).toHaveAttribute("value", "02/02/2023");
});
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import SearchField from "../../components/searchField/SearchField";

jest.useFakeTimers();
const mockedSetFilter = jest.fn();

jest.mock('../../hooks/useFilter', () => {
  return {
    useFilter: () => ({
      setFilter: mockedSetFilter
    })
  }
});

test('Should be able to render', async () => {

  render(<SearchField />);
  
  const searchInput = screen.getByPlaceholderText("Search");

  expect(searchInput).toBeInTheDocument();
});

test('Should be able to set a filter through the input', async () => {

  render(<SearchField />);
  
  const searchInput = screen.getByPlaceholderText("Search");

  act(() => {
    fireEvent.change(searchInput, { target: { value: "property name"}});
  });

  // jest.advanceTimersByTime(1200);
  jest.runAllTimers();

  // setTimeout(function () {
  //   done();
  // }, 1200);

  expect(mockedSetFilter).toHaveBeenCalledWith("property name");
  expect(searchInput).toHaveAttribute("value", "property name");
  // for some reason the input is not keeping the value after the fire event
  // even tough the function receives the right props
});

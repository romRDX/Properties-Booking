import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from "../../components/pagination/pagination";

test('Pagination component should render arrows and page buttons', () => {
  const fakeSetCurrentPage = jest.fn();

  render(<Pagination currentPage={1} totalPages={3} setCurrentPage={fakeSetCurrentPage} />);

  const pageButton1 = screen.getByText("1");
  const pageButton2 = screen.getByText("2");
  const pageButton3 = screen.getByText("3");

  const leftArrow = screen.getByTestId("arrow-left");
  const rightArrow = screen.getByTestId("arrow-right");

  expect(pageButton1).toBeInTheDocument();
  expect(pageButton2).toBeInTheDocument();
  expect(pageButton3).toBeInTheDocument();

  expect(leftArrow).toBeInTheDocument();
  expect(rightArrow).toBeInTheDocument();
});


test('Pagination should change current page through left arrow click', () => {
  const fakeSetCurrentPage = jest.fn();

  render(<Pagination currentPage={2} totalPages={3} setCurrentPage={fakeSetCurrentPage} />);

  const leftArrow = screen.getByTestId("arrow-left");

  fireEvent.click(leftArrow);

  expect(fakeSetCurrentPage).toHaveBeenCalledTimes(1);
});


test('Pagination should change current page through right arrow click', () => {
  const fakeSetCurrentPage = jest.fn();

  render(<Pagination currentPage={1} totalPages={3} setCurrentPage={fakeSetCurrentPage} />);

  const rightArrow = screen.getByTestId("arrow-right");

  fireEvent.click(rightArrow);

  expect(fakeSetCurrentPage).toHaveBeenCalledTimes(1);
});


test('Pagination should change current page through page button click', () => {
  const fakeSetCurrentPage = jest.fn();

  render(<Pagination currentPage={1} totalPages={3} setCurrentPage={fakeSetCurrentPage} />);

  const pageButton1 = screen.getByText("1");
  const pageButton2 = screen.getByText("2");
  const pageButton3 = screen.getByText("3");

  fireEvent.click(pageButton1);
  fireEvent.click(pageButton2);
  fireEvent.click(pageButton3);

  expect(fakeSetCurrentPage).toHaveBeenCalledTimes(3);
});

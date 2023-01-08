import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Home from "../../pages/home/home";

jest.useFakeTimers();

const mockedNavigate = jest.fn();
const mockedSetFilter = jest.fn();

jest.mock('../../hooks/useFilter', () => {
  return {
    useFilter: () => ({
      setFilter: mockedSetFilter
    })
  }
});

jest.mock('../../hooks/useProperties', () => {
  return {
    useFilter: () => ({
      filter: "fake filter"
    })
  }
});

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

test('Should be able to render home with all its components', () => {
  
  render(<Home />);

  const homeTitle = screen.getByText("Choose the property:x");

  expect(homeTitle).toBeInTheDocument();
});

test('Should be able to render the properties list', () => {
  
  render(<Home />);

  const firstPropertyName = screen.getByText("Equitable Property");

  expect(firstPropertyName).toBeInTheDocument();
});

test('Should be able to go to property page when clicking on a property', () => {
  
  render(<Home />);

  const firstPropertyName = screen.getByText("Equitable Property");

  act(() => {
    firstPropertyName.click()
  });

  expect(mockedNavigate).toHaveBeenCalledTimes(1);
});
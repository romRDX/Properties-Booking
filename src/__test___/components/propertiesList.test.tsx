import { fireEvent, render, screen } from '@testing-library/react';
import PropertiesList from "../../components/propertiesList/propertiesList";

const mockedNavigate = jest.fn();
jest.useFakeTimers();

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

test('Should be able to render and show the properties list', async () => {

  render(<PropertiesList />);

  // the problem here is that this component has an useEffect and also a useMemo
  // so react takes some miliseconds to get things ready while jest is faster
  // and tries to get the rendered elements before they are rendered

  jest.advanceTimersByTime(1200);
  jest.runAllTimers();

  const propertyName1 = screen.getByText("Equitable Property");
  // const propertyAddress1 = screen.getByText("fake address 1");
  // const propertyDescription1 = screen.getByText("fake description 1");

  // const propertyName2 = screen.getByText("Brick Cane");
  // const propertyAddress2 = screen.getByText("fake address 2");
  // const propertyDescription2 = screen.getByText("fake description 2");

  expect(propertyName1).toBeInTheDocument();
  // expect(propertyAddress1).toBeInTheDocument();
  // expect(propertyDescription1).toBeInTheDocument();

  // expect(propertyName2).toBeInTheDocument();
  // expect(propertyAddress2).toBeInTheDocument();
  // expect(propertyDescription2).toBeInTheDocument();
});
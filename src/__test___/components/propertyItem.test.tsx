import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import PropertyItem from "../../components/propertyItem/propertyItem";

const mockedNavigate = jest.fn();

const fakeProperty = {
  id: 1,
  name: "Equitable Property",
  owner: "fake owner",
  contact: "(123) 456-7890",
  description: "fake description",
  address: "fake address",
  availability: [],
};

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockedNavigate
  }
});

test('Should be able to render', () => {
  
  render(<PropertyItem property={fakeProperty} />);

  const propertyName = screen.getByText("Equitable Property");
  const propertyAddress = screen.getByText("fake address");
  const propertyDescription = screen.getByText("fake description");
 
  expect(propertyName).toBeInTheDocument();
  expect(propertyAddress).toBeInTheDocument();
  expect(propertyDescription).toBeInTheDocument();
});

test('Should be able to go to property details page', () => {
  
  render(<PropertyItem property={fakeProperty} />);

  const propertyName = screen.getByText("Equitable Property");
  
  act(() =>{
    propertyName.click();
  });
  
  expect(mockedNavigate).toHaveBeenCalledTimes(1);
});
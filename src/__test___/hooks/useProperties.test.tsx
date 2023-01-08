import { renderHook } from '@testing-library/react';
import { useProperties, PropertiesProvider } from '../../hooks/useProperties';

const fakePropertiesArray = [
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

jest.mock("../../fake-data/fakeProperties", () => {
  return fakePropertiesArray
})

test('Should be able to use properties hook', async () => {

  const { result } = renderHook(() => useProperties(), {
    wrapper: PropertiesProvider,
  });

  expect(typeof result.current.properties).toBe("object");
  expect(typeof result.current.getPropertyById).toBe("function");
});

test('Should be able to get properties', async () => {

  const { result } = renderHook(() => useProperties(), {
    wrapper: PropertiesProvider,
  });
  
  expect(result.current.properties).toBe(fakePropertiesArray);
});

test('Should be able to return a valid property', async () => {

  const { result } = renderHook(() => useProperties(), {
    wrapper: PropertiesProvider,
  });

  const property = result.current.getPropertyById(1);
  
  expect(property).toBe(fakePropertiesArray[0]);
});
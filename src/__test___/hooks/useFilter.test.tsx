import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useFilter, FilterProvider } from '../../hooks/useFilter';

test('Should be able to use filter hook', async () => {

  const { result } = renderHook(() => useFilter(), {
    wrapper: FilterProvider,
  });

  expect(typeof result.current.filter).toBe("string");
  expect(typeof result.current.setFilter).toBe("function");
});

test('Should be able to set a filter', async () => {

  const { result } = renderHook(() => useFilter(), {
    wrapper: FilterProvider,
  });

  act(() => {
    result.current.setFilter("fake filter");
  });

  expect(result.current.filter).toBe("fake filter");
});
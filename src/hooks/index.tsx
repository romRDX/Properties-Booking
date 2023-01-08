import React from 'react';
import { PropertiesProvider } from "./useProperties";
import { FilterProvider } from './useFilter';
import { BookingsProvider } from "./useBookings";

type Props = {
  children?: React.ReactNode
};

const AppProvider: React.FC<Props> = ({ children }) => (
  <BookingsProvider>
    <PropertiesProvider>
      <FilterProvider>
        {children}
      </FilterProvider>
    </PropertiesProvider>
  </BookingsProvider>
);

export default AppProvider;
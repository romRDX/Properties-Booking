import React, { createContext, useState, useContext } from 'react';

interface FilterContextData {
  filter: string;
  setFilter(filter: string): void;
}

const FilterContext = createContext<FilterContextData>({} as FilterContextData);

type Props = {
  children?: React.ReactNode
};

export const FilterProvider: React.FC<Props> = ({ children }) => {
  const [ filter, setFilter] = useState<string>("");

  return (
    <FilterContext.Provider
      value={{ filter, setFilter }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export function useFilter(): FilterContextData {
  const context = useContext(FilterContext);

  return context;
}
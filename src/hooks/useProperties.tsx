import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import fakeProperties from "../fake-data/fakeProperties";
import { Property } from "../types";

interface PropertiesContextData {
  properties: Property[];
  getPropertyById(id: number): Property | undefined,
}

const PropertiesContext = createContext<PropertiesContextData>({} as PropertiesContextData);

type Props = {
  children?: React.ReactNode
};

export const PropertiesProvider: React.FC<Props> = ({ children }) => {
  const [properties, setProperties] = useState<Property[]>(fakeProperties);

  useEffect(() => {
    setProperties(fakeProperties);
  }, []);

  const getPropertyById = useCallback((id: number) => {
    return properties.find( property => property.id === id);
  },[properties]);

  return (
    <PropertiesContext.Provider
      value={{ properties, getPropertyById }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export function useProperties(): PropertiesContextData {
  const context = useContext(PropertiesContext);

  return context;
}
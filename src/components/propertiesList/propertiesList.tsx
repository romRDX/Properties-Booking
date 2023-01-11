import React, { useState, useMemo, useEffect } from 'react';
import { useFilter } from '../../hooks/useFilter';
import { useProperties } from '../../hooks/useProperties';
import { Property } from '../../types';
import Pagination from '../pagination/pagination';
import PropertyItem from '../propertyItem/propertyItem';
import { Container } from './propertiesList.styles';

const PropertiesList = () => {
  
  const { properties } = useProperties();
  const { filter } = useFilter();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);

  useEffect(() => {
    if(properties){
      const quotient = Math.floor(37/10);
      const remainder = 30 % 10;

      setTotalPages( remainder ? quotient+1 : quotient);
    }
  }, [properties]);

  const propertiesList = useMemo<Property[]>(() => {
    const pageProperties = properties.filter((property, index) => {
      return (index > currentPage*6-7) && (index < currentPage*6);
    });

    return pageProperties.filter((prop) => prop.name.toLowerCase().includes(filter?.toLowerCase()));
  }, [properties, currentPage, filter]);

  return (
    <Container>
      <ul>
        {
          propertiesList?.map((property) => (
            <PropertyItem key={property.id} property={property} />
          ))
        }
      </ul>

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </Container>
  );
}

export default PropertiesList;

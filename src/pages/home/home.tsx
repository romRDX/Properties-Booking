import React from 'react';
import PropertiesList from '../../components/propertiesList/propertiesList';
import SearchField from '../../components/searchField/SearchField';
import { Container, BookingBoard } from './home.styles';

const Home = () => {

  return (
    <Container>
      <BookingBoard>
        <div>
          <h2>Choose the property: </h2>
          <SearchField />
        </div>
        <PropertiesList />
        
      </BookingBoard>
    </Container>
  );
}

export default Home;

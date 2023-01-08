import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './header.styles';

const Header = () => {

  const navigate = useNavigate();

  return (
    <Container>
      
      <h1>Romullo's Booking</h1>

      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/my-bookings")}>My Bookings</li>
      </ul>
      
    </Container>
  );
}

export default Header;

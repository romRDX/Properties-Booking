import React from 'react';

import { Route, Routes } from "react-router-dom";
import Home from '../pages/home/home';
import MyBookings from '../pages/myBookings/myBookings';
import PropertyPage from '../pages/propertyPage/propertyPage';

const RoutesConfig: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/my-bookings" element={<MyBookings />} />
    <Route path="/property/:propertyId" element={<PropertyPage />} />
  </Routes>
);

export default RoutesConfig;
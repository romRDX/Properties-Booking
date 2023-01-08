import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import { Container } from './layout.styles';
import { Toaster } from 'react-hot-toast';

type Props = {
  children?: React.ReactNode
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
        { children }
        <Toaster />
      <Footer />
    </Container>
  );
}

export default Layout;

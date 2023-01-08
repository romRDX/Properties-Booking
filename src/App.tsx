import React from 'react';
import './App.css';
import AppProvider from './hooks';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/layout';
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;

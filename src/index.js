import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './pages/Error';
import Banner from './components/Banner'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
    <Header />
    <Banner />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    <Footer />
    </Router>
  </React.StrictMode>
);
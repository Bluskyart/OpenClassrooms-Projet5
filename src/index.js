import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import App from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './pages/Error';
import Banner from './components/Banner';
import Logement from './pages/Logement';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
    <main>
        <Header />
        <Banner />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path='/about' element={<About />} />
            <Route path={`/logement/:id`} element={<Logement />} />
            <Route path="*" element={<Error />} />
          </Routes>
    </main>
    </Router>
    <Footer />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';
import GalleryPage from './routes/GalleryPage';
import MyWorkPage from './routes/MyWorkPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sculpture-gallery" element={<GalleryPage/>} />
      <Route path="/my-work" element={<MyWorkPage />} />
      <Route path="/about-me" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </BrowserRouter>
);


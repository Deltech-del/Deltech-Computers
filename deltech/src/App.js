import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from '.pages/About/AboutUs';
import MainPage from '.pages/MainPage/MainPage';
import Services from '.pages/Services/Services';
import Faq from '.pages/Faq/Faq';
import ContactUs from '.pages/Contact/ContactUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="./pages/About" element={<AboutUs />}/>
          <Route path="./pages/Services" element={<Services />}/>
          <Route path="./pages/Faq" element={<Faq />}/>
          <Route path="./pages/Contact" element={<ContactUs />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

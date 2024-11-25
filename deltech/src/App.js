import React from 'react';
import NavigationBar from './components/Navigation/NavigationBar';
import AboutUs from './components/About/AboutUs';
import MainPage from './components/MainPage/MainPage';
import Services from './components/Services/Services';
import Faq from './components/Faq/Faq';
import ContactUs from './components/Contact/ContactUs';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <MainPage />
      <AboutUs />
      <Services />
      <Faq />
      <ContactUs />
    </div>
  );
}

export default App;

import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//Import Pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';
import Nav from './components/Nav';
//Router
// In React Router version 6 they have replaced Switch with Routes because of that the code doesn't work anymore.
import { Route, Routes, useLocation } from 'react-router-dom';
//Animation
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact elememt={<AboutUs />}>
          </Route>
          <Route path="/work" exact element={<OurWork />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/work/:id" element={<MovieDetail />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

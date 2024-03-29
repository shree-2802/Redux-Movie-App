import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Header,
  Home,
  MovieDetailing,
  PageNotFound,
  Footer,
} from './Components';
import Context from './contextAPI/context';

const App = () => {
  return (
    <Context>
      <div className='sass'>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:id' element={<MovieDetailing />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </Context>
  );
};

export default App;

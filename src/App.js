import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";


// function App() {
//   return (
//     <div className="App">
//       {/* Navbar */}
//       <Navbar />
//       {/* {Hero} */}
//       <Hero />
//       {/* {Product} */}
//       <Product />
//       {/* {Details} */}
//       <Details />
//       {/* {Ratings} */}
//       <Ratings />
//       <div className="flex flex-row gap-2" style={{ marginTop: '17px' }}>
//       <Button1 /><Button />
//       </div>
//       {/* {Reviews} */}
//       <Reviews />
      
//     </div> 
//   );
// }


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Hero />
        <Routes>
          <Route exact path="/upc1" element={<Page1 />} />
          <Route exact path="/upc2" element={<Page2 />} />
        </Routes>
        {/* Additional components and content */}
      </Router>
    </div>
  );
}

export default App;

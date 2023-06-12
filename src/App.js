import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";


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
          <Route exact path="/upc3" element={<Page3 />} />
          <Route exact path="/upc4" element={<Page4 />} />
          <Route exact path="/upc5" element={<Page5 />} />
          <Route exact path="/upc6" element={<Page6 />} />
        </Routes>
        {/* Additional components and content */}
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import Product from "./Page4/Product";
import Details from "./Page2/Details";
import Ratings from "./Page4/Ratings";
import Reviews from "./Page4/Reviews";
import Button1 from "./Page2/Button1";
import Button from "./Page2/Button";
import Button3 from "./Button3";
import Hidden from "./Hidden";
import Sparky from "./Page4/Sparky";

const Page2 = () => {
  return (
    <div className="">
      {/* {Product} */}
      <Product />
      <Details />
      <Ratings />
      <Sparky />
      {/* <Button/> */}
      <div className="flex flex-row gap-1" style={{ marginTop: '17px', marginBottom: '17px' }}>
      <Button1 /><Button3 /> 
      </div>
      {/* {Reviews} */}
      <Reviews/>
    </div>
  );
};

export default Page2;
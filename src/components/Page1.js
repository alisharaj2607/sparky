import React from "react";
import Product from "./Product";
import Details from "./Details";
import Ratings from "./Ratings";
import Reviews from "./Reviews";
import Button1 from "./Button1";
import Button from "./Button";
import Button3 from "./Button3";
import Hidden from "./Hidden";

const Page1 = () => {
  return (
    <div className="">
      {/* {Product} */}
      <Product />
      {/* {Details} */}
      <Details />
      {/* {Ratings} */}
      <Ratings />
      <Button/>
      <div className="flex flex-row gap-1" style={{ marginTop: '17px', marginBottom: '17px' }}>
      <Button1 /><Button3 /> 
      </div>
      {/* {Reviews} */}
      <Reviews />
    </div>
  );
};

export default Page1;
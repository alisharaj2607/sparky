import React from "react";
import Product from "./Product";
import Details from "./Details";
import Ratings from "./Ratings";
import Reviews from "./Reviews";
import Button1 from "./Button1";
import Button from "./Button";
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
      <div className="flex flex-row gap-2" style={{ marginTop: '17px' }}>
      <Button1 /><Button /> 
      </div>
      <Hidden/>
      {/* {Reviews} */}
      <Reviews />
    </div>
  );
};

export default Page1;
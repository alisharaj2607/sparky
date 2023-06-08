import React from "react";
import Product from "./Page2/Product";
import Details from "./Page2/Details";
import Ratings from "./Page2/Ratings";
import Reviews from "./Page2/Reviews";
import Button1 from "./Page2/Button1";
import Button from "./Page2/Button";

const Page2 = () => {
  return (
    <div className="">
      {/* {Product} */}
      <Product />
      <Details />
      <Ratings />
      <div className="flex flex-row gap-2" style={{ marginTop: '17px' }}>
      <Button1 /><Button />
      </div>
      <Reviews/>
    </div>
  );
};

export default Page2;
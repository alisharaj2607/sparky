import React from "react";
import candle1 from "../../assets/dogfood-1.png";
import candle2 from "../../assets/dogfood-2.png";
import candle3 from "../../assets/dogfood-3.png";
import candleBig from "../../assets/dogfood-big.png";

import { FaStar } from "react-icons/fa";

import { AiOutlineCar, AiOutlineStar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsBag, BsTruck } from "react-icons/bs";
import { TbBrandWalmart } from "react-icons/tb";
import { SlReload } from "react-icons/sl";

const Product = () => {
    return (
      <div className="px-8 justify-between flex items-center" style={{ marginLeft: '200px', marginRight: '200px' }}>
        {/* Left */}
        <div className="flex flex-col gap-2" >
            <img src={candle1} alt="" className=" h-30 w-30" />
            <img src={candle2} alt="" className=" h-30 w-30" />
            <img src={candle3} alt="" className=" h-30 w-30" />
        </div>
        {/* Middle */}

        <div className="px-12 flex justify-center">
            <img src={candleBig} alt="" className=" h-50" />
        </div>
        {/* Right */} 
        <div>
        <div className="card" style={{ width: '26rem', height: '750px' }}>
  <div class="card-body">
    <h5 class="card-title">Ol' Roy Long-Lasting Natural Peanut Butter Flavor Munchy Bones Chews for Dogs, 7 count, 20 oz</h5>
    <div class="star-row">
    <div className="flex flex-row gap-1">
      <div className="flex flex-row"> <FaStar /> <FaStar /> <FaStar /><FaStar /><AiOutlineStar /></div>
        <p>(3.9)</p>
        <p className=" underline">  20 reviews</p>
    </div>
    </div>
    <p class="product-price"><b class="bold-price">$6.97</b></p>
    <p class="text-below-price py-3">Price when purchased online</p>
    <a href="#" class="btn btn-primary"><b>Add to Cart</b></a>
    <hr class="line-in-card"></hr>
    <p class = "product-text py-3"><b>Actual Color:&ensp;</b>Orange, Pink, Red</p>
    <div className="flex flex-row gap-3">
      
      <div className="card-small" style={{ width: '13.5rem', height: 'auto' }}>
        <div class="card-body">
          <p class = "small-text"><b>Black, Dark Blue, Dark Green</b></p>
          <p class = "small-text2" style={{ marginLeft: '73px'}}><b>$6.97</b></p>
          <p class = "small-text3" style={{ marginLeft: '69px'}}><b>34.9c/oz</b></p>
        </div>
      </div>


      <div className="card-small2" style={{ width: '9rem', height: '17px' }}>
      <div class="card-body">
          <p class = "small-text"><b>Orange, Pink, Red</b></p>
          <p class = "small-text2" style={{ marginLeft: '40px'}}><b>$6.97</b></p>
          <p class = "small-text3" style={{ marginLeft: '37px'}}><b>34.9c/oz</b></p>
        </div>
        
      </div>
    </div>
    <hr class="line-in-card"></hr>

    <div className="flex flex-row gap-4" style={{ marginTop: '3px' }}>
      <div className="flex flex-row" style={{ marginTop: '13px' }}> <AiOutlineCar /> </div>
      <p class = "product-text py-3" >Pickup, <b>today</b> at <u>Sacramento Supercenter</u></p>
    </div>
    <div className="flex flex-row gap-3" style={{ marginTop: '-6px' }}>
      <div className="flex flex-row" style={{ marginTop: '13px' }}> <CiLocationOn /> </div>
      <p class = "product-text py-3" >Aisle G32</p>
    </div>
    <div className="flex flex-row gap-3" style={{ marginTop: '-6px' }}>
      <div className="flex flex-row" style={{ marginTop: '13px' }}> <BsBag /> </div>
      <p class = "product-text py-3" >Delivery from store <u>Check eligibility</u></p>
    </div>
    <div className="flex flex-row gap-3" style={{ marginTop: '-6px' }}>
      <div className="flex flex-row" style={{ marginTop: '14px' }}> <BsTruck /> </div>
      <p class = "product-text py-3" >Shipping, <b>arrives by Sat, Jun 10</b> to <u>Sacramento, 95829</u></p>
    </div>
    <div className="flex flex-row gap-3" style={{ marginTop: '-6px' }}>
      <div className="flex flex-row" style={{ marginTop: '14px' }}> <TbBrandWalmart /> </div>
      <p class = "product-text py-3" >Sold and shipped by Walmart.com</p>
    </div>
    <div className="flex flex-row gap-3" style={{ marginTop: '-6px' }}>
      <div className="flex flex-row" style={{ marginTop: '14px' }}> <SlReload /> </div>
      <p class = "product-text py-3" ><b>Free 90-day returns</b> <u>Details</u></p>
    </div>

  </div>
</div>
        </div>
      </div>
      
    );
  };
  
  export default Product;
import React from "react";
// import wallpaper from "../assets/wallpaper.jpg";
// import laptop from "../assets/laptop.png";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="mx-20 text-[13px] mt-[3px] px-4 py-5 lg:px-8 flex items-center gap-6">
        <div className=" flex items-center underline gap-1 text-gray">
          {/* <BsPhone /> */}
          <p className=" text-[#73767B]">Home   /</p>
        </div>
        <div className="text-[#73767B] underline items-center gap-1 text-gray">
          {/* <BiWorld /> */}
          <p className=" ">Decor   /</p>
        </div>
        <div className="text-black hover:underline">
        <p className="hidden md:flex ">Better Homes & Gardens Decor</p>
        </div>
      </div>
      <div><hr></hr></div>
      {/* add one more bar */}
      <div className="text-[13px] py-3 flex items-center justify-center" >
        <div className="text-black">
          <p className="mx-20 gap-3"><b>Ship free, no order min*</b> As often as you need. <u>Learn More</u></p>
        </div>
      </div>
      <div><hr></hr></div>
    </div>
    
  );
};

export default Hero;
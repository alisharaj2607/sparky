import React from "react";
import ratings from "../assets/ratings.png";

const Ratings = () => {
  return (
    <div className="reviews-and-ratings">
        {/* <p class="py-4"><b>Customer reviews & ratings</b></p> */}
        <img src={ratings} alt="" className=" h-25 w-25" />
    </div>
     
  );
};

export default Ratings;
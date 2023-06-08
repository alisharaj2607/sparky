import React from "react";
import { FaStar } from "react-icons/fa";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";

const Reviews = () => {
  return (
    <div className="reviews">
        {/* <hr class="line-in-card" style={{ marginRight: '60px', marginBottom: '10px', marginTop: '25px' }}></hr> */}
        <div class="review-row flex flex-row gap-5">
            <div className="card" style={{ width: '28rem', height: '320px' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <FaStar /> <FaStar /> <FaStar /><FaStar /><FaStar /></div>
                        </div>
                        <pre>                                    </pre>
                        <div class="date">12/27/2022</div>
                    </div>
                    <h5 class="card-review-title"><b>Beautiful candles</b></h5>
                    <p class="card-review-text">I love these candles, they are so beautiful and unique looking. The colors are very complimentary and multi-usage. I can mix the red and yellow colors for a fall time decor piece. Than I can take the red and pink and use it for valentines day. They are unscented which are nice to have so you aren't mixing different scents. They burn evenly and nicely as well.</p>
                    <p class="card-review-user">Happy84</p>
                    <div class="thumbs flex flex-row gap-5">
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsUp /></div> 
                            <p>0</p> 
                        </div>
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsDown /></div>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" style={{ width: '30rem', height: '320px' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <FaStar /> <FaStar /> <FaStar /><FaStar /><FaStar /></div>
                        </div>
                        <pre>                                        </pre>
                        <div class="date">12/23/2022</div>
                    </div>
                    <h5 class="card-review-title"><b>Sturdy candles</b></h5>
                    <p class="card-review-text">These candles are sturdy and heavy. They definitely won't tip over when lit. The colors are very versatile and can be mixed and matched according to your decor. The wax itself is smooth and even with no lumps or bumps. I also like that hey are unscented and don't compete with other fragrances in my home.</p>
                    <p class="card-review-user">Mighty</p>
                    <div class="thumbs flex flex-row gap-5">
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsUp /></div> 
                            <p>0</p> 
                        </div>
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsDown /></div>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>



        <div class="review-row flex flex-row gap-5">
            <div className="card" style={{ width: '28rem', height: '300px' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <FaStar /> <FaStar /> <FaStar /><FaStar /><FaStar /></div>
                        </div>
                        <pre>                                      </pre>
                        <div class="date">1/6/2023</div>
                    </div>
                    <h5 class="card-review-title"><b>Beautiful for decorationg</b></h5>
                    <p class="card-review-text">I have the green blue and black candles. They work well with my home decor. They would also be great for gifting. The 5 inch height makes them nice for standing out wherever you put them. No odor and they burn nice.</p>
                    <p class="card-review-user">JudyInCT</p>
                    <div class="thumbs flex flex-row gap-5">
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsUp /></div> 
                            <p>0</p> 
                        </div>
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsDown /></div>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" style={{ width: '30rem', height: '250px' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <FaStar /> <FaStar /> <FaStar /><FaStar /><FaStar /></div>
                        </div>
                        <pre>                                         </pre>
                        <div class="date">3/30/2023</div>
                    </div>
                    <h5 class="card-review-title"><b>Pretty Retro Candles</b></h5>
                    <p class="card-review-text">Love these retro looking candles!</p>
                    <p class="card-review-user">Melissa</p>
                    <div class="thumbs flex flex-row gap-5">
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsUp /></div> 
                            <p>0</p> 
                        </div>
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsDown /></div>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    </div>
     
  );
};

export default Reviews;
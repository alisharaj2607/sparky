import React from "react";
import { FaStar } from "react-icons/fa";
import { BsStarFill, BsStar } from "react-icons/bs";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";

const Reviews = () => {
  return (
    <div className="reviews flex flex-row gap-5" style={{ marginLeft: '-80px'}}>
        <hr class="line-in-card" style={{ marginRight: '60px', marginBottom: '10px', marginTop: '25px' }}></hr>
        <div class="review-row flex flex-col gap-1">
            <div className="card" style={{ width: '28rem', height: 'auto' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">12/27/2022</div>
                    </div>
                    <h5 class="card-review-title"><b>Storage cabinet</b></h5>
                    <p class="card-review-text">It's exactly what I wanted.</p>
                    <p class="card-review-user">JaredSC</p>
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

            <div className="card" style={{ width: '28rem', height: 'auto' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">12/23/2022</div>
                    </div>
                    <h5 class="card-review-title"><b>struggle but worth it</b></h5>
                    <p class="card-review-text">I bought two of these because I am transforming my closet into a Beauty space so I needed small drawers. It arrived sooner than expected which was awesome. They look amazing the only thing is that assembly was hard due to missing parts and some screws not able to fit in their holes as well as holes missing. I had to create my own holes for some area and sadly broke the wood a bit. I was able to cover it up and is not noticeable but it was very frustrating. But it looks good.</p>
                    <p class="card-review-user">Nesa</p>
                    <div class="thumbs flex flex-row gap-5">
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsUp /></div> 
                            <p>4</p> 
                        </div>
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsDown /></div>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" style={{ width: '28rem', height: 'auto' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <BsStarFill /> <BsStar /> <BsStar /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">12/23/2022</div>
                    </div>
                    <h5 class="card-review-title"><b>Fair evaluation</b></h5>
                    <p class="card-review-text">Very disappointed. Drawers are too shallow and the cabinet is smaller than I needed. Don't buy unless you want something very tiny. To be fair I guess I didn't look at the dimensions closely enough. Price not equal to product.</p>
                    <p class="card-review-user">K M T 28</p>
                    <div class="thumbs flex flex-row gap-5">
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsUp /></div> 
                            <p>4</p> 
                        </div>
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsDown /></div>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" style={{ width: '28rem', height: 'auto' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">3/23/2023</div>
                    </div>
                    <h5 class="card-review-title"><b>Worth the money</b></h5>
                    <p class="card-review-text">I like them after I put them together. The instruction doesn't have writings just pictures and numbers. Make sure you look at the pictures closely. The two side pieces and top have grooves for the back piece. I didn't have much cabinet space, so both of these handled my overflow of items. They are sturdy and worth the money. I am pleased with them.</p>
                    <p class="card-review-user">Suzaniam</p>
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

            <div className="card" style={{ width: '28rem', height: 'auto' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStar /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">7/31/2021</div>
                    </div>
                    <h5 class="card-review-title"><b>Smaller than the dimensions in description</b></h5>
                    <p class="card-review-text">The item is probably worth $39.99 the thing is better for little things such as brushes or hair ties.. maybe sanitary pads and such. It can fit wash cloths folded up (not many) definitely can not fit towels (which is the primary reason for the purchase) Overall, I'd recommend this for a baby's room rather than a bathroom space. It'll do for now</p>
                    <p class="card-review-user">Raye Beth</p>
                    <div class="thumbs flex flex-row gap-5">
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsUp /></div> 
                            <p>2</p> 
                        </div>
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsDown /></div>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" style={{ width: '28rem', height: 'auto' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <BsStarFill /> <BsStar /> <BsStar /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">7/31/2021</div>
                    </div>
                    <h5 class="card-review-title"><b>Hard to put together!</b></h5>
                    <p class="card-review-text">Omg - terrible problems trying to put it together! You need a drill with a SMALL Phillips head bit. They should warn you!! Now I have stripped screws, and of course, not enough extras. NOT easy assembly!!!</p>
                    <p class="card-review-user">Kaitlin W</p>
                    <div class="thumbs flex flex-row gap-5">
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsUp /></div> 
                            <p>2</p> 
                        </div>
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsDown /></div>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" style={{ width: '28rem', height: 'auto' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">7/31/2021</div>
                    </div>
                    <h5 class="card-review-title"><b>Cute!!</b></h5>
                    <p class="card-review-text">It's cute. I was expecting a bit wider. Each drawer is big enough to hold 4 rolls of toilet paper. So not bad.</p>
                    <p class="card-review-user">Daniel W</p>
                    <div class="thumbs flex flex-row gap-5">
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsUp /></div> 
                            <p>2</p> 
                        </div>
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsDown /></div>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" style={{ width: '28rem', height: 'auto' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStar /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">7/31/2021</div>
                    </div>
                    <h5 class="card-review-title"><b>Almost perfect for me.</b></h5>
                    <p class="card-review-text">It's just the height I need and the drawers are deep but I just wished it was a bit wider. Otherwise I'll love it.</p>
                    <p class="card-review-user">Skiplewis</p>
                    <div class="thumbs flex flex-row gap-5">
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsUp /></div> 
                            <p>2</p> 
                        </div>
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsDown /></div>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" style={{ width: '28rem', height: 'auto' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">1/30/2023</div>
                    </div>
                    <h5 class="card-review-title"><b>Very happy with purchase.</b></h5>
                    <p class="card-review-text">It was super easy to put together. Perfect size for bath rags, extra tissue rolls (3 large rolls per drawer), guest shampoos, soaps, razors..... doesn't look cheap and is very sturdy.</p>
                    <p class="card-review-user">N. Thornton</p>
                    <div class="thumbs flex flex-row gap-5">
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsUp /></div> 
                            <p>2</p> 
                        </div>
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsDown /></div>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" style={{ width: '28rem', height: 'auto' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStar /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">7/10/2022</div>
                    </div>
                    <h5 class="card-review-title"><b>Medium Size, Price, Quality</b></h5>
                    <p class="card-review-text">This drawer unit looks good when assembled. Drawers have plastic guides on the sides, which is more than some similar units. But the assembly hardware is of a lower quality than some, making me wonder how long it will be before the joints loosen.</p>
                    <p class="card-review-user">Rob302</p>
                    <div class="thumbs flex flex-row gap-5">
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsUp /></div> 
                            <p>2</p> 
                        </div>
                        <div class="flex flex-row gap-1">
                            <div class="thumb"><BsHandThumbsDown /></div>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>



        <div class="review-row flex flex-col gap-1">
            <div className="card" style={{ width: '28rem', height: 'auto' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                      </pre>
                        <div class="date">5/27/2023</div>
                    </div>
                    <h5 class="card-review-title"><b>Hassle</b></h5>
                    <p class="card-review-text">To many screws is the only reason! Im leaving a 3 star it was very tough putting it together! But very small and cute just perfect for my bathroom !</p>
                    <p class="card-review-user">Omegas</p>
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

            <div className="card" style={{ width: '28rem', height: 'auto' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">4/17/2019</div>
                    </div>
                    <h5 class="card-review-title"><b>Nice quality for the price. Easy to assemble</b></h5>
                    <p class="card-review-text">It is small but exactly what I needed for the space I have.</p>
                    <p class="card-review-user">Rosebudd</p>
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

            <div className="card" style={{ width: '28rem', height: 'auto' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStar /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">4/17/2019</div>
                    </div>
                    <h5 class="card-review-title"><b>Cute little cabinet</b></h5>
                    <p class="card-review-text">Great for a small space. It seems pretty sturdy. I had no problem putting it together. I laid out all the parts first. Everything is well marked. The directions are just pictures but once you start it's easy enough.</p>
                    <p class="card-review-user">LeCygne</p>
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

            <div className="card" style={{ width: '28rem', height: 'auto' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">4/07/2019</div>
                    </div>
                    <h5 class="card-review-title"><b>Excellent design</b></h5>
                    <p class="card-review-text">Wow!! Fantastic quality - truly impressed. Daughter loves it for her dorm. Don't hesitate!!</p>
                    <p class="card-review-user">RennyK</p>
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

            <div className="card" style={{ width: '28rem', height: 'auto' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">10/27/2020</div>
                    </div>
                    <h5 class="card-review-title"><b>Storage unit</b></h5>
                    <p class="card-review-text">It's a nice storage unit, like the color and design. Not big but hold bathroom items well.</p>
                    <p class="card-review-user">Antoine</p>
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

            <div className="card" style={{ width: '28rem', height: 'auto' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">5/20/2019</div>
                    </div>
                    <h5 class="card-review-title"><b>Not worth the money</b></h5>
                    <p class="card-review-text">Cons: This cabinet is TINY! It is a lot smaller and narrower than it seems. It's not worth the money even on sale. I will make it work because I do not want the hassle of returns. Pros: It is stylish and easy to assemble.</p>
                    <p class="card-review-user">Kiley's Mimi</p>
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

            <div className="card" style={{ width: '28rem', height: 'auto' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStar /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">10/27/2020</div>
                    </div>
                    <h5 class="card-review-title"><b>Terrible</b></h5>
                    <p class="card-review-text">It was probably was nice but it arrived broken / damaged.</p>
                    <p class="card-review-user">bear</p>
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

            <div className="card" style={{ width: '28rem', height: 'auto' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">4/9/2018</div>
                    </div>
                    <h5 class="card-review-title"><b>Good Price.</b></h5>
                    <p class="card-review-text">Easy to assemble for the most part. Perfect size for what I needed. Holds a lot of stuff, more than it looks like.</p>
                    <p class="card-review-user">thomble</p>
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

            <div className="card" style={{ width: '28rem', height: 'auto' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">4/28/2019</div>
                    </div>
                    <h5 class="card-review-title"><b>Love this!</b></h5>
                    <p class="card-review-text">Loved this bathroom cabinet. Still working on how to decorate the three shelves, but it fit perfectly in my small bathroom.</p>
                    <p class="card-review-user">Deborah from West Texas</p>
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

            <div className="card" style={{ width: '28rem', height: 'auto' }}>
                <div class="card-body">
                    <div class="star-row flex flex-row">
                        <div className="flex flex-row gap-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="flex flex-row"> <BsStarFill /> <BsStar /> <BsStar /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">10/27/2020</div>
                    </div>
                    <h5 class="card-review-title"><b>Boooo</b></h5>
                    <p class="card-review-text">Poor product. Very wobbly. Not stable at all</p>
                    <p class="card-review-user">Lenie</p>
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
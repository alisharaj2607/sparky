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
                    <h5 class="card-review-title"><b>Best purchase ever</b></h5>
                    <p class="card-review-text">At first I was skeptical because it was a 1/3 the price of my old one. I was pleasantly surprised at how nice it is. It heats up fast and love the temperature control. It came in a beautiful box encased in a velvety black bag and a nice long cord. Not that it matters much but it's pretty too.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">12/23/2022</div>
                    </div>
                    <h5 class="card-review-title"><b>Works great, super cute!</b></h5>
                    <p class="card-review-text">i got this hair straightener for my teen daughter who has naturally curly hair. She got a 'punk mullet' haircut, but it just didn't look how she wanted it with her curly hair so i got her this straightener. She loves the pink color and finds it very to use. It comes with a cute fabric pouch and attractive box and easy to follow instructions. WOrks just as described and she's one happy girl!</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">12/23/2022</div>
                    </div>
                    <h5 class="card-review-title"><b>Heat up fast and easy to use</b></h5>
                    <p class="card-review-text">I'm pretty lazy to take care of my happy messy curly hair...And this easy-to-use and fast-heating hair straightener works perfectly! Satisfied with the functions and the design as well!</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStar /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">3/23/2023</div>
                    </div>
                    <h5 class="card-review-title"><b>disappointed</b></h5>
                    <p class="card-review-text">it seems to work ok, but it doesn't align 100%, there's a gap between the plates and very disappointed that the flat iron box itself since is an open box, looked like my flat iron was a return or something, the cord was all undone and my lock system doesn't work. Hoping the product will work fine, it's worth a try, because the lock already doesn't work.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">7/31/2021</div>
                    </div>
                    <h5 class="card-review-title"><b>Pretty Good Flat Iron</b></h5>
                    <p class="card-review-text">For the price it’s a really good flat iron, with just one pass without pulling hair and my hair it’s straight, saving time and less damage. It has a rotating cord handle, which makes it easy to use and store, and it can also be used as a curling iron. The adjustable temperature and LCD display are great as you can control the temperature quickly, I was really surprised that the LCD display shows the recommended temperature for three types of hair.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">7/31/2021</div>
                    </div>
                    <h5 class="card-review-title"><b>Smooth</b></h5>
                    <p class="card-review-text">I have pretty course / frizzy hair and always have trouble with flat irons. I bought this one because it mentioned anti-frizz as part of the product description. I received the flat iron - and tried it right away. Right out of the box the product looked very nice and came in very nice packaging. When I used the flat iron I had it on around 400 degrees and it made my hair very smooth and seemed to reduce the amount of frizz my hair usually has. Definitely happy with the product.</p>
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
                    <h5 class="card-review-title"><b>Love it!!</b></h5>
                    <p class="card-review-text">I love these flat irons. They get super hot very quick. I flat ironed my hair in 15 minutes. It was raining outside after I flat ironed my hair but my hair did not get all puffy and frizzy. I am so happy with the purchase! I could not find any other flat irons for my hair texture.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStar /> <BsStar /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">7/31/2021</div>
                    </div>
                    <h5 class="card-review-title"><b>Don't waste your money; cheap.</b></h5>
                    <p class="card-review-text">The iron temp light stopped working a month after purchase when you turn it on and off. It's inreadable and Walmart will not do anything to make this purchase right.</p>
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
                    <h5 class="card-review-title"><b>Heats up fast and fixes the frizz</b></h5>
                    <p class="card-review-text">I normally don’t do much with my hair but I have a couple big dates coming up with my husband so I bought this flat iron. It arrived in a nice sturdy box that I can store it in under my sink. I like that the instructions had suggested temperatures depending on your hair type. It heats up fairly quickly and shows the temp in the digital window. On the side it has buttons to increase or decrease the heat setting by 10° at a time. There is also a lock on the bottom. I imagine that can be used for storage and for keeping the iron shut while styling your hair so it doesn’t slide out. Overall, I am very pleased with my purchase. My hair is always frizzy looking when I wear it down but the flat iron fixed that for me. It was a good price for the product and worked great.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStar /> <BsStar /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">7/10/2022</div>
                    </div>
                    <h5 class="card-review-title"><b>Damaged product pkg. Shipping pkg ok.</b></h5>
                    <p class="card-review-text">When I got my flat iron, the end of the packaging was damaged before it was packed to be shipped. The item appears to be ok and I’ll try it to make sure. I’m hoping it wasn’t previous used, returned and then shipped to me presumably as new. Disappointed.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /></div> 
                        </div>
                        <pre>                                      </pre>
                        <div class="date">5/27/2023</div>
                    </div>
                    <h5 class="card-review-title"><b>Perfect all-around straightener!</b></h5>
                    <p class="card-review-text">This is a great straightener for the price that I paid! The LED screen is easy to read, and the buttons are placed in a spot that I won't accidentally press them when using (which happens with a lot of other straighteners). The plates get hot quickly, and remain hot when using them. Super happy with this purchase! In the photo, I used it to curl my hair and it did that well too!</p>
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
                    <h5 class="card-review-title"><b>Beautiful hair without going to the hairdressers.</b></h5>
                    <p class="card-review-text">When I wash my hair, and dry it, I have frizzy hair, and the end look ragged. I have used the Kipozi titanium flat iron several times now, and my hair baby fine hair looks so pretty. Actually it looks as if I have been to the hairdressers. Having a better quality flat iron, such as this one, is certainly worth paying a little bit more than a basic one. I can tell you that you will be delighted with it.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">4/17/2019</div>
                    </div>
                    <h5 class="card-review-title"><b>Good Flat Iron</b></h5>
                    <p class="card-review-text">Nice flat iron and I like that you can set the temperature to desired heat and it stays even when you turn it on the next time.</p>
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
                    <h5 class="card-review-title"><b>Heats up FAST</b></h5>
                    <p class="card-review-text">This is my go to straightener/curler now. I love how it heats up so fast and easily defrizzes my hair. It's really easy to add a flip at the ends or curl it all the way down with just a twist of the wrist. Very elegant looking also.</p>
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
                    <h5 class="card-review-title"><b>Cool looking easy to use hair straightener!</b></h5>
                    <p class="card-review-text">I bought this for my daughter and it didn’t disappoint. Easy to use, heats up and cools down in matter of seconds. The price for the quality is really good. I would definitely recommend this hair straightener for teenagers and adults too!</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStar /> <BsStar /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">5/20/2019</div>
                    </div>
                    <h5 class="card-review-title"><b>No thanks</b></h5>
                    <p class="card-review-text">This is not for fine thin hair. You have to press this Irion pretty hard together in order to touch your thin short hair. It even says in the description that the Irons don't touch you have to press it together. Way too hard for me.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">10/27/2020</div>
                    </div>
                    <h5 class="card-review-title"><b>awesome straightener at a great price!</b></h5>
                    <p class="card-review-text">This straightener is great! I can't afford the high end pricey ones, but I couldn't tell a difference with this. I love that the controls are push buttons along the side, so I never end up accidentally changing the temp or turning it off. Nice, clear digital screen that shows your settings. No loud, annoying beeps from it either. I used it when I first got it and styled my hair straight. I also used it to curl my hair, which it did amazing at. it has a beveled edge so you get a beautiful curl with it. I would 100% recommend this straightener!!!</p>
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
                    <h5 class="card-review-title"><b>perfect results</b></h5>
                    <p class="card-review-text">This 2 in 1 curler is well priced and I get good results from it. It is fast at heating up. I primarily use it for the straightening effect. With this there is no need to go over and over the same area to straighten. I really enjoy this iron and hope it lasts a long time</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">4/28/2019</div>
                    </div>
                    <h5 class="card-review-title"><b>Not for curly hair</b></h5>
                    <p class="card-review-text">This straightener heats up super fast and goes up to 450 degrees. It is not a great quality straightener for curly hair. I have naturally curly hair and it is hard to find a straightener that will do a good job on my hair. I really hope this worked.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">10/27/2020</div>
                    </div>
                    <h5 class="card-review-title"><b>Practical purchase</b></h5>
                    <p class="card-review-text">Sleek design, easy to use. This is a great straightener for anyone, specially someone new to straightening hair. Its very straightforward and not heavy or burdensome. Great for segmenting hair.</p>
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
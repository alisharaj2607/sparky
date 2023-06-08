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
                    <h5 class="card-review-title"><b>Wife + kids ask to make ice cream all the time now</b></h5>
                    <p class="card-review-text">We are pleasantly pleased with our soft serve ice cream maker. Have made several batches of different flavors, mostly following given recipes and they've all worked well and enjoyed ice cream in 20-25 minutes of eager waiting. It's not very good at dispensing unless the ice cream is very soft (too soft). We can get about 1-2 cone's worth at the right consistency before it just gets too hard for the machine to dispense, even though most of the ice cream is still quite soft. They know it's a problem because they have a clear label right on the front that says once the machine has a hard time dispensing, it's time to scoop out manually. Which we do and enjoy regardless. (Watch out, it's messy!) Yes it does dispense mix ins, a bit roughly and with unsettling grinding and crunching sounds but it works. Clean up is decently easy, with only a couple harder to clean parts that take thinking and creativity. I wish more of the parts were metal and not plastic, especially the dispensing lever piece. I'd respect it a lot more if it wasn't so plastic-y and cheap feeling, but it definitely makes soft serve ice cream and pretty quickly. Kids are always excited when we bring it out. Overall, satisfied customers and yet glad that it was partially funded by a gift and we didn't have to pay full price for it. Not sure it would have been worth full price. This is now my go-to over the old fashioned salt and ice route. I'm probably going to have to make ice cream every week now, and this makes it easy.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStar /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">12/23/2022</div>
                    </div>
                    <h5 class="card-review-title"><b>Instant Ice cream</b></h5>
                    <p class="card-review-text">I bought this about a month ago and I love it. My grandchildren like to help me make the ice cream. It makes enough for several ice cream cones and bowls of ice cream. I love that the sprinkles come out with the ice cream.</p>
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
                    <h5 class="card-review-title"><b>Like having a frozen yogurt shop at home!</b></h5>
                    <p class="card-review-text">I got this for Christmas, and the kids love having soft serve whenever they want. Reminds us of going to the frozen yogurt shops. Very easy to use, just read all the instructions carefully. I've used almond milk and fat free cow's milk, and both turned out great! (It also comes with some good recipes.)</p>
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
                    <h5 class="card-review-title"><b>Love it!</b></h5>
                    <p class="card-review-text">My family loves this appliance! I think it's my best purchase in years! I've made all sorts of ice cream, and it's not even hot outside yet!</p>
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
                    <h5 class="card-review-title"><b>Mom approved!</b></h5>
                    <p class="card-review-text">This machine is everything we wanted and more! I absolutely love being able to make my kids some soft serve ice cream! I have recommended this to all of my family and friends! 5 stars just doesn't seem like enough!</p>
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
                    <h5 class="card-review-title"><b>Cuisinart ice cream maker review</b></h5>
                    <p class="card-review-text">This makes great ice cream. I just wish the bowl was a little easier to clean and I could add bigger toppings. It's expensive, but I got it on sale, so it's worth it. But the overall quality is awesome.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStar /> <BsStar /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">7/31/2021</div>
                    </div>
                    <h5 class="card-review-title"><b>Horrible product DO NOT BUY</b></h5>
                    <p class="card-review-text">It was missing parts and I just got it and they said it was out of warranty and I couldn't get a Portrait I returned it to the store and they wouldn't give me my money back they said on the product we have to give you spell credit money back I've in-store credit and I went and actually bought an ice cream machine that work</p>
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
                    <h5 class="card-review-title"><b>Soft Serve Ice cream</b></h5>
                    <p class="card-review-text">For the price the machine is good at making soft serve ice cream. It took me a couple attempts and was ready to send back, the key is making sure the mixing bowl is completely frozen. I think this will be a fun machine to do soft serve ice cream with the family.</p>
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
                    <h5 class="card-review-title"><b>Great product! Watch for the topping sizes.</b></h5>
                    <p class="card-review-text">Love the ice cream maker! Only negative I have is the regular sized chocolate chips do not dispense through the topping dispenser, you much get the mini kind. Other that that, no complaints at all! The ice cream as well as the yogurt come out phenomenal!</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStar /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">7/10/2022</div>
                    </div>
                    <h5 class="card-review-title"><b>Very bad product stay away</b></h5>
                    <p class="card-review-text">Not good for the money. Have tried several recipes that came with the soft serve maker, none of which turned out good, what a disappointment. Ice cream only comes out when paddle passes by so it. Ones out in short clumps. Took a very long time to get cold enough to not come out as a liquid only. Very very very bad product I would definitely stay away from it at all costs.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStar /> <BsStar /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                      </pre>
                        <div class="date">5/27/2023</div>
                    </div>
                    <h5 class="card-review-title"><b>No good</b></h5>
                    <p class="card-review-text">I really wanted to like it but its not working out, a family member is diabetic so we try to substitute product and its failed miserably. It freezes to the sides after a few minutes then the mixer mechanism starts stripping gears and making a horrible noise as its unable to spin. Ive even bought another tub to be sure that was not the issue. Now even following the official recipe in the book it skips gears and fails to work. Perhaps we got a lemon.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStar /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">4/17/2019</div>
                    </div>
                    <h5 class="card-review-title"><b>Pricey “in my opinion”</b></h5>
                    <p class="card-review-text">I'd give it 5 stars except for the fact I needed to adjust the recipe to less milk, and the (condiments don't come work very well when using them More like a toy) my tip is-freeze the bowl longer than specified. Thank you</p>
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
                    <h5 class="card-review-title"><b>Pay attention and find some very small brushes.</b></h5>
                    <p class="card-review-text">Makes great ice cream, but with a few caveats. It is difficult to clean, with lots of nooks and crannies to collect residue. And it gets clogged up if you add any chips etc. at the beginning of processing. They should be added slowly, an only after freezing begins. Should also have a fail safe switch to prevent processing if the bowl is not in place, albeit when one is careless and not paying attention.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">4/07/2019</div>
                    </div>
                    <h5 class="card-review-title"><b>Mixed (in) Review</b></h5>
                    <p class="card-review-text">1. It's nice that I can make as many servings as I want. 2. The recipes included aren't good. Find one on the internet. 3. It is a good price and it does work. 4. The mix-ins come out too fast, so nothing consistently mixes in because you have to close and open the mix-in shuttle. 5. The saddest part for me... there is not a smooth flow like Dairy Queen or the photo. The churning blades chop the ice cream as it flows out, giving you 2-3 inch pieces. I tried turning the machine off before dispensing, but then no ice cream flows out.</p>
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
                    <h5 class="card-review-title"><b>Amazing product</b></h5>
                    <p class="card-review-text">Works very well! We use 1</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStar /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">5/20/2019</div>
                    </div>
                    <h5 class="card-review-title"><b>Frustration</b></h5>
                    <p class="card-review-text">It's not as fun and easy as it seems, my granddaughter and I both got a little frustrated and fed up with the process. I would like to return it but I think too much time has passed. Don't think I will be using it often.</p>
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
                    <h5 class="card-review-title"><b>great so far</b></h5>
                    <p class="card-review-text">I have used it twice, so far, made strawberry then chocolate ice creams. they tasted good.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStar /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">4/9/2018</div>
                    </div>
                    <h5 class="card-review-title"><b>Easy to clean</b></h5>
                    <p class="card-review-text">I used the soft ice cream maker a few times now and have been completely satisfied by it's performance. I would have given the product 5 stars if the machine itself was smaller for storage purposes. The other con to the ice cream maker is buying the ingredients. 30 dollars to make simple chocolate ice cream. Sure you can make more than 1 batch but the initial hit is steep.</p>
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
                    <h5 class="card-review-title"><b>ABSOLUTELY FANTASTIC!!! A Must have...</b></h5>
                    <p class="card-review-text">I loved it so much I purchased another one for my friend and her young son. Great Quality, Simple Recipes, and Delicious! Love the fact that you can make lower calorie ice cream, along with Yogurt and Sherbert. This is a WONDERFUL Machine, and lots of FUN. Saves money on store bought ice cream and you actually get better quality ice cream at a Very AFFORDABLE Price !... You know exactly what you are eating when you make it yourself!!!! I give this 5☆'s and HIGHLY RECOMMEND purchasing one for yourself AND someone else.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">10/27/2020</div>
                    </div>
                    <h5 class="card-review-title"><b>Timing</b></h5>
                    <p class="card-review-text">The mixture gets very hard very quickly. The machine then makes loud sounds because it can no longer churn/mix. At that point, the mixture is too hard to come out of the nozzle. Be prepared to scoop</p>
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
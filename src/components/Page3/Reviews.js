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
                    <h5 class="card-review-title"><b>Love them</b></h5>
                    <p class="card-review-text">My poodle loves these, she is very picky, her favorite snack. She loves the peanut butter flavor. Will always choose this if given a choice</p>
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
                    <h5 class="card-review-title"><b>Good delivery</b></h5>
                    <p class="card-review-text">Arrived on time and in good condition. I just wish I could get a larger count of these bars because my fur baby who is a boxer and Bull mastiff bred mix loves them the best. So Please come up with a plan for a good cost and larger package for both your Company and We the consumers. Thanks Ol’Roy</p>
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
                    <h5 class="card-review-title"><b>Tasty Treat Dogs Love</b></h5>
                    <p class="card-review-text">My precious furbaby loves these bones. Never a disappointment watching her with it. So cute when she buries it and all excited to find it and finish eating it. Your dog will surely love these bones. They are not hard or crunchy. Actually looks delucious.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStar /> <BsStar /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">3/23/2023</div>
                    </div>
                    <h5 class="card-review-title"><b>Not long lasting!</b></h5>
                    <p class="card-review-text">These are not long lasting. My dog chewed them up and ate them in less than 15 minutes. I was hoping that it would be something that would keep her busy for a while. Not long lasting!</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStar /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">7/31/2021</div>
                    </div>
                    <h5 class="card-review-title"><b>5 - 10 min chew for a med. dog</b></h5>
                    <p class="card-review-text">My dog can be picky when it come to bones, but he loves these. These are rated a medium chew. My dog finishes it off in about 5 - 10 min. He gets 1 a day.</p>
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
                    <h5 class="card-review-title"><b>My dog loves them</b></h5>
                    <p class="card-review-text">My dog loves them,he's a larger dog wouldn't recommend for a small dog. The only problem is once in a while it gets stuck on his tooth. But, it dissolves.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">7/31/2021</div>
                    </div>
                    <h5 class="card-review-title"><b>NOT as long lasting as promised!</b></h5>
                    <p class="card-review-text">Dogs seemed to love them but they didn't last as long for them as I hope they may for perhaps smaller dogs as it does state on the packaging LONG LASTING! Wasn't the case for both of my dogs. My German Shepherd is a bit more savoring of treats so it did last a bit longer for him than for my Yellow Lab, but she seemingly inhaled it!</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">7/31/2021</div>
                    </div>
                    <h5 class="card-review-title"><b>I would recommend getting these for your dog.</b></h5>
                    <p class="card-review-text">My dog seems to really enjoy these.</p>
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
                    <h5 class="card-review-title"><b>Koda loves these bones!</b></h5>
                    <p class="card-review-text">My service dog is 15 years old and she LOVES these.</p>
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
                    <h5 class="card-review-title"><b>Not lasting long</b></h5>
                    <p class="card-review-text">These did not meet my expectations. As the packaging said „long lasting“ I thought they would last my dog at least an hour. He’s a medium sized dog and finished his treat in 3 minutes. This was not what I expected.</p>
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
                    <h5 class="card-review-title"><b>Good</b></h5>
                    <p class="card-review-text">My German Shepherd eats these. No issues.</p>
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
                    <h5 class="card-review-title"><b>Inexpensive and dog loved</b></h5>
                    <p class="card-review-text">Dogs love them and the price is reasonable</p>
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
                    <h5 class="card-review-title"><b>count not matching</b></h5>
                    <p class="card-review-text">My dog Bubba loves these bones. Only thing is sometimes there will be 6 bones instead of 7 bones in the bag</p>
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
                    <h5 class="card-review-title"><b>OH DOGGIES</b></h5>
                    <p class="card-review-text">I DONT HAVE DOGS MYSELF....THEY DIED...I GIVE THESE TO MY LOUSY NEIGHBORS WHO DONT CARE FOR THEIR 2 DOGS...I FEED THEM EVERY DAY AND GIVE THEN ONE OF THESE 2X A WEEK....THEY LOVE THEM....WISH THEY WERE CHEAPER.......IM A SENIOR</p>
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
                    <h5 class="card-review-title"><b>Jackson LOVES THEM!</b></h5>
                    <p class="card-review-text">My dogs favorite treat hands down! He just LOVES these! No matter which other treats I buy he prefers these. He reminds me each evening at around 7:00PM that it is Ol Roy time.</p>
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
                    <h5 class="card-review-title"><b>Not like they once were.</b></h5>
                    <p class="card-review-text">I would always buy these 10 or more at a time and it seems like they are not as fresh since they changed the packaging. I have an older dog and I have received some that were so dried out she couldnt bite them.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStar /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">10/27/2020</div>
                    </div>
                    <h5 class="card-review-title"><b>great so far</b></h5>
                    <p class="card-review-text">My larger dogs love them. However the smaller dogs it upsets thier stomach.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">4/9/2018</div>
                    </div>
                    <h5 class="card-review-title"><b>Taste is good but for long</b></h5>
                    <p class="card-review-text">My dogs love them but they are not long lasting. I have a rat terrier and a German Shepard and both of them have them gone in about 5 minutes.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStar /> <BsStar /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">4/28/2019</div>
                    </div>
                    <h5 class="card-review-title"><b>New Formula..awful</b></h5>
                    <p class="card-review-text">New Packaging and new taste. My dog will not eat the new version of these Munchy bones. It used to be in the red packaging, now they are blue and has a new formula. Its too bad because these used to be my dogs favorite and would buy in bulk...not anymore!</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStar /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">10/27/2020</div>
                    </div>
                    <h5 class="card-review-title"><b>Timing</b></h5>
                    <p class="card-review-text">getting very disappointed in ability to purchase products i have always been able to go into store to buy do not really like going online to buy so instead i end up going to another that is not walmart. it may cost a little more but is worth the conveince. Even the shampoo, salad dressing etc. its easier to shop groceries then go to another srore in same area than to go to walmart and still have to go to others stores.</p>
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
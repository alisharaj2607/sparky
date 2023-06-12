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
                    <h5 class="card-review-title"><b>Twinkly lights</b></h5>
                    <p class="card-review-text">Good strong wire, bright lights with soft glow, Christmas or summer back yard.</p>
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
                    <h5 class="card-review-title"><b>A LIGHT DISPLAY FOR THE HOLIDAYS</b></h5>
                    <p class="card-review-text">The HOLIDAY TIME 600 CLEAR MINI LIGHTS set has more than fulfilled my wish to light up the Holidays! First, some of the facts: - Each set is made up of 4 bundles. - Each bundle has 150 mini lights. - Each length is rated 61.2 watts for a total of 0.51 amps. - You can connect up to 3 strands though the box does have 4. - The total length of each strand is 125 feet, with lights spaced along 118 feet. - They are rated for indoor and outdoor use. Suggestions: - Remember to check all the lights BEFORE you put them up. It will be easier to change any of them out. There are replacement bulbs included in case they are needed. - I plan to keep one strand as is. It has created a beautiful, natural-looking wreath and would make a lovely centerpiece for our sideboard. I could plug it in and still hide the wiring. - I'll straighten out and hang the rest. And finally: The 600 mini lights make a great addition to our Holiday Time decorations. I hope to put them up early so my family, friends, and neighbors can enjoy them over Thanksgiving, Christmas, and the New Year. Happy Holidays everyone!!</p>
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
                    <h5 class="card-review-title"><b>Bright and in sets!</b></h5>
                    <p class="card-review-text">These are great replacement lights. Bright and small, and while there are a lot of lights then come in smaller sets to help make putting them on the tree much easier.</p>
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
                    <h5 class="card-review-title"><b>Christmas lights</b></h5>
                    <p class="card-review-text">I love to decorate for christmas. I hate buying multiple boxes of lights. Sometimes the clear lights will be different shades. When they are all In the same box they match. Live my tree with my new lights.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStar /> <BsStar /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                    </pre>
                        <div class="date">7/31/2021</div>
                    </div>
                    <h5 class="card-review-title"><b>Not reliable AT ALL!</b></h5>
                    <p class="card-review-text">I bought 1200 of your lights last year but didn't use them until this year. Then while decorating my tree, I got to the last string and they didn't work. So I order 600 more. Between waiting for the lights and a trip, it pushed my decorating back two weeks. Plugged in one string of lights for maybe 3 mins and they just went out. The box only has 2 strings. Half the lights were a waste. Now I'm not even sure if the other string will work 😔. It's 2 weeks until Christmas and I still don't have a decorated tree 😤.</p>
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
                    <h5 class="card-review-title"><b>Solid package of Christmas lights</b></h5>
                    <p class="card-review-text">The 600ct clear Christmas Lights from Holiday Time was the right amount of lights I needed to decorate the whole room with lights. With 125ft of coverage, I was able to add extra Christmas magic to are Christmas decorations this year. Instead of getting a bunch of boxes of lights, it was nice to get one big box with a bunch of lights!</p>
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
                    <h5 class="card-review-title"><b>Clear and bright</b></h5>
                    <p class="card-review-text">These Holiday Time 600 Count Mini Christmas lights are clear and bright. Come in 4 strands 150 light count each. Indoor or outdoor use. Lighted length of 118 ft. Total length 125 ft. Comes with extra bulbs , 2 clear , 3 red tip blinker and 2 extra fuses for each strand of lights. Maximum number of light sets that can be connected is 3 sets of 150 lights.</p>
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
                    <h5 class="card-review-title"><b>Awesome value</b></h5>
                    <p class="card-review-text">These lights are great... Non fancy plain white in bulk. These come in 3 different sections and depends on where you have to install them. I have put 1 outside 1 inside and will take out another after Thanksgiving. Looks durable as any but the packaging and attention to detail suggest better quality. Definitely recommended if trying to add many lights but still versatile.</p>
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
                    <h5 class="card-review-title"><b>Affordable price good quality</b></h5>
                    <p class="card-review-text">Very nice! 600 light covered my 7.5 ft tree</p>
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
                    <h5 class="card-review-title"><b>Don't bother….</b></h5>
                    <p class="card-review-text">Horrible.. within 24 hrs all 600 lights blew out.. returning them!</p>
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
                    <h5 class="card-review-title"><b>Cute!!</b></h5>
                    <p class="card-review-text">I was pleasantly surprised when we got the lights up and plugged in. They have PINK ones!! I am in love with these lights. They make our house look so festive.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">4/17/2019</div>
                    </div>
                    <h5 class="card-review-title"><b>Misleading description</b></h5>
                    <p class="card-review-text">I'm semi-retired and with no young people at home, am less enthusiastic about dragging out tubs of Christmas lights, sorting through them, stringing them end to end and putting them up. I thought this string of lights was 125 ft. long with 600 lights! Not so! It is four sets of 150 lights. You can only string three sets together. That leaves one set you have to plug in somewhere else. Although it is too early to put them up, I am looking forward to to decorating my house for Christmas this year. I still want to be festive but without all the hassle. Since they are clear, they may end up on my patio after Christmas.</p>
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
                    <h5 class="card-review-title"><b>Awesome!!!!</b></h5>
                    <p class="card-review-text">This is a GREAT buy!! These lights are AWESOME!! There are 600 lights, they are all white with a green cord so the cord isn't visible if you place them outside in your shrubs OR on your (green) Christmas tree. You also get replacement bulbs AND included are “blinking bulbs” for an awesome effect!! There's even replacement fuses included!! I can't wait to put them out on our shrubs in front of our home!! Super deal!!!!</p>
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
                    <h5 class="card-review-title"><b>Just what I needed</b></h5>
                    <p class="card-review-text">Best thing about this package of lights? If one bulb goes out, the rest keep shining. I got so tired of fiddling with my old lights, trying by trial and error to find which bulbs were burnt out and needed replacing. This set has solved that particular problem for me. I love that there are four separate strands included, meaning I can split them up or piggyback them, whatever my design needs call for. The bulbs are small but very bright, clear instead of frosted. I like weaving them in amongst greenery because the wires are green and fade right into the background, leaving only the little lights.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStar /> <BsStar /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">10/27/2020</div>
                    </div>
                    <h5 class="card-review-title"><b>worthless</b></h5>
                    <p class="card-review-text">dont buy. spend the extra and buy GE brand. strands went out whilt being on the tree last yesr. and this year, all the new strands i bought are all half lit or totally out, even after changing bulbs and fuses both. worthless.</p>
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
                    <h5 class="card-review-title"><b>Old school heavy duty lights</b></h5>
                    <p class="card-review-text">I ordered this box and it's HEAVY! These don't appear to be LED but more of the old school Christmas lights. We haven't actually tested them yet but it's a huge amount and look great. I'm excited to start decorating!</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStar /> <BsStar /><BsStar /><BsStar /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">10/27/2020</div>
                    </div>
                    <h5 class="card-review-title"><b>Terrible</b></h5>
                    <p class="card-review-text">Terrible, we spent an hour decorating our tree to have the lights stop working within 5 minutes. Now we have to take everything down return them and find some better lights.</p>
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
                    <h5 class="card-review-title"><b>very good</b></h5>
                    <p class="card-review-text">Living in such a small area leaves me with only one option to decorate. Now I can give a sense of holiday spirit.</p>
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
                            <div className="flex flex-row"> <BsStarFill /> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStar /></div> 
                        </div>
                        <pre>                                     </pre>
                        <div class="date">4/28/2019</div>
                    </div>
                    <h5 class="card-review-title"><b>Inexpensive basic lights</b></h5>
                    <p class="card-review-text">Super affordable, bright mini lights. Of the three boxes purchased, one had two (of four) non working strands which need to be returned.</p>
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
                    <h5 class="card-review-title"><b>We'll see...</b></h5>
                    <p class="card-review-text">I hope these things last the season. The last few sets of Holiday Time lights failed before the season was half over. Ill probably have these up by Thanksgiving.</p>
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
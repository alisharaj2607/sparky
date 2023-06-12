import React from "react";
import { TbBrandWalmart } from "react-icons/tb";
import sparky_boy from "../../assets/Sparky_glass.png";

const Hidden = ({text1, text2}) => {
    return(
        <div>
            <div>
                <div class="flex flex-row gap-1" style={{ marginLeft: '234px', marginTop: '25px', marginBottom: '-12px'}} >
                    <img src={sparky_boy} alt="" className=" h-11 w-11" />
                    <b style={{ marginTop: '21px' }}>Sparky says</b>
                </div>
                <div class="review-summary">
                    <div className="card" style={{ width: '57.2rem', height: 'auto', marginLeft: '232px', marginBottom: '32px' }}>
                        <div class="card-body" style={{ marginTop: '-22px', marginBottom: '3px' }}>
                            <div class="flex flex-row gap-1">
                                <p>Overall: </p>
                                <p  style={{ marginBottom: '5px', color: "#dcd500" }}><b>{text2}</b></p>
                            </div>
                            <h5 >{text1}</h5>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Hidden
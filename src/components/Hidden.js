import React from "react";
import { TbBrandWalmart } from "react-icons/tb";

const Hidden = ({text1, text2}) => {
    return(
        <div>
            <div class="review-summary">
                <div className="card" style={{ width: '57.2rem', height: 'auto', marginLeft: '232px', marginBottom: '32px' }}>
                    <div class="card-body" style={{ marginTop: '-22px', marginBottom: '3px' }}>
                        <p  style={{ marginBottom: '5px', color: "#51a951" }}><b>{text2}</b></p>
                        <h5 >{text1}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hidden
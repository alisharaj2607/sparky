import React from "react";

const Hidden = ({text}) => {
    return(
        <div>
            <div class="review-summary">
                <div className="card" style={{ width: '57.2rem', height: 'auto', marginLeft: '232px' }}>
                    <div class="card-body">
                        <h5 >{text}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hidden
import React, { useState } from 'react';
import Hidden from "./Hidden";

const userAction = async () => {
   let request = 'upc2';
   let response = await fetch('http://localhost:8080/data/fetch', {method: 'POST',headers:{'Content-Type': 'text/plain'},body:request})
    .then(data => data.json()).catch(error => console.log(error));
    return response;
 }

const Button = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [response, setResponse] = useState(null);
    const handleButtonClick = async () => {
        const res = await userAction();
        setResponse(res);
        setIsVisible(!isVisible);
    };

    return(
        <div>
        <div className="button2" style={{ marginLeft: '232px', marginTop: '22px' }}>
            <button onClick={handleButtonClick}><b>Review Insight!</b></button>
        </div>
        {isVisible && <Hidden text1={response.summary} text2={response.sentiment}  />}
        </div>
    );
};

export default Button
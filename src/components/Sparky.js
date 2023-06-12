import React, { useState } from 'react';
import Hidden from "./Hidden";
import sparky_boy from "../assets/Sparky_glass.png";
import Tooltip from 'react-tooltip';



const userAction = async () => {
    let request = 'upc2';
    let response = await fetch('http://localhost:8080/data/fetch', {method: 'POST',headers:{'Content-Type': 'text/plain'},body:request})
     .then(data => data.json()).catch(error => console.log(error));
     return response;
  }
 
 const Sparky = () => {
     const [isVisibleSparky, setIsVisibleSparky] = useState(true);
     const [isVisible, setIsVisible] = useState(false);
     const [response, setResponse] = useState(null);
     const handleButtonClick = async () => {
        // if(!isVisible) {
        //  const res = await userAction();
        //  setResponse(res);
        // }
        setIsVisibleSparky(!isVisibleSparky);
        setIsVisible(!isVisible);
     };
     const [isTooltipVisible, setIsTooltipVisible] = useState(false);
     const [isHovered, setIsHovered] = useState(false);

     const handleMouseEnter = () => {
        const enterDelay = 500; // Adjust the delay in milliseconds
        setTimeout(() => {
            setIsTooltipVisible(true);
        }, enterDelay);
      };
    
      const handleMouseLeave = () => {
        const leaveDelay = 500; // Adjust the delay in milliseconds
        setTimeout(() => {
            setIsTooltipVisible(false);
        }, leaveDelay);
      };
 
     return(

         <div>
            <div onClick={handleButtonClick}  style={{ marginLeft: '234px', marginTop: '25px'}} >
            {isVisibleSparky && isTooltipVisible && (
                <div class="card-sparky" style={{ marginRight: '594px', marginBottom: '15px'}}> 
                    <div className="tooltip">
                    <span className="tooltip-text" style={{ fontSize: '12px', lineHeight: '1.2'}}>"Hi! I’m Sparky, your personal shopping assistant. I’m trained to quickly summarize thousands of reviews, understand feedback sentiment and create overall product assessment so you don’t have to!"</span>
                    </div>
                </div>
      )}
                {isVisibleSparky && <div class="flex flex-row gap-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                    <img src={sparky_boy} alt="" className=" h-11 w-11" />
                    <b style={{ marginTop: '21px' , fontSize: '16px'  }} className="hover:underline">
                        <i>Feeling unsure? Ask Sparky for a review summary!</i>
                    </b>
                </div>}
            </div>
            {isVisible && <Hidden text1={"Customers are overall pleased with the soft serve ice cream maker, enjoying various flavors in just 20-25 minutes. Dispensing can be difficult, and mixing in toppings is noisy but effective. Some reviews mentioned difficulty with freezing and needing to follow the recipe exactly, while others used commercial mix-ins with success. Some reviewers wished for more metal parts instead of plastic. Despite some criticisms, customers are happy with their purchase and appreciate the convenience of making ice cream at home."} text2={"Mostly Positive"}  />}
         </div>
     );
 };
 
 export default Sparky
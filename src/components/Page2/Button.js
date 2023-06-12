import React, { useState } from 'react';
import Hidden from "./../Hidden";

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
        // if(!isVisible) {
        //  const res = await userAction();
        //  setResponse(res);
        // }
        setIsVisible(!isVisible);
     };
 
     return(
         <div>
         <div className="button2" style={{ marginLeft: '232px', marginTop: '22px' }}>
             <button onClick={handleButtonClick}><b>Review Insight!</b></button>
         </div>
         {isVisible && <Hidden text1={"Customers are overall pleased with the soft serve ice cream maker, enjoying various flavors in just 20-25 minutes. Dispensing can be difficult, and mixing in toppings is noisy but effective. Some reviews mentioned difficulty with freezing and needing to follow the recipe exactly, while others used commercial mix-ins with success. Some reviewers wished for more metal parts instead of plastic. Despite some criticisms, customers are happy with their purchase and appreciate the convenience of making ice cream at home."} text2={"Mostly Positive"}  />}
         </div>
     );
 };
 
 export default Button
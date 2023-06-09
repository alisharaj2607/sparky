import React, { useState } from 'react';
import Hidden from "./../Hidden";

// const userAction = () => {
//     let request = '2746474041';
//     fetch('http://localhost:8080/data/fetch', {method: 'POST',headers:{'Content-Type': 'text/plain'},body:'2746474041'})
//     .then(data => data.text()).then(response => alert(response)) // functionCall(response)
    
//       // Parsing the data into a JavaScript object
//       //.then(json => showSummary(JSON.stringify(json))); // Displaying the stringified data in an alert popup
// }
  


// const Button = () => {
//     return(
//         <div className="button2" style={{ marginLeft: '232px' }}>
//             <button>Fetch Review Summary</button>
//         </div>
//     );
// };

const Button = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };

    return(
        <div>
        <div className="button2" style={{ marginLeft: '232px' }}>
            <button onClick={handleButtonClick}>Fetch Review Summary</button>
        </div>
        {isVisible && <Hidden text="Hi I'm a good product" />}
        </div>
    );
};

export default Button
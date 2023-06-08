import React from "react";
const element = "./Page2/Hidden";

// const userAction = () => {
//     let request = '2746474041';
//     fetch('http://localhost:8080/data/fetch', {method: 'POST',headers:{'Content-Type': 'text/plain'},body:'2746474041'})
//     .then(data => data.text()).then(response => alert(response)) // functionCall(response)
    
//       // Parsing the data into a JavaScript object
//       //.then(json => showSummary(JSON.stringify(json))); // Displaying the stringified data in an alert popup
// }
  
// const Button = () => {
//     return(
//         <div className="button2">
//             <button onClick={userAction}>Fetch Review Summary</button>
//         </div>
//     );
// };


const Button = () => {
    return(
        <div className="button2" style={{ marginLeft: '232px' }}>
            <button>Fetch Review Summary</button>
        </div>
    );
};

export default Button
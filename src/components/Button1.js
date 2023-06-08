import React from "react";

// const userAction = () => {
//     let request = 'test';
//     fetch('http://localhost:8080/data/fetch', {method: 'GET',headers:{'Content-Type': 'text/plain'}})
//       .then(data => data.json()) // Parsing the data into a JavaScript object
//       .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup
//   }

const Button1 = () => {
    return(
        <div className="button1" style={{ marginLeft: '232px' }}>
            <button>See all reviews</button>
        </div>
    );
};

export default Button1
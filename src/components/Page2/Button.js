import React from "react";


// const userAction = () => {
//     let request = '2746474041';
//     fetch('http://localhost:8080/data/fetch', {method: 'POST',headers:{'Content-Type': 'text/plain'},body:'2746474041'})
//     .then(data => data.text()).then(response => alert(response)) // functionCall(response)
    
//       // Parsing the data into a JavaScript object
//       //.then(json => showSummary(JSON.stringify(json))); // Displaying the stringified data in an alert popup
// }


//   function renderCharacters(characters) {
//     characters.forEach(character => {
//       const div = document.createElement('div');
//       const image = document.createElement('img');
//       const name = document.createElement('h3');
//       const species = document.createElement('h3');
//       const like = document.createElement('button');
//       div.classList = 'card'
//       image.classList = 'card-img'
//       like.classList = 'empty'
//       image.src = character.image
//       name.innerText = `Name: ${character.name}`
//       species.innerText =`Species: ${character.species}`
//       like.textContent = 'like'
//       div.appendChild(image)
//       div.appendChild(name)
//       div.appendChild(species)
//       div.appendChild(like)
//       cardsContainer.appendChild(div)
//     });
//   };
  
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
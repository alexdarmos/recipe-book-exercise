const makeRecipe = () => {
    //select input from textbox for name, ingredient and instruction
    let getName = document.getElementById(`name`).value;
    let getIngredients = document.getElementById(`ingredients`).value;
    let getInstructions = document.getElementById(`instructions`).value;
    
    //create elements to be inserted into dom
    let createDiv = document.createElement(`DIV`);
    let createH2 = document.createElement(`H2`);
    let createP1 = document.createElement(`P`);
    let createP2 = document.createElement(`P`);

    document.getElementById(`container`).appendChild(createH2);

    //creates text nodes from user input
    let nameNode = document.createTextNode(`${getName}`);
    let ingredientNode = document.createTextNode(`${getIngredients}`);
    let instructionNode = document.createTextNode(`${getInstructions}`);

    //appends the text node to the H2 and P elements created
    createH2.appendChild(nameNode);
    createP1.appendChild(ingredientNode);
    createP2.appendChild(instructionNode);

    

    //    
    // createH2.append(name);
    // createP1.append(ingredients);
    // createP2.append(instructions);


    //appends the variables containing the elements and textnodes to the Div element we created
    createDiv.appendChild(createH2);
    createDiv.appendChild(createP1);
    createDiv.appendChild(createP2);

    let getContainer = document.getElementById(`container`);
    createDiv.className += "recipe";
    getContainer.appendChild(createDiv);

    //appends the div element to our container id to display in DOM
    // getContainer.appendChild(createH2);
    // document.getElementById(`container`).appendChild(createP1);
    // document.getElementById(`container`).appendChild(createP2);

  
    
}
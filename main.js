const makeRecipe = () => {
    //select input from textbox for name, ingredient and instruction
    let getName = document.getElementById(`name`).value;
    let getIngredients = document.getElementById(`ingredients`).value;
    let getInstructions = document.getElementById(`instructions`).value;
    
    //create elements to be inserted into dom
    let createDiv = document.createElement(`DIV`);
    let createH2 = document.createElement(`H2`);
    let createP = document.createElement(`P`);

    //creates text nodes from user input
    let nameNode = document.createTextNode(`${getName} `);
    let ingredientNode = document.createTextNode(getIngredients);
    let instructionNode = document.createTextNode(getInstructions);

    //appends the text node to the H2 and P elements we created
    let name = createH2.appendChild(nameNode);
    let ingredients = createP.appendChild(ingredientNode);
    let instructions = createP.appendChild(instructionNode);

    //appends the variables containing the elements and textnodes to the Div element we created
    createDiv.append(name);
    createDiv.append(ingredients);
    createDiv.append(instructions);

    //appends the div element to our container id to display in DOM
    document.getElementById(`container`).append(createDiv);

  
    
}
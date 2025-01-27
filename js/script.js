`use strict`

//funktionen generateRandomNumber
function generateRandomNumber() {

    // Generér et tilfældigt tal mellem 1 og 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    
    // Log tallet til konsollen
    console.log("Generated random number:", randomNumber);
    
    //Opdater teksten i <p>-elementet med det genererede tal
    document.getElementById("random-number").textContent = `Random Number: ${randomNumber}`;
    
    // Vis tallet i en pop-up
    alert(`Your random number is: ${randomNumber}`);
    }
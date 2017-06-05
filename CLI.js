var basicCard = require("./BasicCard.js");
var clozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");

var command = process.argv[2];


inquirer.prompt([
    {
        name: "Question",
        message: "Basic or Cloze?"
    }]).then(function (answers) {

    var userChoice = answers.Question;

    if (userChoice === "Basic") {
        console.log("Let make a basic card!!")
        console.log("+++++++++++++++++++++++")

        basicCard.makeBasicCard();


    }

    else if (userChoice === "Cloze") {
        console.log("Let make a cloze card!!")
        console.log("+++++++++++++++++++++++")

        clozeCard.makeClozeCard();
    }

    return
});


// if (command === "basic-card"){
//         console.log("helllloo2")
//         new makeBasicCard();

// }

// else if (command === "cloze-card"){
//         // makeClozeCard();
// }


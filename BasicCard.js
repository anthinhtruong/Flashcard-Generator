var fs = require("fs");
var inquirer = require('inquirer');

// var makeFront = process.argv[3];


var BasicCard = function (front, back) {
    this.front = front;
    this.back = back;

};

// Write answer to file
BasicCard.prototype.writeToFile = function () {
    fs.appendFile("basiclog.txt", "\n==================" + "\nCard Front: " + this.front + "\nCard Back: " + this.back, function (error, data) {
        if (!error) {
            // console.log("Logged");
            console.log("==================" + "\nCongrats, You made a new card!!");
            return;
        }
        
        console.log(error);
        return;
    });

};

BasicCard.makeBasicCard = function () {
    // Ask the questions
    console.log("eyyy");
    inquirer.prompt([
        {
            type: "input",
            name: "frontquestion",
            message: "What is the question for front side?",

        },
        {
            type: "input",
            name: "backanswer",
            message: "What is the Answer?"

            // Use the answers
        }]).then(function (answers) {
        var front = answers.frontquestion;
        var back = answers.backanswer;

        var newCard = new BasicCard(front, back);

        newCard.writeToFile();
    });

};

module.exports = BasicCard;
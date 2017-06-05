var inquirer = require('inquirer');
var fs = require("fs");



var ClozeCard = function (fulltext, partial, cloze) {
    this.fulltext = fulltext;
    this.partial = partial;
    this.cloze = cloze;
};

ClozeCard.prototype.writeToFile = function () {

        fs.appendFile("clozelog.txt", "\nPartial Text: " + this.partial + "\nCloze Text: " + this.cloze + "\nFull Text: " + this.fulltext + "\n================", function (error, data) {

            if (!error) {
                console.log("Logged");
                console.log("==================" + "\nCongrats, You made a new card!!");
                return;
            }
            console.log(error);
            return;
        });


    };

ClozeCard.makeClozeCard = function () {

inquirer.prompt([
    {
        type: "input",
        name: "fulltext",
        message: "What is the Full Text?"
    },
    {
        type: "input",
        name: "partialtext",
        message: "What is the Partial Text?"
    },
    {
        type: "input",
        name: "clozetext",
        message: "What is the Cloze Text?"
    }
]).then(function (answer) {

    var clozeFullText = answer.fulltext;
    var clozePartialText = answer.partialtext;
    var clozeText = answer.clozetext;

    var newClozeCard = new ClozeCard(clozeFullText, clozePartialText, clozeText);

    newClozeCard.writeToFile();
    
   

});

};

module.exports = ClozeCard;


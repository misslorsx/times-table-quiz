var Game = function() {
    var self = this;

    this.interval = null;
    this.score = null;
    this.name = null;
    this.possibleOptions = null;
    this.level = null;
    this.currentQuestion = null;
    this.currentAnswer = null;
    this.answerDeadline = null;
    this.answerTime = null;

    this.start = function() {
        self.score = 0;
        self.possibleOptions = [];
        self.currentAnswer = null;
        self.level = 0;
        self.nextLevel();
        self.interval = setInterval(self.tick, 100);
    };

    this.submitAnswer = function(answer) {
        // check if answer is correct

        // if so go to next level

        // if not end game
    };

    this.generateQuestion = function() {
        // make a question

        // store the correct answer
    }

    this.nextLevel = function() {


        // increase current level
        self.level++;
        if (self.level < 10) {
            let optionCount = self.possibleOptions.length;
            let nextOption = optionCount + 2;
            self.possibleOptions.push(nextOption);

        }

        // generate a new question
        let partA = Math.floor((Math.random() * 10) + 1);
        let optionCount = self.possibleOptions.length;
        let randomIndex = (Math.floor(Math.random() * optionCount) + 1) - 1;
        let partB = self.possibleOptions[randomIndex];

        self.currentQuestion = partA + ' X ' + partB;
        self.currentAnswer = partA * partB;

        // set the answer deadline
    }

    this.endGame = function(answer) {
        clearInterval(self.interval);

    };

    this.tick = function() {
        console.log("tick");

    };

    this.getCurrentQuestion = function() {
        return self.currentQuestion;
    }
}
let toPlay = confirm('Do you want to play a game');
if (toPlay === true){
   do { 
        let maxNumber = 9;
        let prize = 100;
        let totalPrize = 0;
        let circle = 1;
        let maxАttempts = 3;
        let numberStep = 4;
        let prizeDecrease = 2;
        let basePrize = 100;
        let secondAttempt = 2;
        toPlay = false;
        let toContinue;
        do {
        toContinue = false;
        let randomNumber = Math.floor(Math.random() * Math.floor(maxNumber));
        console.log(randomNumber)
        let i = 0;
        while (i<maxАttempts){
            let userNumber = parseInt(prompt('Choose a roulette pocket number from 0 to '+(maxNumber-1)+
                                                '\nAttempts left: '+(maxАttempts-i)+
                                                '\nTotal prize: '+totalPrize+
                                                '\nPosiible prize on current attempt: '+prize+''));
            console.log(typeof userNumber)
            if (userNumber === randomNumber) {
                switch (i) {
                    case 0:
                        totalPrize += prize;
                        break;
                    case 1:
                        totalPrize += prize;
                        break;
                    case secondAttempt:
                        totalPrize += prize;
                        break;
                    default : 
                        totalPrize;
                        break;
                }
                toContinue = confirm('Congratulation, you won!Your prize is:'
                                            +totalPrize+'$. Do you want to continue?');
                break;
            }
            i++;
            prize /= prizeDecrease;
        }
        circle += 1;
        maxNumber += numberStep;
        prize = basePrize * circle;
        } while (toContinue === true)
    alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
    toPlay = confirm('Do you want to play again?');
    } while (toPlay === true)
} else {
    alert('You did not become a billionaire, but can.');
    }   
// console.log('Hello');

let humanscore = 0;
let computerscore = 0;

function getComputerChoice () {
    let random = Math.floor(Math.random() * 3) + 1;
    // console.log(random);
    if(random ===1 ) {
        console.log('rock')
        return 'rock'
    }else if (random === 2) {
        console.log('paper')
        return 'paper'
    }else if (random === 3) {
        console.log('scissor')
        return 'scissor'
    }
}

function gethumanchoice () {
    let val = prompt('Pick rock paper or scissor: ');
    // console.log(val);
    return val;
}

function playround (humanchoice,computerchoice) {
    let loweredhumanchoice = humanchoice.toLowerCase();
    if(computerchoice === 'rock' ) {
        if(loweredhumanchoice === 'rock') {
            console.log("You: " + loweredhumanchoice + " vs " + "Computer : " + computerchoice )
            console.log('It is a tie!')
        }else if (loweredhumanchoice === 'paper') {
            console.log("You: " + loweredhumanchoice + " vs " + "Computer : " + computerchoice )
            console.log("Paper beat Rock You Win!")
            humanscore ++;
        }else if (loweredhumanchoice === 'scissor') {
            console.log("You: " + loweredhumanchoice + " vs " + "Computer : " + computerchoice )
            console.log('Rock beat Scissor : Computer Wins!')
            computerscore ++;
        }
        }else if (computerchoice === 'paper') {
            if(loweredhumanchoice === 'paper') {
                console.log("You: " + loweredhumanchoice + " vs " + "Computer : " + computerchoice )
                console.log('It is a tie!')
            }else if (loweredhumanchoice === 'scissor') {
                console.log("You: " + loweredhumanchoice + " vs " + "Computer : " + computerchoice )
                console.log('Scissor beat Paper : You Wins!')
                humanscore ++;
            }else if (loweredhumanchoice === 'rock') {
                console.log("You: " + loweredhumanchoice + " vs " + "Computer : " + computerchoice )
                console.log('Paper beat Rock Computer Wins!')
                computerscore ++;
            }
        } else if (computerchoice === 'scissor') {
            if(loweredhumanchoice === 'scissor') {
                console.log("You: " + loweredhumanchoice + " vs " + "Computer : " + computerchoice )
                console.log('It is a tie')
            }else if (loweredhumanchoice === 'rock'){
                console.log("You: " + loweredhumanchoice + " vs " + "Computer : " + computerchoice )
                console.log('Rock beat Scissor You Wins!')
                humanscore ++;
            }else if (loweredhumanchoice === 'paper') {
                console.log("You: " + loweredhumanchoice + " vs " + "Computer : " + computerchoice )
                console.log('Computer Wins!')
                computerscore ++;
            }
        }
}

// gethumanchoice()
// getComputerChoice();
playround(gethumanchoice(),getComputerChoice())
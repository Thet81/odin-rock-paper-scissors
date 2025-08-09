// console.log('Hello');

let humanscore = 0;
let computerscore = 0;
let round = 0;

const rockbtn = document.querySelector('.rock');
const paperbtn = document.querySelector('.paper');
const scissorbtn = document.querySelector('.scissor');
const resultcontainer = document.querySelector('.result-container');
const div = document.createElement('div');

rockbtn.addEventListener('click',function() {
    playround('rock',getComputerChoice());
    round ++
    console.log(humanscore,computerscore)
});

paperbtn.addEventListener('click',function() {
    playround('paper',getComputerChoice());
    round ++
});

scissorbtn.addEventListener('click',function(){
    playround('scissor',getComputerChoice());
    round++
});

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


function displayChoices  (humanchoice,computerchoice) {
     
    let html = `
        You picked ${humanchoice} VS Computer picked ${computerchoice}
    `
   
    let para = document.createElement('p');
    para.innerHTML = html;
    div.appendChild(para);
    resultcontainer.appendChild(div);
   
}


function displayresult () {
    let div = document.createElement('div');
    if(round ===5){
        let html = `Your score is ${humanscore} and computer score is ${computerscore}
         `;
        const para = document.createElement('p');
        para.innerHTML = html;
        div.appendChild(para)
        round = 0;
    }

}

// function announcewinner (valone,valtwo,winner) {
//     const div = document.createElement('div');
//     let html = '';

    
//     if(winner ===0) {
//         html = `It is a tie`
//         div.innerHTML = html;
//         return;
//     }else {
//         html = `${valone} beats ${valtwo} : ${winner} Wins.`
//         div.innerHTML = html;
//         resultcontainer.appendChild(div);
//         return;
//     }
    
// }


// function gethumanchoice () {
//     let val = prompt('Pick rock paper or scissor: ');
//     // console.log(val);
//     return val;
// }

function playround (humanchoice,computerchoice) {
    let loweredhumanchoice = humanchoice.toLowerCase();
    displayChoices(humanchoice,computerchoice);
    if(computerchoice === 'rock' ) {
        if(loweredhumanchoice === 'rock') {
            announcewinner(humanchoice,computerchoice,0)
        }else if (loweredhumanchoice === 'paper') {
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
        displayresult();
}


// gethumanchoice()
// getComputerChoice();
// playround(gethumanchoice(),getComputerChoice())
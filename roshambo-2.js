//Define a hands array with the values 'rock', 'paper', and 'scissors';
const hands = ['rock' , 'paper', 'scissors'];
//Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3
function getHand(){
    return hands[parseInt(Math.random()* 10) % 3];
};
//Define two objects for two players. Each player has name and getHand() properties.
const player1 = {name: 'Player1', getHand: getHand};
const player2 = {name: 'Player2', getHand: getHand};
const player3 = {name: 'Player3', getHand: getHand};
const player4 = {name: 'Player4', getHand: getHand};
let playUntil = 3
let player1Score = 0
let player2Score = 0
let player3Score = 0
let player4Score = 0

//Define a function called playRound() that
//Takes two player objects as arguments
//Gets hands from each
function playRound(player1, player2) {
    const player1Hand = player1.getHand();
    const player2Hand = player2.getHand();
    let winner = null;
    console.log(player1.name + ' plays ' + player1Hand);
    console.log(player2.name + ' plays ' + player2Hand);
    if (player1Hand === player2Hand) {
        console.log(' It\'s a tie! ');
        return winner;
    }   
    else if (player1Hand === 'rock' && player2Hand ==='scissors') {
        winner = player1.name;
        player1Score++;
        console.log(winner + ' is the winner!');
        return winner;
        }
        else if (player1Hand === 'scissors' && player2Hand === 'rock') {
            winner = player2.name;
            player2Score++;
            console.log(winner + ' is the winner!');
            return winner;
        }
    else if (player1Hand === 'scissors' && player2Hand ==='paper') {
        winner = player1.name;
        player1Score++;
        console.log(winner + ' is the winner!');
        return winner;
        }
        else if (player1Hand === 'paper' && player2Hand === 'scissors') {
            winner = player2.name;
            player2Score++;
            console.log(winner + ' is the winner!');
            return winner;
            }
    else if (player1Hand === 'paper' && player2Hand ==='rock') {
        winner = player1.name;
        player1Score++;
        console.log(winner + ' is the winner!');
        return winner;
        }
        else if (player1Hand === 'rock' && player2Hand === 'paper') {
            winner = player2.name;
            player2Score++;
            console.log(winner + ' is the winner!');
            return winner;
            }
    }
    ;

    playRound(player1, player2,);


    function playGame(player1, player2, playUntil) {
        while (player1Score < playUntil && player2Score < playUntil) { 
            playRound(player1, player2)
            console.log("Player1 Score " + player1Score + " Player2 Score "  + player2Score);
        }
        if (player1Score > playUntil) { 
            console.log(player1.name + " wins!");
            return player1;
        }
        else {
            console.log(player2.name + " wins!");
            return player2;
        }
    };
    
    playGame(player1, player2, playUntil);
    console.log(); 

    function playTournament(player1, player2, player3, player4, playUntil) {
        playGame(player1, player2, playUntil);
        playGame(player3, player4, playUntil);
        if (player1Score > player2Score && player3Score > player4Score) {
            playGame(player1, player3, playUntil);
            if (player1Score > player3Score) {
                console.log(player1.name + " wins!");
            }
                else { console.log(player3.name + " wins!"); }
        }
        if (player1Score > player2Score && player3Score < player4Score) {
            playGame(player1, player4, playUntil);
            if (player1Score > player4Score) {
                console.log(player1.name + " wins!");
            }
                else { console.log(player4.name + " wins!"); }
        }
        if (player1Score < player2Score && player3Score > player4Score) {
            playGame(player2, player3, playUntil);
            if (player2Score > player3Score) {
                console.log(player2.name + " wins!");
            }
                else { console.log(player3.name + " wins!"); }
        }
        if (player1Score < player2Score && player3Score < player4Score) {
            playGame(player2, player4, playUntil);
            if (player2Score > player4Score) {
                console.log(player2.name + " wins!");
            }
                else { console.log(player4.name + " wins!"); }
        }
    
    }
    
    playTournament(player1, player2, player3, player4, playUntil);
    console.log();
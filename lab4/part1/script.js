'use strict';

/**
 * Returns a string of the count and Bet or Hold
 * @param {array} cards - an array of cards
 * @returns {string} - message 
 */
function countCards(cards) {
    let count = 0;
    for (let i = 0; i < cards.length; i++) {
        if (cards[i] == 10 || cards[i] == 'J' || cards[i] == 'K' || cards[i] == 'Q' || cards[i] == 'A') {
            count = count - 1;
        }
        else if (cards[i] == 2 || cards[i] == 3 || cards[i] == 4 || cards[i] == 5 || cards[i] == 6){
            count = count + 1;
        }
        else {
            count = count;
        }
    }
    if (count > 0) {
        console.log(`${count} Bet`)
    }
    else {
        console.log(`${count} Hold`)
    }     
}
//uncomment following test code after implementing the function
// console.log(countCards([2, 3, 7, 'K', 'A']));
// console.log(countCards([2, 3, 4, 5, 6]));
// console.log(countCards([7, 8, 9]));
// console.log(countCards([10, 'J', 'Q', 'K', 'A']));
// console.log(countCards([3, 7, 'Q', 8, 'A']));
// console.log(countCards([2, 2, 10]));
// console.log(countCards([2, 9, 'J', 2, 7]));
// console.log(countCards([3, 2, 'A', 10, 'K']));
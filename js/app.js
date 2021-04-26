'use strict';

alert('Hello there, This is About Me guessing game!');
alert('I\'m going to ask you five questions about myself and you will try to guess');

let acceptance = prompt('So, are you ready?').toLowerCase();
console.log('acceptance: ' + acceptance);

if (acceptance == 'yes') {
    alert('Ok then, let\'s start...')
    let foodType = prompt('What do you think is my favoraite type of food?').toLowerCase();
    console.log('Food Type: ' + foodType);

    let favHobby = prompt('Can you guess my favoraite hobby?').toLowerCase();
    console.log('Favoraite Hobby: ' + favHobby);

    let city = prompt('which city in jordan do you think I\'m from?').toLowerCase();
    console.log('City: ' + city);

    let carType = prompt('What car type do you think I prefer?').toLowerCase();
    console.log('Car Type: ' + carType);

    let footClub = prompt('can you guess the football club I Love most?').toLowerCase();
    console.log('Football Club: ' + footClub);

    let choice = prompt('Ok we are done, do you wish to show your result?').toLowerCase();
    console.log('Result Choice: ' + choice);

    if (choice == 'yes') {
        let score = 0;
        if (foodType == 'shawerma') { score++ };
        if (favHobby == 'swimming') { score++ };
        if (city == 'irbid') { score++ };
        if (carType == 'bmw') { score++ };
        if (footClub == 'barcalona') { score++ };
        console.log('The Score: ' + score);

        if (score => 4) {
            alert('Well Done, your score is: ' + score);
        } else if (score == 3) {
            alert('Nice Try, your score is: ' + score);
        } else {
            alert('better luck next time, your score is: ' + score);
        }
    } else {
        alert('Ok, thank you for your participation :)');
    }

} else if (acceptance == 'no') {
    alert('Ok, nice to meet you anyway :)');
} else {
    alert("please start again and inter 'yes' or 'no' as an answer!");
}
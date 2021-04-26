'use strict';

alert('Hello there, This is About Me guessing game!');
alert('I\'m going to ask you five questions about myself and you will try to guess');

let username = prompt('Please inter your name now');
console.log('User Name: '+username);

let acceptance = prompt('So, are you ready '+username+'? (yes,no)').toLowerCase();
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

    let choice = prompt('Ok '+username+' we are done, do you wish to show your result? (yes,no)').toLowerCase();
    console.log('Result Choice: ' + choice);

    if (choice == 'yes') {
        let score = 0;
        if (foodType == 'shawerma') { score++ };
        if (favHobby == 'swimming') { score++ };
        if (city == 'irbid') { score++ };
        if (carType == 'bmw') { score++ };
        if (footClub == 'barcalona') { score++ };
        console.log('The Score: ' + score);

        if (score >= 4) {
            alert('Well Done '+username+', your score is: ' + score);
        } else if (score == 3) {
            alert('Nice Try '+username+', your score is: ' + score);
        } else {
            alert('better luck next time '+username+', your score is: ' + score);
        }
    } else {
        alert('Ok '+username+', thank you for your participation :)');
    }

} else if (acceptance == 'no') {
    alert('Ok '+username+', nice to meet you anyway :)');
} else {
    alert('please '+username+', start again and inter \'yes\' or \'no\' as an answer!');
}
'use strict';

alert('Hello there, This is About Me guessing game!');
alert('I\'m going to ask you five questions about myself and you will try to guess');

let acceptence = prompt('So, are you ready?');

switch (acceptence.toLowerCase) {
    case yes:
        let foodType = prompt('What do you think is my favoraite type of food?');
        console.log('Food Type: '+ foodType);
        
        break;
    case no:
        alert('Ok, nice to meet you anyway :)');
        break;
    default:
        alert("please start again and inter 'yes' or 'no' as an answer!");
        break;
}


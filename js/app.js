'use strict';

alert('Hello there, This is About Me guessing game!');
alert('I\'m going to ask you five questions about myself and you will try to guess');

let acceptance = prompt('So, are you ready?').toLowerCase();
console.log(acceptance);

if(acceptance == 'yes') {
        alert('Ok then, let\'s start...')
        let foodType = prompt('What do you think is my favoraite type of food?');
        console.log('Food Type: '+ foodType);

        let favHobby = prompt('Can you guess my favoraite hobby?');
        console.log('Favoraite Hobby: '+ favHobby);

        let city = prompt('which city in jordan do you think I\'m from?');
        console.log('City: '+city);

        let carType = prompt('What car type do you think I prefer?')
        console.log('Car Type: '+carType);


}else if (acceptance == 'no'){
    alert('Ok, nice to meet you anyway :)');
}else {
    alert("please start again and inter 'yes' or 'no' as an answer!");
}
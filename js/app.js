"use strict";

// Declaring Variables....................
let numberOFquestions = 7;
let flag1 = false;
let myFAVnumber = 20;
let flag2 = false;
let favAnimals = ["cat", "snake", "horse", "sheep", "chicken"];
let score = 0;

// START...
alert("Hello there, This is About Me guessing game!");
alert(
  "I'm going to ask you " +
    numberOFquestions +
    " questions about myself and you will try to guess"
);
let username = prompt("Please inter your name now");
console.log("User Name: " + username);

let acceptance = prompt(
  "So, are you ready " + username + "? (yes,no)"
).toLowerCase();
console.log("acceptance: " + acceptance);

// The main IF statment checking user's acceptance to the game...
if (acceptance == "yes") {
  alert("Ok then, let's start...");
  function guss_Food() {
    let foodType = prompt(
      "What do you think is my favoraite type of food?"
    ).toLowerCase();
    console.log("Food Type: " + foodType);
  }
  guss_Food();

  function guss_hobby() {
    let favHobby = prompt("Can you guess my favoraite hobby?").toLowerCase();
    console.log("Favoraite Hobby: " + favHobby);
  }
  guss_hobby();

  function gussCity() {
    let city = prompt(
      "which city in jordan do you think I'm from?"
    ).toLowerCase();
    console.log("City: " + city);
  }
  gussCity();

  function gussCar() {
    let carType = prompt("What car type do you think I prefer?").toLowerCase();
    console.log("Car Type: " + carType);
  }
  gussCar();

  function gussClub() {
    let footClub = prompt(
      "can you guess the football club I Love most?"
    ).toLowerCase();
    console.log("Football Club: " + footClub);
  }

  // The sixth question: guessing a number with four attempts...
  function gussFavNum() {
    alert(
      "Now for this part " +
        username +
        ", I will give you 4 attempts to guess my favorite number!"
    );
    console.log("FAvorite number: " + myFAVnumber);
    for (let i = 1; i < 5; i++) {
      let guessedNum = Number(
        prompt(
          "Here is your attempt number " + i + ", What is my favorite NUMBER?"
        )
      );
      if (guessedNum == myFAVnumber) {
        alert("Well done, you got it right it is " + myFAVnumber);
        console.log("Guessed Number: " + guessedNum);
        flag1 = true;
        break;
      } else if (i == 4 && flag1 == false) {
        break;
      } else if (guessedNum >= 25) {
        alert("Oh, too high number, try again");
      } else if (guessedNum <= 15) {
        alert("Oh, too low number, try agian");
      } else if (15 < guessedNum < 25) {
        alert("Ok, we are getting closer try again");
      }
    }
    if (flag1 == false) {
      alert(
        "Nice Try, The number was: " + myFAVnumber + ". Better Luck Next Time"
      );
    }
  }
  gussFavNum();

  // The senenth question: Asking with multiple possible answers...
  function gussAnamil() {
    alert(
      "It is gitting more exciting now " +
        username +
        ", For this question you have six attempts to guss one of my favorite Animal List"
    );
    for (let i = 1; i < 7; i++) {
      let animalGuess = prompt(
        "Here is your attempt number " + i + ", Guess one animal!"
      ).toLowerCase();
      console.log("Animal Guessing " + i + ": " + animalGuess);
      for (let j = 0; j < favAnimals.length; j++) {
        if (animalGuess === favAnimals[j]) {
          alert(
            "Well Done " +
              username +
              ", that's right " +
              animalGuess +
              " is in my list"
          );
          flag2 = true;
          break;
        }
        if (flag2 == true) {
          break;
        }
      }
      if ((i == 6 && flag2 == false) || flag2 == true) {
        break;
      } else if (flag2 == false) {
        alert("No that's incorrect, try again");
      }
    }
    if (flag2 == false) {
      alert("So sorry " + username + ", you got none right :(");
    }
    alert(
      "my list of favorite animals are: " +
        favAnimals[0] +
        ", " +
        favAnimals[1] +
        ", " +
        favAnimals[2] +
        ", " +
        favAnimals[3] +
        " and " +
        favAnimals[4]
    );

    for (let i = 0; i < favAnimals.length; i++) {
      console.log("Animal number " + i + 1 + " is " + favAnimals[i]);
    }
  }
  gussAnamil();

  // prompting and calculating the score to the user...
  let choice = prompt(
    "Ok " + username + " we are done, do you wish to show your result? (yes,no)"
  ).toLowerCase();
  console.log("Result Choice: " + choice);

  if (choice == "yes") {
    if (foodType == "shawerma") {
      score++;
    }
    if (favHobby == "swimming") {
      score++;
    }
    if (city == "irbid") {
      score++;
    }
    if (carType == "bmw") {
      score++;
    }
    if (footClub == "barcalona") {
      score++;
    }
    if (flag1 == true) {
      score++;
    }
    if (flag2 == true) {
      score++;
    }

    if (score >= 6) {
      alert(
        "Well Done " +
          username +
          ", your score is: " +
          score +
          " out of " +
          numberOFquestions
      );
    } else if (score == 5) {
      alert("Nice Try " + username + ", your score is: " + score);
    } else {
      alert("better luck next time " + username + ", your score is: " + score);
    }
  } else {
    alert("Ok " + username + ", thank you for your participation :)");
  }
  console.log("The Score: " + score);

  // continuing the main IF statement (accept the game or not?)............
} else if (acceptance == "no") {
  alert("Ok " + username + ", nice to meet you anyway :)");
} else {
  alert(
    "please " + username + ", start again and inter 'yes' or 'no' as an answer!"
  );
}

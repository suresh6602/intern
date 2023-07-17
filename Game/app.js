// Generate a random secret code

var randomCode = generateRandomNumber();
var attempt=0;

function generateRandomNumber() {
  var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var code = "";
  for (var i = 0; i < 4; i++) {
    var randomIndex = Math.floor(Math.random() * digits.length);
    var digit = digits[randomIndex];
    code += digit;
    digits.splice(randomIndex, 1);
  } 
  return code;
}
console.log(randomCode)

var check = document.getElementById('try')

function checkGuess() {
  var guessInput = document.getElementById('guess');
  var guess = guessInput.value;
  guessInput.value = '';  //clear the input field

  if (guess.length !== 4 || !/^\d+$/.test(guess)) {
    alert('Please enter a 4-digit number.');
    return;
  }

  var bulls = 0;
  var cows = 0;

  for (var i = 0; i < guess.length; i++) {
    if (parseInt(guess[i]) === parseInt(randomCode[i])) {
      bulls++;
    } else if (randomCode.includes(guess[i])) {
      cows++;
    }
  }

  attempt++

  var h3=document.createElement('h3')
  var resultDiv = document.getElementById('result');
 

  if (bulls === 4) {
    h3.innerHTML = 'Congratulations! You Guessed the secret number!' +randomCode+ "<br>";
    check.textContent = 'Start again';
    
  } 
  else if(bulls === 2 && cows === 2){
    h3.innerHTML ='congratulations! You guessed the secret number!'+" "+ randomCode +" "+ "in"+" "+ attempt +" "+"attempts";
    check.textContent = 'Start again';
   }
  else {
    h3.innerHTML = 'Your guess: ' + guess + ", "+'Bulls:  ' + bulls + ', Cows: ' + cows + '<br>';
    check.textContent = 'Try again.';
  }

      // resultDiv.innerHTML = resultText;
      resultDiv.appendChild(h3)
      resultDiv.appendChild(check)
}

function resetGame() {
  randomCode = generateRandomNumber();
  attempt = 0;
  document.getElementById('result').innerHTML = '';
}
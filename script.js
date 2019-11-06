// Write a function called halfNumber that will take one argument (a number),
// divide it by 2, and return the result in an alert. It should also log a string
//  to the console like "Half of 5 is 2.5.".

var halfButton = document.getElementById("half-button");
halfButton.addEventListener("click", halfNumber);

function halfNumber(){
  var halfinput = document.getElementById('half-input').value;
  var answerQuotient = halfinput / 2;

  if (halfinput){ //if something is inputted
    alert("Half of " + halfinput + " is " + answerQuotient);
  }
  else {
    alert("Invalid");
  }

}

// Write a function called fortune that will take one argument
// (your visitor's name) and prints a random "fortune cookie style"
// fortune into an element of your page.

var fortuneButton = document.getElementById("fortune-button");
fortuneButton.addEventListener("click", fortune);

function fortune(){
  var nameinput = document.getElementById("fortune-input").value;
  var fortune = ["you will find love this year.", "you will encounter a great struggle.", "be careful of those close to you.", "you earn what you work for."];
  var outcome = fortune[Math.floor(Math.random() * fortune.length)]; // fortune[index]
  var fortuneSentence = nameinput + ", " + outcome;
  document.getElementById("fortune-output").innerHTML = '<span class="fortuneSentenceStyle">' + fortuneSentence + '</span>'; //span including the class will help identify the innerHTML in CSS

}

//
// Write a function called restyle that applies new CSS styles
// to the fortune text in a random manner. Modify at least three CSS properties.


function restyle(){

  var typefaces = ["fantasy", "monospace", "cursive", "serif", "sans-serif"];
  var letterSpacing = Math.random() * 5;
  var color = ["blue", "red", "orange", "purple", "yellow", "green"];

  fortuneSentenceStyle.style.color = color[Math.floor(Math.random()*color.length)];
  fortuneSentenceStyle.style.letterSpacing = letterSpacing + "px"
  fortuneSentenceStyle.style.fontFamily = typefaces[Math.floor(Math.random()*typefaces.length)]
}

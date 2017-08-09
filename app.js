/**
 * Created by vagrant on 6/22/17.
 */
//When the user clicks, console.log should say "Hello!"
//    Binding element to submit button

var submitObject = document.getElementById("submitButton");

    submitObject.onclick = function () {
        var input = grabValue();
        var output = processValue(input);
       display(output);
};

//Now there is an input element, grab the value and console.log instead of "Hello!".
//Read user input
function grabValue () {
    var inputObject = document.getElementById("numberInput");
    return inputObject.value;
}

//Now there is a result window that should display the user input from step 1 and 2/ (instead of console.log call
// the display() function, that displays the input
//write to output 1.on page load write "hello" 2. on submit write hello 3. pass 2(user input) instead of hello

function display (html) {
    var displayObject = document.getElementById("resultOutput");
    displayObject.innerHTML = html;
}

//application should write out from 1 up to the number input.

function processValue (input) {
  var output = "";
  for (var i = 1; i <= input; i++) {
      var currentValue = i;
      if (i % 2 === 0) {
          currentValue = "foo";
      }
      if (i % 3 === 0) {
        currentValue = "bar";
      }
      if (i % 2 === 0 && i % 3 === 0) {
        currentValue = "foo bar";
      }
    output += currentValue + ", ";
  }
  return output.slice(0,-2);
}




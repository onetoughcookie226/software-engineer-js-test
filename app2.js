/**
 * Created by vagrant on 7/31/17.
 */
//When the user clicks, console.log should say "Hello!"
var submitObject = document.getElementById("submitButton");
    submitObject.onclick = function () {
    var input = grabValue();
    var output = processValue(input)
    display(output);
    }

//Now there is an input element grab the value and console.log instead of "Hello!".
function grabValue () {
    var inputObject = document.getElementById("numberInput");
    return inputObject.value;
}

//Now there is a result window that should display the user input from step 1 and 2/ (instead of console.log call
// the display() function, that displays the input

function display (x) {
        var outputObject = document.getElementById("resultOutput");
        outputObject.innerHTML = x;
}

//Create a function to process the value (increment by 1), and make sure this happens
// before the result displays to the user
function processValue (i) {
       result = parseInt(i) + 1;
       return result;

}



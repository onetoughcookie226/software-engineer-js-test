/**
 * Created by vagrant on 7/31/17.
 */
//When the user clicks, console.log should say "Hello!"

var submitObject = document.getElementById("submitButton");

    submitObject.onmouseover = function () {
        var value = grabValue ();
        display(value);
    };

//Now there is an input element grab the value and console.log instead of "Hello!".

function grabValue () {
    var inputObject = document.getElementById("numberInput");
    return inputObject.value;
}


//Now there is a result window that should display the user input from step 1 and 2/ (instead of console.log call
// the display() function, that displays the input

function display(X) {
    var displayObject= document.getElementById("resultOutput");
    displayObject.innerHTML = X;
}
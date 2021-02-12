/*
* Excercise 1
*
*/

document.getElementById("color-block").addEventListener("click", changeColor);
document.getElementById("convertbtn").addEventListener("click", convertTemp);


/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){



  
    //Write a condition determine what color it should be changed to
    if(document.getElementById("color-name").innerHTML === "#F08080"){
        document.getElementById("color-block").style.backgroundColor = "#3792cb";
        document.getElementById("color-name").innerHTML = "#3792cb";
        //change the background color using JS

        //Change the text of the color using the span id color-name

    }
    else{
        document.getElementById("color-block").style.backgroundColor = "#F08080";
        document.getElementById("color-name").innerHTML = "#F08080";
        //change the background color using JS

        //Change the text of the color using the span id color-name

    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    var temp = document.getElementById("f-input").value;


    var ctemp = (temp - 32) * 5 / 9;


    document.getElementById("c-output").innerHTML = ctemp;
    //Calculate the temperature here

    //Send the calculated temperature to HTML

}



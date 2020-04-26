/*
main.js
*/

function evenLettersUpper(input) {
outputText = "";
for (i = 0; i < input.length; i++) {
    if (i % 2 == 0) {
        outputText = outputText + input.charAt(i).toUpperCase();
    } else {
        outputText = outputText + input.charAt(i);
    }
}
return outputText;
}


function showPicture() {
    document.getElementById("spongebob").style.display="block";
}


document.getElementById('submitButton').onclick = function() {
    let newText = document.getElementById('startText').value;
    if (newText.length < 100) {
        let finalText = evenLettersUpper(newText);
        showPicture();
        document.getElementById("outputText").innerHTML = finalText;
    } else {
        alert("Maximum input lenght is 100 characters, press clear all to clear the input box.");
    }
}


document.getElementById("clearButton").onclick = function() {
    document.getElementById("spongebob").style.display="none";
    document.getElementById("outputText").innerHTML = "";
    document.getElementById("startText").value = "";
}


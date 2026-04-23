// yhc.js — US Open tennis page scripts
function check() {
    let age = document.getElementById("age").value;
    age = Number(age);
    // bad condition

    if (isNaN(age)) {
        document.getElementById("output").style.display = "block";
        document.getElementById("output").innerHTML = "Didn't you hear me!?Enter the number!";
        document.getElementById("content").style.visibility = "hidden";

    } else if (age >120) {
        document.getElementById("output").style.display = "block";
        document.getElementById("output").innerHTML = "You are too dead";
        document.getElementById("content").style.visibility = "hidden";

    } else if (age<0) {
        document.getElementById("output").style.display = "block";
        document.getElementById("output").innerHTML = "Negative Number is not allowed!";
        document.getElementById("content").style.visibility = "hidden";

    } else if (age % 1 !== 0) {
        document.getElementById("output").style.display = "block";
        document.getElementById("output").innerHTML = "decimals are not acceptable! Enter a valid age";
        document.getElementById("content").style.visibility = "hidden";
    }
    // good condition
    else if (age >= 18) {
        document.getElementById("output").style.display = "none";
        document.getElementById("content").style.visibility = "visible";
    } else {
        document.getElementById("output").style.display = "block";
        document.getElementById("output").innerHTML = "you are not invited";
        document.getElementById("content").style.visibility = "hidden";
    }

}

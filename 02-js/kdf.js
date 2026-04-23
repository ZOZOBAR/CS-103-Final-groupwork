
    function calculate(){

    let k = document.getElementById("kills").value;
    k = Number(k);

    let d = document.getElementById("deaths").value;
    d = Number(d);

    let a = document.getElementById("assists").value;
    a = Number(a);

    let result;

    if(d == 0){
    result = k + a;
} else {
    result = (k + a) / d;
}

    document.getElementById("result").innerHTML = "Your K/D/A is :" +result;
}


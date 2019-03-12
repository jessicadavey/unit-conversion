

let ozToMl = function() {
    let x = (document.getElementById("oz").value);
    document.getElementById("ml").value=`${Math.floor(x * 29.5735)}`;
}

let reset = function() {
    document.getElementById("oz").value = 0;
    document.getElementById("ml").value = 0;
}
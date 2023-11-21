function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function remove(){
    let a = document.getElementById("result").value;
    let b = a.slice(0, -1);
    document.getElementById("result").value = b;
}
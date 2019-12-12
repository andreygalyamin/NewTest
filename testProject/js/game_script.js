//window.onload = function () {
var btn = document.getElementById('btnStart');
console.log('btn' + btn);
/*document.getElementById('btnStart').onclick = function () {
    training();
};*/
//};

var per;
function mathOp(x, y, op) {
    var res;
    if (op == '+') {
        res = x + y;
    } else if (op == '-') {
        res = x - y;
    } else if (op == '*') {
        res = x * y;
    } else if (op == '/') {
        if (y == 0) {
            res = false;
        } else {
            res = x / y;
        }
    }
    else {
        res = false;
    }
    return res;
}

function codeToOp(num) {
    var variants = ['+', '-', '*', '/'];
    return variants[num];
}

function randomInt(min, max) {
    var length = max - min + 1;
    var rand = Math.floor(Math.random() * length) + min;
    return rand;
}

function percent(it, itrue) {

    per = (itrue * 100) / it;
    if (per > 50) {
        document.getElementById('winner').style.display = "block";
    } else {
        document.getElementById('loser').style.display = "block";
    }
}

function training() {
    document.getElementById('winner').style.display = "none";
    document.getElementById('loser').style.display = "none";
    var code, op, x, y, res, answer, ansTrue = 0, ansFalse = 0, errors = [];
    var iter = document.getElementById('iter').value;
    console.log(iter);
if (iter == "" || iter == null){
    alert("Укажите число итераций");
} else{

  
    var list = document.createElement("LIST");
    list.setAttribute("type", "text");
    list.setAttribute("value", "Hello World!");
    document.body.appendChild(list);

    for (var i = 0; i < iter; i++) {

        x = randomInt(1, 10);

        y = randomInt(1, 10);
        code = randomInt(0, 3);
        op = codeToOp(code);
        res = mathOp(x, y, op);
        answer = +prompt(x + " " + op + " " + y + " = ?");

        if (res.toFixed(2) == answer.toFixed(2)) {
            ansTrue++;
        } else {
            errors.push(x + " " + op +" " + y + " = " + res + ", а вы ответили: " + answer);
            ansFalse++;
        }
    }
    document.getElementById("ansTrue").value = ansTrue;
    document.getElementById("ansFalse").value = ansFalse;

    console.log("OK = " + ansTrue);
    console.log("FALSE = " + ansFalse);

    for (var ii = 0; ii < errors.length; ii++) {

        console.log("ERRORS = " + errors[ii]);
    }

    var items = '<ul>';
    errors.forEach((el) => {
        items += '<li>' + el + '</li>'
    });
    items += '</ul>';
    document.getElementById("res").innerHTML = items;

    percent(iter, ansTrue);
}
}
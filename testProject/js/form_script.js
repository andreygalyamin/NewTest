/*---------ORDERS-------------*/


window.onload = function () {
    var modal = document.getElementById('myModal');
    var modalBtn = document.getElementById('btnSend');
    var span = document.getElementsByClassName("close")[0];


    modalBtn.onclick = function () {
        var check = document.getElementById('check').checked;
        if (check == false){
            alert("Вы не согласны с условиями конфиденциальности!");
        } else {
        var fname = document.getElementById('fname').value;
        var city = document.getElementById('city');
       // var cityU = city.options[city.selectedIndex].text;
        var destination = document.getElementById('destination');
        var destinationU = destination.options[destination.selectedIndex].text;
        var day = document.getElementById('day');
        var dayU = day.options[day.selectedIndex].text;
        var start = document.getElementById('start').value;
        var end = document.getElementById('end').value;
        var tel = document.getElementById('tel').value;
        var email = document.getElementById('email').value;
        var state = document.getElementsByName('state');
        var o = 'ый';
        var stateU;
        for (var i = 0, length = state.length; i < length; i++) {
            if (state[i].checked) {
                stateU = state[i].value;
           //     alert(state[i].value);
                break;
            }
        }
        if (stateU == 'female'){
            o = 'ая';
        }
        console.log(state);
        document.getElementById("o-name").value = fname;
      //  document.getElementById("o-city").value = cityU;
        document.getElementById("o-destination").value = destinationU;
        document.getElementById("o-start").value = start;
        document.getElementById("o-end").value = end;
        document.getElementById("o-tel").value = tel;
        document.getElementById("o-email").value = email;
        document.getElementById("o-head").value = o;
        document.getElementById("o-day").value = dayU;
        modal.style.display = "block";

    }};
    span.onclick = function () {
        console.log("CLOSE");
        modal.style.display = "none";
    };
};


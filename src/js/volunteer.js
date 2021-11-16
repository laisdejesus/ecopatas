var divButton = document.getElementById('div-subscribe')
var button = document.getElementById('subscribe')
button.style.backgroundColor = "#cccccc";
divButton.style.backgroundColor = "#cccccc";

function enable(){
    if(document.getElementById('terms').checked){
        document.getElementById('subscribe').removeAttribute("disabled");
        button.style.backgroundColor = "#007A68";
        divButton.style.backgroundColor = "#007A68";
    }
    else {
        document.getElementById('subscribe').setAttribute("disabled", "disabled");
        button.style.backgroundColor = "#cccccc";
        divButton.style.backgroundColor = "#cccccc";
    }
}
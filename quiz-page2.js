var player1Name= localStorage.getItem("player1");
var player2Name= localStorage.getItem("player2");
document.getElementById("player1_name").innerHTML = player1Name;
document.getElementById("player2_name").innerHTML = player2Name;

function Send(){
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    console.log(actual_answer);

    document.getElementById("Question").innerHTML = number1 + "X" + number2;
    

}

function Check(){
    
    inputdata = document.getElementById("answer").value;

if (inputdata == actual_answer) {

    document.getElementById("answer").value = "";
    document.getElementById("Question").value = "";

}

else {
    console.log("aauugh");
}

}
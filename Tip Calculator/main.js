
//click to call function
document.getElementById('calculate').onclick = function(){
    calculateTip();
}

//Hide the total tip on load
document.getElementById('totaltip').style.display = "none";

//Calculate tip
function calculateTip(){
var billAmt = document.getElementById("billamt").value;
var serviceQual = document.getElementById("service").value;
var numPeople = document.getElementById("numpeople").value;

//validate inputs
if(billAmt === " " || serviceQual == 0){
    alert("Please enter values");
    return;
}
//check if this input is empty or less than 1
if(numPeople === " " || numPeople <=1){
    numPeople = 1;
    document.getElementById('each').style.display = "none";
}else{
    document.getElementById('each').style.display = "block";
}

//calculate Tip
var total = (billAmt * serviceQual) / numPeople;
//round to two decimal point
total = Math.round(total * 100)/100;
//fix to two decimal point
total = total.toFixed(2);
//display the tip
document.getElementById('totaltip').style.display = "block";
document.getElementById('tip').innerHTML = total;
};



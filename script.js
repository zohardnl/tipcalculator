document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("calculate").onclick = function() { calculateTip(); };

function calculateTip() {

    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;

    //check if the bill or servicequality is not empty or the bill and the num of people is a number
    if(isNaN(billAmount) || isNaN(numPeople) || billAmount === "" || serviceQuality == 0) {
        alert("Please fill a real values");
        return;
    }

    //At least one person must pay the bill
    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        document.getElementById("each").style.display = "none";
    } 
    else 
    {
        document.getElementById("each").style.display = "block";
    }

    //calculate the bill
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    //when the bill is calculated this values appears
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}
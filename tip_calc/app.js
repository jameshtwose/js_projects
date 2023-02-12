// Calculate tip
function calculateTip() {
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numberOfPeople = document.getElementById("numberOfPeople").value;

  // Validate input
  if (billAmount === "" || serviceQuality == 0) {
    alert("Please enter values");
    return;
  }

  // Check to see if this input is empty or less than equal to 1
  if (numberOfPeople === "" || numberOfPeople <= 1) {
    numberOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  // Actually Calculate the tip
  var total = (billAmount * serviceQuality) / numberOfPeople;
  // round to two decimal places
  total = Math.round(total * 100) / 100;
  // set the format to always be two decimal places
  total = total.toFixed(2);
  // display the total tip in the output
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

// hide the tip amount when page is first loaded
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// create a calculate button to run the above functions
document.getElementById("calculate").onclick = function() {
  calculateTip();

};

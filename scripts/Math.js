function math()
{
var kwh = document.getElementById('kwh').value;
var panelCount = document.getElementById('panelCount').value;
var budget = document.getElementById('budget').value;
var payoff = document.getElementById('payoff').value;
var averagePan;
var kwhPerPan;
var feasibilty;
var savings;
var panelAmount;
panelAmount = panelCount * 5;
kwhPerPan = kwh * panelAmount;
savings = kwhPerPan * 0.10;

if (payoff * savings <= installation)

{
feasibility = "This will not be feasible for this amount of time.";
}

else

{
feasibility = "This will be feasible for this ammount of time.";
}

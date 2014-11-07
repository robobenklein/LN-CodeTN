function math()
{
var kwh = document.getElementById('kwh').value;
var pannelCount = document.getElementById('pannelCount').value;
var budget = document.getElementById('budget').value;
var payoff = document.getElementById('payoff').value;
var averagePan;
var kwhPerPan;
var Feasibilty;
var savings;
var pannelAmount;
pannelAmount = pannelCount * 5;
kwhPerPan = kwh * pannelAmount;
savings = kwhPerPan * 0.10;
if (payoff * savings <= instilation)
{
feasibility = "This will not be feasible for this ammount of time";
}
else
{
feasibility = "This will be feasible for this ammount of time";
}​

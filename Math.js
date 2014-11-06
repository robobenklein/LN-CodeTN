function math()
{
var kwh = index.getElementById('kwh').value;
var pannelCount = index.getElementById('pannelCount').value;
var budget = index.getElementById('budget').value;
var payoff = index.getElementById('payoff').value;
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

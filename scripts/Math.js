function math()
{
var kwh = getCookie("kwh");
var panelCount = getCookie("pasnelcount");
var budget = getCookie("budget");
var payoff = getCookie("payoff");
var install = getCookie("install");
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
}

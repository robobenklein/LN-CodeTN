
/*
calculations:
====================

energy produced in watts over a year:
        panelpower * 4.64 (average sunlight hours per year) * 365 (days in a year) = panelpowerperyear
        panelpowerperyear * 0.001 (convert to kilowatts from watts) = panelkwhperyear
        panelkwhperyear * efficiency = paneloutputfinal
        
payoff time (payofftime)
        (budget + install) / (paneloutputfinal * kwh)
        
money saved in ten years:
        (paneloutputfinal * 10 * kwh) - budget - install

money spent:
        budget + install

Good investment if:
        if payofftime < payoff
                yes
        else
                nah

panels needed:
        area of the school * 85% (the rest is for like spare space and stuff)
        / (length * height)
        output is number of panels that can be purchased
*/

var panelpower = parseFloat(getCookie("panelpower"));
var kwhcost = parseFloat(getCookie("kwh"));
var width = parseFloat(getCookie("width"));
var height = parseFloat(getCookie("height"));
var budget = parseInt(getCookie("budget"));
var install = parseInt(getCookie("install"));
var payoff = parseFloat(getCookie("payoff"));
//var efficiency = parseFloat(getCookie("efficiency"));
var school = getCookie("school");

// Calculating how many panels can fit on the roof, This is correct, do not change.
var panelsNeeded = (getRoofSize(school)) / ((width * height) * .00064516);
//should be able to write instead as ((width * height) * .00064516) - Bissell
//((width * 0.0254) * (height * 0.0254))
// CORRECT
var individualpanelwattsperyear = (365 * 5.67 * panelpower)
//var panelpowerperyear = (365 * 4.64 * panelpower);

// CORRECT
var individualpanelkwhperyear = (individualpanelwattsperyear * 0.001);

// CORRECT
var allpanelsoutputfinalperyear = (individualpanelkwhperyear * panelsNeeded);

// CORRECT
var payofftimeinyears = (budget + install) / (allpanelsoutputfinalperyear * kwhcost);

// CORRETC
var moneysaved10years = (((allpanelsoutputfinalperyear * kwhcost) - (budget + install)) * 10);

var moneyspent = budget + install;

if (payofftimeinyears <= (payoff / 12)) {
        var goodinvestment = true;
} else {
        var goodinvestment = false;
}

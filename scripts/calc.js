
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

var panelpower = getCookie("panelpower");
var kwh = parseFloat(getCookie("kwh"));
var width = parseFloat(getCookie("width"));
var height = parseFloat(getCookie("height"));
var budget = parseFloat(getCookie("budget"));
var install = parseFloat(getCookie("install"));
var payoff = parseFloat(getCookie("payoff"));
var efficiency = parseFloat(getCookie("efficiency"));
var school = getCookie("school");

var panelsNeeded = Math.trunc((getRoofSize(school) * 0.85) / ((width * height) * 0.00064516));

var panelpowerperyear = (365 * 4.64 * panelpower);

var panelkwhperyear = (panelpowerperyear * 0.001);

var paneloutputfinal = (panelkwhperyear * efficiency * panelsNeeded);

var payofftime = (budget + install) / (paneloutputfinal * kwh);

var moneysaved10years = ((paneloutputfinal * 10 * kwh) - budget - install);

var moneyspent = budget + install;

if (payofftime <= payoff) {
        var goodinvestment = true;
} else {
        var goodinvestment = false;
}

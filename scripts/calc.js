function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) {
            return c.substring(name.length, c.length);
        }
    }
}
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
var kwh = getCookie("kwh");
var width = getCookie("width");
var height = getCookie("height");
var budget = getCookie("budget");
var install = getCookie("install");
var payoff = getCookie("payoff");
var efficiency = getCookie("efficiency");
var school = getCookie("school");

function getPanelsNeeded() {
        return 
}

function getPayoffTime() {
        
}

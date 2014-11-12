var panelpower = parseFloat(getCookie("panelpower"));
var kwhcost = parseFloat(getCookie("kwh"));
var width = parseFloat(getCookie("width"));
var height = parseFloat(getCookie("height"));
var install = parseInt(getCookie("install"));
var payoff = parseFloat(getCookie("payoff"));
var school = getCookie("school");
var percentuse = parseFloat(getCookie("roofsize"));
// Now fo the actual calculations
var panelsNeeded = ((getRoofSize(school) * (percentuse / 100)) / ((width * height) * .00064516));
var individualpanelwattsperyear = (365 * 5.67 * panelpower)
var individualpanelkwhperyear = (individualpanelwattsperyear * 0.001);
var allpanelsoutputfinalperyear = (individualpanelkwhperyear * panelsNeeded);
var payofftimeinyears = (install) / (allpanelsoutputfinalperyear * kwhcost);
var moneysaved10years = ((allpanelsoutputfinalperyear * kwhcost) * 10) - (install);
var moneyspent = install;
if (payofftimeinyears <= (payoff / 12)) {
        var goodinvestment = true;
} else {
        var goodinvestment = false;
}

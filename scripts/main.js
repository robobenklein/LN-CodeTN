function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}
function getRoofSize(school) {
    if (school == "Amherst Elementary School") {
        return 6200;
    } else if (school == "Farragut High School") {
        return 10315;
    } else if (school == "Gibbs Elementary School") {
        return 10400;
    } else if (school == "Gibbs High School") {
        return 12520;
    } else if (school == "Hardin Valley Academy") {
        return 13205;
    } else if (school == "Karns Middle School") {
        return 10976;
    } else if (school == "Karns High School") {
        return 11284;
    } else if (school == "Powell High School") {
        return 8787;
    } else if (school == "West Valley Middle School") {
        return 10180;
    }
}

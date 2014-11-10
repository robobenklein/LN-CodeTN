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
        if (c.indexOf(name) != -1) {
            return c.substring(name.length, c.length);
        }
    }
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
function getSchoolURL(school) {
    if (school == "Amherst Elementary School") {
        return "http://maps.googleapis.com/maps/api/staticmap?center=5101+Schaad+Rd,+Tennessee+37931&zoom=17&scale=false&size=450x350&maptype=satellite&sensor=false&format=png&visual_refresh=true";
    } else if (school == "Farragut High School") {
        return "http://maps.googleapis.com/maps/api/staticmap?center=11237+Kingston+Pike,+Knoxville,+TN+37934&zoom=17&scale=false&size=450x350&maptype=satellite&sensor=false&format=png&visual_refresh=true";
    } else if (school == "Gibbs Elementary School") {
        return "http://maps.googleapis.com/maps/api/staticmap?center=7700+Tazewell+Pike,+TN+37721&zoom=17&scale=false&size=450x350&maptype=satellite&sensor=false&format=png&visual_refresh=true";
    } else if (school == "Gibbs High School") {
        return "http://maps.googleapis.com/maps/api/staticmap?center=7628+Tazewell+Pike,+Corryton,+TN+37721&zoom=17&scale=false&size=450x350&maptype=satellite&sensor=false&format=png&visual_refresh=true";
    } else if (school == "Hardin Valley Academy") {
        return "http://maps.googleapis.com/maps/api/staticmap?center=11345+Hardin+Valley+Road+Knoxville+,+TN+37932&zoom=17&scale=1&size=450x350&maptype=satellite&sensor=false&format=png&visual_refresh=true";
    } else if (school == "Karns Middle School") {
        return "http://maps.googleapis.com/maps/api/staticmap?center=2925+Gray+Hendrix+Rd,+Knoxville,+TN+379315&zoom=17&scale=1&size=450x350&maptype=satellite&sensor=false&format=png&visual_refresh=true";
    } else if (school == "Karns High School") {
        return "http://maps.googleapis.com/maps/api/staticmap?center=2700+Byington+Solway+Rd,+Knoxville,+TN+37931&zoom=16&scale=false&size=450x350&maptype=satellite&sensor=false&format=png&visual_refresh=true";
    } else if (school == "Powell High School") {
        return "http://maps.googleapis.com/maps/api/staticmap?center=2136+W+W+Emory+Rd,+Powell,+TN+37849&zoom=17&scale=false&size=450x350&maptype=satellite&sensor=false&format=png&visual_refresh=true";
    } else if (school == "West Valley Middle School") {
        return "http://maps.googleapis.com/maps/api/staticmap?center=9118+George+Williams+Rd,+Knoxville,+TN+37922&zoom=17&scale=false&size=450x350&maptype=satellite&sensor=false&format=png&visual_refresh=true";
    }
}
function getMonthsToPayoff() {
    
}

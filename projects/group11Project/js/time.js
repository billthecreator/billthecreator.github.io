// get the value of either the day or the hour.
// param a can be either "day" or "hour"
function today(a) {

    var date = new Date();
    var d, h, m, hm;

    if (a.toLowerCase() == "d") {
        d = date.getDay();
        return d;
    }else if (a.toLowerCase() == "h") {
        h = date.getHours();
        m = date.getMinutes();
        hm = h + (m/60);
        return Math.ceil(hm);
    }else {
        return -1;
    }
}

// check to see if the value n is between s and f
// returns 0 if no, 1 if yes
function isBetween(s, f, n) {

    if (s <= n && n <= f) {
        return 1;
    } else {
        return 0;
    }
}

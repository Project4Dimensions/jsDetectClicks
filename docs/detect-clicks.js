/* validated with JSLint edition 2018-02-27 (http://jslint.com/)
 * no errors reported (JSLint options: Assume… a browser)
 */

/* jsDetectClicks: an algorithm to determine button clicks
 * see https://github.com/Project4Dimensions/jsDetectClicks
 */

function jsDetectClicks(parent, button, msg) {
    "use strict";
    var a = document.getElementById(parent);
    var aa;
    var b = document.getElementById(button);
    var i = 2;
    var t = {};
    a.innerHTML = msg[3] + msg[4];
    b.onclick = function () {
        if (i % 2 === 0) {
            aa = msg[6];
            t.value = msg[0] + " " + msg[7];
        }
        if (i % 2 !== 0) {
            aa = msg[7];
            t.value = msg[0] + " " + msg[6];
        }
        a.innerHTML = msg[3] + i + msg[5] + aa;
        i += 1;
    };
}

function init() {
window.addEventListener("orientationchange", orientationChange, true);

}

function orientationChange(e) {
var orientation="portrait";
if(window.orientation == -90 || window.orientation == 90) orientation = "landscape";
document.getElementById("status").innerHTML+=orientation+"<br>";
}
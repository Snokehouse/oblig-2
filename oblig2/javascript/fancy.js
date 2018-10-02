window.onload = start;

function start(){
    document.getElementById("btnLeap").onclick = leap;
    var stil = document.createElement("style");
    document.head.appendChild(stil);
    StyleSheet = stil.sheet;
    StyleSheet.insertRule("body{overflow-y: hidden !important;}", 0);
}

function leap(){
    document.styleSheets[1].deleteRule(0);
}
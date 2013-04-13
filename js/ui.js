function slideS() {
    document.getElementById("sci").style.visibility = "hidden";
    document.getElementById("nor").style.visibility = "visible";
    document.getElementById("txtbx").value = document.getElementById("stxtbx").value;
    window.location.hash = "nor";
}

function slideN() {
    document.getElementById("nor").style.visibility = "hidden";
    document.getElementById("sci").style.visibility = "visible";
    document.getElementById("stxtbx").value = document.getElementById("txtbx").value;
    window.location.hash = "sci";
}

function pressed(key) {
    document.getElementById("txtbx").value = document.getElementById("txtbx").value + key;
}

function pressedS(key) {
    updateFlags(key);
    window.location.hash = 'nor';
    document.getElementById("sci").style.visibility = "hidden";
    document.getElementById("nor").style.visibility = "visible";
    document.getElementById("txtbx").value = document.getElementById("txtbx").value + key;

}



function calc() {
    var inp = processSci(document.getElementById("txtbx").value);
    document.getElementById("txtbx").value = infixEval(inp);
    flushFlags();
}

function backSpace() {
    var tmp = document.getElementById("txtbx").value;
    document.getElementById("txtbx").value = tmp.substr(0, tmp.length - 1);
}



function init() {
    document.getElementById("txtbx").disabled = true;
    document.getElementById("stxtbx").disabled = true;
    flushFlags();
    window.location.hash = 'nor';
}

function clearText() {
    document.getElementById('txtbx').value = '';
    flushFlags();
}
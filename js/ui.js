

function pressed(key) {
    document.getElementById("txtbx").value = document.getElementById("txtbx").value + key;
}

function pressedS(key) {
    updateFlags(key);
    document.getElementById("stxtbx").value = document.getElementById("stxtbx").value + key;
	document.getElementById("txtbx").value = document.getElementById("stxtbx").value
	document.getElementById("sci").style.display = "none";
	document.getElementById("nor").style.display = "inline";
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





function clearText() {
    document.getElementById("txtbx").disabled = true;
    document.getElementById("stxtbx").disabled = true;
    document.getElementById('txtbx').value = '';
	document.getElementById('stxtbx').value = '';
    flushFlags();
}
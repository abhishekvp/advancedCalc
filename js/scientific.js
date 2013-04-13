var sin, cos, tan, log, ln, fact, raise, root, pi, e;

function flushFlags() {
    sin = 0;
    cos = 0;
    tan = 0;
    log = 0;
    ln = 0;
    fact = 0;
    raise = 0;
    root = 0;
    pi = 0;
    e = 0;
}

function updateFlags(key) {
    if (key == "sin(")
        sin++;
    if (key == "cos(")
        cos++;
    if (key == "tan(")
        tan++;
    if (key == "log(")
        log++;
    if (key == "ln(")
        ln++;
    if (key == "!")
        fact++;
    if (key == "^")
        raise++;
    if (key == "root(")
        root++;
    if (key == "pi")
        pi++;
    if (key == "e")
        e++;
}

function processSin(ind, exp) {
    var st, en, nst, nen;
    st = ind;
    nst = ind + 4;
    var en = nst;
    while (exp.charAt(en) != ")") {
        en++;
        if (en > exp.length) {
            alert("Please make use of ')'");
            break;
        }
    }
    nen = en - 1;
    var num = (infixEval(exp.substring(nst, nen + 1)));
    var ans = Math.sin(num);
    return exp.replace("sin(" + exp.substring(nst, nen + 1) + ")", ans);
}

function processCos(ind, exp) {
    var st, en, nst, nen;
    st = ind;
    nst = ind + 4;
    var en = nst;
    while (exp.charAt(en) != ")") {
        en++;
        if (en > exp.length) {
            alert("Please make use of ')'");
            break;
        }
    }
    nen = en - 1;
    var num = (infixEval(exp.substring(nst, nen + 1)));
    var ans = Math.cos(num);
    return exp.replace("cos(" + exp.substring(nst, nen + 1) + ")", ans);
}

function processTan(ind, exp) {
    var st, en, nst, nen;
    st = ind;
    nst = ind + 4;
    var en = nst;
    while (exp.charAt(en) != ")") {
        en++;
        if (en > exp.length) {
            alert("Please make use of ')'");
            break;
        }
    }
    nen = en - 1;
    var num = (infixEval(exp.substring(nst, nen + 1)));
    var ans = Math.tan(num);
    return exp.replace("tan(" + exp.substring(nst, nen + 1) + ")", ans);
}

function processLn(ind, exp) {
    var st, en, nst, nen;
    st = ind;
    nst = ind + 3;
    var en = nst;
    while (exp.charAt(en) != ")") {
        en++;
        if (en > exp.length) {
            alert("Please make use of ')'");
            break;
        }
    }
    nen = en - 1;
    var num = (infixEval(exp.substring(nst, nen + 1)));
    var ans = Math.log(num);
    return exp.replace("ln(" + exp.substring(nst, nen + 1) + ")", ans);
}

function processLog(ind, exp) {
    var st, en, nst, nen;
    st = ind;
    nst = ind + 4;
    var en = nst;
    while (exp.charAt(en) != ")") {
        en++;
        if (en > exp.length) {
            alert("Please make use of ')'");
            break;
        }
    }
    nen = en - 1;
    var num = (infixEval(exp.substring(nst, nen + 1)));
    var ans = Math.log(num) / Math.log(10);
    return exp.replace("log(" + exp.substring(nst, nen + 1) + ")", ans);
}

function processRoot(ind, exp) {
    var st, en, nst, nen;
    st = ind;
    nst = ind + 5;
    var en = nst;
    while (exp.charAt(en) != ")") {
        en++;
        if (en > exp.length) {
            alert("Please make use of ')'");
            break;
        }
    }
    nen = en - 1;
    var num = (infixEval(exp.substring(nst, nen + 1)));
    var ans = Math.sqrt(num);
    return exp.replace("root(" + exp.substring(nst, nen + 1) + ")", ans);
}

function processFact(ind, exp) {
    var st, en;
    en = ind - 1;
    st = ind - 1;
    while (!contains(ops, exp.charAt(st))) {
        st--;
        if (st < 0) {
            st = -1;
            break
        }
    }
    st++;
    console.log("fn" + exp.substring(st, en + 1));
    var num = (infixEval(exp.substring(st, en + 1)));
    var ans = facto(num);
    return exp.replace(num + "!", ans);
}

function processRaise(ind, exp) {
    var st1, en1, st2, en2;
    en1 = ind - 1;
    st2 = ind + 1;
    st1 = en1 - 1;
    while (!contains(ops, exp.charAt(st1))) {
        st1--;
        if (st1 < 0) {
            st1 = -1;
            break;
        }
    }
    st1++;
    en2 = st2 + 1;
    while (!contains(ops, exp.charAt(en2))) {
        en2++;
        if (en2 > exp.length) {
            en2 = exp.length + 1;
            break;
        }
    }
    en2--;
    var num1 = (infixEval(exp.substring(st1, en1 + 1)));
    var num2 = (infixEval(exp.substring(st2, en2 + 1)));
    var ans = Math.pow(num1, num2);
    return exp.replace(exp.substring(st1, en1 + 1) + "^" + exp.substring(st2, en2 + 1), ans);
}

function facto(n) {
    var res = 1;
    for (var i = 1; i <= n; i++) {
        res = res * i;
    }
    return res;
}

function processSci(exp) {
    if (e > 0) {
        exp = exp.replace("e", "2.71828");
    }

    if (pi > 0) {
        exp = exp.replace("pi", "3.14159");
    }

    var k = 0;
    console.log("pi = " + pi);
    for (var i = 1; i <= sin; i++) {
        var ind = exp.indexOf("sin(", k);
        exp = processSin(ind, exp);
        k = ind + 1;
    }

    k = 0;
    for (var i = 1; i <= cos; i++) {
        var ind = exp.indexOf("cos(", k);
        exp = processCos(ind, exp);
        k = ind + 1;
    }

    k = 0;
    for (var i = 1; i <= tan; i++) {
        var ind = exp.indexOf("tan(", k);
        exp = processTan(ind, exp);
        k = ind + 1;
    }

    k = 0;
    for (var i = 1; i <= log; i++) {
        var ind = exp.indexOf("log(", k);
        exp = processLog(ind, exp);
        k = ind + 1;
    }

    k = 0;
    for (var i = 1; i <= ln; i++) {
        var ind = exp.indexOf("ln(", k);
        exp = processLn(ind, exp);
        k = ind + 1;
    }

    k = 0;
    for (var i = 1; i <= fact; i++) {
        var ind = exp.indexOf("!", k);
        exp = processFact(ind, exp);
        k = ind + 1;
    }

    k = 0;
    for (var i = 1; i <= raise; i++) {
        var ind = exp.indexOf("^", k);
        exp = processRaise(ind, exp);
        k = ind + 1;
    }

    k = 0;
    for (var i = 1; i <= root; i++) {
        var ind = exp.indexOf("root(", k);
        exp = processRoot(ind, exp);
        k = ind + 1;
    }

    return exp;
}
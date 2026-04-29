// SHOW CALCULATOR
function showCalc(id) {
    document.querySelectorAll(".card").forEach(c => c.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

// OHM
function calcOhm() {
    let V = parseFloat(v.value);
    let I = parseFloat(i.value);
    let R = parseFloat(r.value);

    if (!isNaN(I) && !isNaN(R) && isNaN(V)) {
        ohmResult.innerHTML = "V = " + (I * R).toFixed(2);
    }
    else if (!isNaN(V) && !isNaN(R) && isNaN(I)) {
        ohmResult.innerHTML = "I = " + (V / R).toFixed(2);
    }
    else if (!isNaN(V) && !isNaN(I) && isNaN(R)) {
        ohmResult.innerHTML = "R = " + (V / I).toFixed(2);
    }
    else {
        ohmResult.innerHTML = "Enter any 2 values";
    }
}

// POWER
function calcPower() {
    let V = parseFloat(pv.value);
    let I = parseFloat(pi.value);

    if (!isNaN(V) && !isNaN(I)) {
        powerResult.innerHTML = "Power = " + (V * I).toFixed(2) + " W";
    } else {
        powerResult.innerHTML = "Enter both values";
    }
}

// VOLTAGE DIVIDER
function calcDivider() {
    let Vin = parseFloat(vin.value);
    let R1 = parseFloat(r1.value);
    let R2 = parseFloat(r2.value);

    if (!isNaN(Vin) && !isNaN(R1) && !isNaN(R2)) {
        let Vout = Vin * (R2 / (R1 + R2));
        divResult.innerHTML = "Vout = " + Vout.toFixed(2) + " V";
    } else {
        divResult.innerHTML = "Enter all values";
    }
}
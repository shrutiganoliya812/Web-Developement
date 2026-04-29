const colors = {
    Black: 0, Brown: 1, Red: 2, Orange: 3,
    Yellow: 4, Green: 5, Blue: 6,
    Violet: 7, Grey: 8, White: 9
};

const multiplierMap = {
    Black: 1,
    Brown: 10,
    Red: 100,
    Orange: 1000,
    Yellow: 10000,
    Green: 100000,
    Blue: 1000000,
    Gold: 0.1,
    Silver: 0.01
};

const toleranceMap = {
    Brown: "±1%",
    Red: "±2%",
    Gold: "±5%",
    Silver: "±10%"
};

// Load dropdowns
function loadOptions() {
    const b1 = document.getElementById("band1");
    const b2 = document.getElementById("band2");
    const mult = document.getElementById("multiplier");
    const tol = document.getElementById("tolerance");

    for (let color in colors) {
        b1.innerHTML += `<option>${color}</option>`;
        b2.innerHTML += `<option>${color}</option>`;
    }

    for (let color in multiplierMap) {
        mult.innerHTML += `<option>${color}</option>`;
    }

    for (let color in toleranceMap) {
        tol.innerHTML += `<option>${color}</option>`;
    }
}

// Calculate value
function calculate() {
    const b1 = colors[band1.value];
    const b2 = colors[band2.value];
    const mult = multiplierMap[multiplier.value];
    const tol = toleranceMap[tolerance.value];

    let resistance = ((b1 * 10) + b2) * mult;

    // Convert to readable format
    if (resistance >= 1e6) {
        resistance = (resistance / 1e6) + " MΩ";
    } else if (resistance >= 1e3) {
        resistance = (resistance / 1e3) + " kΩ";
    } else {
        resistance = resistance + " Ω";
    }

    document.getElementById("result").innerHTML =
        "Resistance = " + resistance + " " + tol;
}

// Events
document.getElementById("calcBtn").addEventListener("click", calculate);

// Load on start
window.onload = loadOptions;
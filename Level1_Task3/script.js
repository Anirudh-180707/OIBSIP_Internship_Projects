const historyList =
document.getElementById("historyList");

function convertTemperature(){

    const temp =
    parseFloat(
    document.getElementById(
    "temperature").value);

    const unit =
    document.getElementById(
    "unit").value;

    const resultBox =
    document.getElementById(
    "result");

    const statusBox =
    document.getElementById(
    "status");

    if(isNaN(temp)){

        resultBox.innerHTML =
        "⚠ Enter a valid number";

        statusBox.innerHTML = "";

        return;
    }

    let output = "";

    let celsius;

    if(unit === "celsius"){

        let f =
        (temp * 9/5) + 32;

        let k =
        temp + 273.15;

        output =
        `${f.toFixed(2)} °F | ${k.toFixed(2)} K`;

        celsius = temp;
    }

    else if(unit === "fahrenheit"){

        let c =
        (temp - 32) * 5/9;

        let k =
        c + 273.15;

        output =
        `${c.toFixed(2)} °C | ${k.toFixed(2)} K`;

        celsius = c;
    }

    else{

        let c =
        temp - 273.15;

        let f =
        (c * 9/5) + 32;

        output =
        `${c.toFixed(2)} °C | ${f.toFixed(2)} °F`;

        celsius = c;
    }

    resultBox.innerHTML =
    output;

    let status = "";

    if(celsius <= 0){

        status =
        "❄ Freezing";
    }

    else if(celsius <= 20){

        status =
        "🌤 Cool";
    }

    else if(celsius <= 35){

        status =
        "☀ Warm";
    }

    else{

        status =
        "🔥 Hot";
    }

    statusBox.innerHTML =
    status;

    let item =
    document.createElement("li");

    item.textContent =
    `${temp} (${unit}) → ${output}`;

    historyList.prepend(item);
}

function clearAll(){

    document.getElementById(
    "temperature").value = "";

    document.getElementById(
    "result").innerHTML =
    "Enter a value to convert";

    document.getElementById(
    "status").innerHTML = "";

    historyList.innerHTML = "";
}
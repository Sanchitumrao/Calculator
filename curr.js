const dropdowns = document.querySelectorAll("select");
const input = document.querySelector("#input");
const fromCurr = document.querySelector("#from");
const toCurr = document.querySelector("#to");
let msg = document.querySelector("#msg");

for (let select of dropdowns) {
    for (let currCode in countryList) { 
        let newOpt = document.createElement("option");
        newOpt.innerText = currCode;
        newOpt.value = currCode;

        if (select.name === "from" && currCode === "INR") {
            newOpt.selected = "selected";
        } else if (select.name === "to" && currCode === "USD") {
            newOpt.selected = "selected";
        }
        select.append(newOpt);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

async function convertCurrency() {
    let Amount = input.value;
    let from = fromCurr.value;
    let to = toCurr.value;

    if (Amount === "" || Amount <= 0) { 
        msg.textContent = "Please enter a valid amount.";
        return; 
    }
    try {
        const API_KEY = "b4518fb5afc9c905570ed804";
        const res = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${Amount}`);
        const data = await res.json();

        if (data.result === "success") { // Check if API call was successful
            const convertedAmount = data.conversion_result;
            msg.textContent = `${Amount} ${from} = ${convertedAmount} ${to}`;
        } else {
            msg.textContent = `Error: ${data["error-type"]}`; // Display API error message
        }

    } catch (error) {
        console.error("Error fetching data:", error); // Log the actual error
        msg.textContent = "Error fetching data. Please check your network or API key.";
    }
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    convertCurrency();
});

window.addEventListener("load", () => {
    // Initial flag setup for default values
    updateFlag(fromCurr);
    updateFlag(toCurr);
    convertCurrency();
});
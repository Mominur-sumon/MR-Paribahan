
const SelectedSeat = document.getElementById("Selected-seat");
const totalBookedSeat = document.getElementById("total-booked-seat");
const avaiableSeat = document.getElementById("avaiable-seat");
const totalpriceEL = document.getElementById("total-price");
const cupponInputEl = document.getElementById("cuppon-field");
const cupponBtnEl = document.getElementById("cuppon-btn");
const defaulttextEl = document.getElementById("no-seat-booked");
const grandPrice = document.getElementById("grand-price");
const phoneNumber = document.getElementById("phone-number");
const nextBtn = document.getElementById("next-btn");

let SelectedSeatsArray = [];
let totalPrice = 0;
function handleSelectSeat(event) {
    const value = event.innerText;
    if (SelectedSeatsArray.includes(value)) {
        alert("Seat already selected");
        return;
    }
    else if (SelectedSeatsArray.length < 4) {
        console.log("event", event);
        event.classList.toggle("bg-primary");
        event.classList.toggle("text-white");

        SelectedSeatsArray.push(event.innerText);
        totalBookedSeat.innerText = SelectedSeatsArray.length;

        const avaiableSeatvalue = Number(avaiableSeat.innerText) - 1;
        avaiableSeat.innerText = avaiableSeatvalue;
        defaulttextEl.style.display = "none";
        SelectedSeat.innerHTML += `<li class="text-base font-normal flex justify-between">
        <span>${event.innerText}</span>
        <span>Economy</span>
        <span>550</span>
    </li>`;
        totalPrice += 550;
        totalpriceEL.innerText = totalPrice.toFixed(2);

        // Activve cuppon code
        if (SelectedSeatsArray.length > 3) {
            cupponInputEl.removeAttribute("disabled");
            cupponBtnEl.removeAttribute("disabled");

        }
    }
    else {
        alert("You can select only 4 seats");
        return;
    }
}
// cuppon btn function 
document.getElementById("cuppon-btn").addEventListener("click", function () {
    const cupponValue = cupponInputEl.value;
    let cupponSave = 0;
    if (cupponValue === "NEWS50") {
        cupponSave = totalPrice * 0.15;
    }
    else if (cupponValue === "Couple 20") {
        cupponSave = totalPrice * 0.20;
    }
    else {
        alert("Invalid cuppon code");
        return;
    }

    const showCupponPriceEl = document.getElementById("show-cuppon-price");
    showCupponPriceEl.innerHTML = `
                            <p>Discount</p>
                            <p><span>BDT: </span>
                                <span id="grand-price">-${cupponSave.toFixed(2)}</span>
                            </p>`;

    grandPrice.innerText = (totalPrice - cupponSave).toFixed(2);
});

// Next btn function
phoneNumber.addEventListener("keyup", function () {
    if (phoneNumber.value.length === 11) {
        nextBtn.removeAttribute("disabled");
    }
    else {
        nextBtn.setAttribute("disabled", true);
    }
});

document.getElementById("reload").addEventListener("click", function () {
    window.location.reload();
});
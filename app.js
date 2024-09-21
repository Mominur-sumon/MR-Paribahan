
const SelectedSeat = document.getElementById("Selected-seat");
const totalBookedSeat = document.getElementById("total-booked-seat");
const avaiableSeat = document.getElementById("avaiable-seat");
const totalpriceEL = document.getElementById("total-price");
const cupponInputEl = document.getElementById("cuppon-field");
const cupponBtnEl = document.getElementById("cuppon-btn");


let SelectedSeatsArray = [];
let totalPrice = 0;
function handleSelectSeat(event) {
    const value = event.innerText;
    if (SelectedSeatsArray.includes(value)) {
        alert("Seat already selected");
        return;
    }
    else if(SelectedSeatsArray.length < 4) {
        console.log("event", event);
        event.classList.toggle("bg-primary");
        event.classList.toggle("text-white");

        SelectedSeatsArray.push(event.innerText);
        totalBookedSeat.innerText = SelectedSeatsArray.length;

        const avaiableSeatvalue = Number(avaiableSeat.innerText) - 1;
        avaiableSeat.innerText = avaiableSeatvalue;
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
    else{
        alert("You can select only 4 seats");
        return;
    }
}


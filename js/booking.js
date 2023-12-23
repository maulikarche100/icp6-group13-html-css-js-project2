
const guestElement = document.getElementById("guestNumber");

function increNumber() {

    let gNum = parseInt(guestElement.innerText);

    if (gNum < 3) {
        gNum++;
        guestElement.innerText = gNum;  
    }
    else {
        alert('You Cant Add More Than 3 Guest. ')
    }
}

function decrNumber() {
    
    let gNum = parseInt(guestElement.innerText);
    
    if (gNum > 1) {
        gNum--;
        guestElement.innerText = gNum;  
    }
    else {
        alert('Guest Can Not Be Less Than 1. ')
    }

}



// for confirm button

function confirmBooking() {

    const isConfirmed = confirm("Are you sure you want to confirm the booking?");

    if (isConfirmed) {
        const firstName = document.getElementById("fname").value;
        const lastName = document.getElementById("lname").value;
        const cinDate = document.getElementById("checkinDate").value;
        const coutDate = document.getElementById("checkoutDate").value;

        alert(`Booking Confirmed!\nName: ${firstName} ${lastName} \nCheck In Date: ${cinDate} \nCheck Out Date: ${coutDate}.`);
    }
}

// ende here


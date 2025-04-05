function calculateTotal() {
    let adultTickets = document.getElementById("adults").value || 0;
    let childTickets = document.getElementById("children").value || 0;
    adultTickets = parseInt(adultTickets);
    childTickets = parseInt(childTickets);
    let total = (adultTickets * 10) + (childTickets * 5);
    document.getElementById("totalAmount").value = `₹${total}`;
}

document.getElementById('calculateBtn').addEventListener('click', function() {
    const item1Price = parseFloat(prompt("Enter price for Item 1:"));
    const item2Price = parseFloat(prompt("Enter price for Item 2:"));
    
    const quantity1 = parseInt(document.getElementById('quantity1').value);
    const quantity2 = parseInt(document.getElementById('quantity2').value);
    
    if (isNaN(item1Price) || isNaN(item2Price)) {
        alert("Please enter valid prices.");
        return;
    }
    
    const totalCost = (item1Price * quantity1) + (item2Price * quantity2);
    
    document.getElementById('totalCost').innerText = totalCost.toFixed(2);
});

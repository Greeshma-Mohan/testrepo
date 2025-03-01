function calculate_grocery() {
    let first_grocery_amount = parseFloat(document.getElementById('grocery_amount_1').value) || 0;
    let second_grocery_amount = parseFloat(document.getElementById('grocery_amount_2').value) || 0;
    let third_grocery_amount = parseFloat(document.getElementById('grocery_amount_3').value) || 0;

    let total_amount = first_grocery_amount + second_grocery_amount + third_grocery_amount;
    
    document.getElementById('grocery_amount').textContent = `The total amount is: ${total_amount.toFixed(2)}`;
}

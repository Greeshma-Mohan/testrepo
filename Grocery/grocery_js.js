let first_grocery_amount;
let second_grocery_amount;
let third_grocery_amount;
function calculate_grocery(){
    first_grocery_amount = document.getElementById('grocery_amount_1').value;
    second_grocery_amount = document.getElementById('grocery_amount_2').value;
    third_grocery_amount = document.getElementById('grocery_amount_3').value;
    let total_amount = first_grocery_amount + second_grocery_amount + third_grocery_amount;
    document.getElementById('grocery_amount').innerText = `The total amount is : ${total_amount}`;
}
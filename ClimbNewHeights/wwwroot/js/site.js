// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// $(document).ready(function(){
//     function calculateTotal() {
//         let num1 = parseInt($("#numSessions").val());
//         let num2 = parseInt($("#sessionRate").val());
//         let discountApplied = $("#applyDiscount").is(":checked");
//         let discount = 0;
//
//         if (!isNaN(num1) && !isNaN(num2)) {
//             if (discountApplied) {
//                 // Apply 10% discount
//                 discount = (num1 + num2) * 0.1;
//             }
//
//             let total = (num1 + num2) - discount;
//             $("#price").text("Price Estimate: " + total.toFixed(2));
//         }
//         else {
//             $("#price").text("Please enter valid numbers.");
//         }
//     }
//    
//     $("#calculate").click(calculateTotal);
//     //$("#num1, #num2, #applyDiscount").change(calculateTotal);
// });

$("#calculate").click(function(event) {
    event.preventDefault(); // Prevents the form from submitting
    
    let num1 = parseInt($("#numSessions").val());
    let num2 = parseInt($("#sessionRate").val());
    let discountApplied = $("#applyDiscount").is(":checked");
    let discount = 0;
    
    // checks that input number is a positive whole number
    if (!isNaN(num1) && (num1 > 0) && (num1 % 1 === 0)) {
        if (discountApplied) {
            // Apply 10% discount
            discount = (num1 * num2) * 0.1;
        }

        let total = (num1 * num2) - discount;
        $("#price").html("Price Estimate: " + total.toFixed(2));
    }
    else {
        $("#price").html("Please enter a valid number of sessions.");
    }
});

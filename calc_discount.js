// Calculating Discount
//D =((L-S)/L)*100

sellingPrice = 199;
listingPrice = 799;

discountPercentage = ((listingPrice - sellingPrice)/listingPrice)*100;
console.log("Discount Percentage is : " + discountPercentage);                   // Discount Percentage is : 75.09386733416771

// Calculating Rounded Discount

displayDiscountPercentage = Math.round(discountPercentage);
console.log("Display Discount Percentage is :"+ displayDiscountPercentage);      // Display Discount Percentage is :75

//floating point number conversion
function convertToFloat(text) {
  const number = parseFloat(text);
  return number;
}


//Update products cost
function updateCost(products, cost) {
  const costElement = document.getElementById(products + '-cost');
  costElement.innerText = cost;
  totalCalculation();
}

// update of memory costs
document.getElementById('memory1').addEventListener('click', function () {
  updateCost('memory', 0);
});
document.getElementById('memory2').addEventListener('click', function () {
  updateCost('memory', 180);
});


// update of storage costs
document.getElementById('storage1').addEventListener('click', function () {
  updateCost('storage', 0);
});
document.getElementById('storage2').addEventListener('click', function () {
  updateCost('storage', 100);
});
document.getElementById('storage3').addEventListener('click', function () {
  updateCost('storage', 180);
});


// update of delivery costs
document.getElementById('free').addEventListener('click', function () {
  updateCost('delivery', 0);
});
document.getElementById('premium').addEventListener('click', function () {
  updateCost('delivery', 20);
});



// calculation
function totalCalculation() {
  const bestPriceText = document.getElementById('best-price').innerText;
  const bestPrice = convertToFloat(bestPriceText);

  const memoryCostText = document.getElementById('memory-cost').innerText;
  const memoryCost = convertToFloat(memoryCostText);
  const storageCostText = document.getElementById('storage-cost').innerText;
  const storageCost = convertToFloat(storageCostText);
  const deliveryCostText = document.getElementById('delivery-cost').innerText;
  const deliveryCost = convertToFloat(deliveryCostText);
  const total = bestPrice + memoryCost + storageCost + deliveryCost;
  document.getElementById('subtotal').innerText = total;
  document.getElementById('totalcalc').innerText = total;
}




//Apply promo code for 20% discount
document.getElementById('promo-code-btn').addEventListener('click', function () {
  const promoCode = document.getElementById('promo-code');
  if (promoCode.value == 'stevekaku') {
    const totalElement = document.getElementById('subtotal');
    const calculateTotalElement = document.getElementById('totalcalc');

    const total = convertToFloat(totalElement.innerText);
    const calculateTotal = total - (total * 20 / 100);
    calculateTotalElement.innerText = calculateTotal;
    promoCode.value = "";
  }

});



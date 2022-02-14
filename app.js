function updateProductNumber(product, price, isIncreasing){
    const ProductInput = document.getElementById(product + '-number');
    let ProductNumber = ProductInput.value;
    if(isIncreasing == true){
        ProductNumber = parseInt(ProductNumber) + 1;
    }
    else if(ProductNumber > 0){
        ProductNumber = parseInt(ProductNumber) - 1;
    }
    ProductInput.value = ProductNumber;
    // Update Total
    const ProductTotal = document.getElementById(product + '-total');
    ProductTotal.innerText = ProductNumber * price;

    // Calculate Total
    calculateTotal();  
}
function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const totalPrice = subTotal + taxAmount;
    
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalPrice;
}

    // Phone Increase Decrease Events

document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false)
});

    // Case Increase Decrease Events

document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
});
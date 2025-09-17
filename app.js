
//To Make Logos Love
const logos = document.querySelector('.rotating_logos_track').cloneNode(true);
document.querySelector('.rotating_logos').appendChild(logos);

// Function to toggle the monthly year plan
function switchPricing(){
    const checkBox = document.getElementById('pricing-toggle-checkbox');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const yearlyPrices = document.querySelectorAll('.yearly-price');
    const yearlyDiscount = document.querySelector('.save-percentage');

    if(checkBox.checked){
       monthlyPrices.forEach(price => price.classList.add('hidden'));
       yearlyPrices.forEach(price => price.classList.remove('hidden'));
       yearlyDiscount.style.display = 'inline'
} else{
       monthlyPrices.forEach(price => price.classList.remove('hidden'));
       yearlyPrices.forEach(price => price.classList.add('hidden'));
       yearlyDiscount.style.display = 'none'
}
console.log('yes')
}
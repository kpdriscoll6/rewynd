const clickLogo = document.querySelector('#clickLogo');
clickLogo.addEventListener('mouseover',makeLogoRed);
clickLogo.addEventListener('mouseout',makeLogoNormal);

function makeLogoRed(){
    clickLogo.style.color = 'red';
}
function makeLogoNormal(){
    clickLogo.style.color = '#333333';
}
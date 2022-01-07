let cartItem=document.querySelector('.cart-items.container');

document.querySelector('#cart').onclick=()=> {
    cartItem.classList.toggle('active');
}
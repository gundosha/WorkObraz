const menu = document.querySelector('.header__menu_burger');
const open_menu = document.querySelector('.header__menu_burgers')
const open_btn = document.querySelector('.header__image_burger')
const pricebtnslider = document.querySelectorAll('.slider_next_prices')
const priceblock = document.querySelector('.prices__container')
let offset = 0;
let offsetTwo = 0
const btnslider = document.querySelectorAll('.slider_next')
const sliderblock = document.querySelector('.clients__container_com')
const dreambtn = document.querySelector('.dream__btn')

btnslider.forEach(function(item, i, btnslider){
    item.addEventListener('click', function(){
        offset -=400
        if (offset < -800){
            offset = 0
        }
        sliderblock.style.left = offset + 'px'
        console.log(offset)
    })
})

pricebtnslider.forEach(function(item, i, btnslider){
    item.addEventListener('click', function(){
        offsetTwo -= 368
    if (offsetTwo < -368){
        offsetTwo = 0
    }
    priceblock.style.left = offsetTwo + 'px'
    console.log(offsetTwo)
    })
})




function open_sublist(){
    open_menu.classList.toggle('header__menu_burger_block')
}

open_btn.addEventListener('click', open_sublist);




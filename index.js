const menu = document.querySelector('.header__menu_burger');
const open_menu = document.querySelector('.header__menu_burgers')
const open_btn = document.querySelector('.header__image_burger')
const pricebtnslider = document.querySelectorAll('.slider_next_prices')
const priceblock = document.querySelector('.prices__container')
let offset = 0;
let offsetTwo = 0
const modalClose = document.querySelector('.modal__btn_close')
const btnslider = document.querySelectorAll('.slider_next')
const sliderblock = document.querySelector('.clients__container_com')
const dreambtn = document.querySelector('.dream__btn')
const modal = document.querySelector('.modal')


function modalOpen(mod){
    mod.classList.remove('modal__close')
    mod.classList.add('modal__open')
}

function modalCloses(mod){
    mod.classList.remove('modal__open')
    mod.classList.add('modal__close')
}

modalClose.addEventListener('click', function(){
    modalCloses(modal)
})
open_btn.addEventListener('click', function(){
    modalOpen(modal)
})


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


const timer = () =>{
    if(window.innerWidth < 800){
        offsetTwo -= 368
        if (offsetTwo < -368){
            offsetTwo = 0
        }
        priceblock.style.left = offsetTwo + 'px'
        console.log(offsetTwo)
    }
    else{
        return null
    }
}

setInterval(() => {if(window.innerWidth < 800){
    offset -=400
    if (offset < -800){
        offset = 0
    }
    sliderblock.style.left = offset + 'px'
    console.log(offset)
}
else{
    return null
}}, 4000)




//function open_sublist(){
 //   open_menu.classList.toggle('header__menu_burger_block')
//}

//open_btn.addEventListener('click', open_sublist);




//-----------------------Reason-cards-----------------------------------------
const cards = document.querySelectorAll('.card');

cards.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.background = 'linear-gradient(238.66deg, #0283E9 -18.13%, #FC01CA 120.27%)';
        const round = document.querySelector(`#${item.getAttribute('id')} .round`);
        const texts = document.querySelectorAll(`#${item.getAttribute('id')} p`);
        texts.forEach((i) => {
            i.style.color = 'white';
        })
    })
})

cards.forEach((item) => {
    item.addEventListener('mouseout', () => {
        item.style.background = 'white';
        const round = document.querySelector(`#${item.getAttribute('id')} .round`);
        const p1 = document.querySelector(`#${item.getAttribute('id')} .reason`);
        const p2 = document.querySelector(`#${item.getAttribute('id')} .reasonText`);
        p1.style.color = '#2B2B2B';
        p2.style.color = '#828089';
    })
})

//-----------------------------Product-cards--------------------------------------

const prods = document.querySelectorAll('.prod')

prods.forEach(item => {
    item.addEventListener('mouseover', (e) => {
        const hover = document.querySelector(`#${item.getAttribute('id')} .hover`);
        hover.style.display = "flex";
        const img = document.querySelector(`#${item.getAttribute('id')} .img`);
        img.style.opacity = '0.5';
    })

    item.addEventListener('mouseout', (e) => {
        const hover = document.querySelector(`#${item.getAttribute('id')} .hover`);
        hover.style.display = "none";
        const img = document.querySelector(`#${item.getAttribute('id')} .img`);
        img.style.opacity = '1';
    })
});

//-----------------------------Swiper-------------------------------------

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//--------------------View all products----------------------------------

function myFunction() {
    let products = document.getElementById('products');
    let row2 = document.getElementById('row2');
    let row3 = document.getElementById('row3');
    if (row2.style.display === 'none') {
        products.style.height = '100em';
        row2.style.display = 'flex';
        row3.style.display = 'flex';
    }
    else {
        products.style.height = '45em';
        row2.style.display = 'none';
        row3.style.display = 'none';

    }
}

let func2 = () => {
    let row4 = document.getElementById('row4');
    let row5 = document.getElementById('row5');
    if (row4.style.display === 'none') {
        row4.style.display = 'flex';
        row5.style.display = 'flex';
    }
    else {
        row4.style.display = 'none';
        row5.style.display = 'none';

    }
}

function myFunc3() {

    let Flex1 = document.getElementById('Flex1');
    let Flex2 = document.getElementById('Flex2');
    let Flex3 = document.getElementById('Flex3');
    let Flex4 = document.getElementById('Flex4');

    if (Flex1.style.display == 'flex') {
        Flex1.style.display = 'none';
        Flex2.style.display = 'none';
        Flex3.style.display = 'flex';
        Flex4.style.display = 'flex';
    }
    else {
        Flex1.style.display = 'flex';
        Flex2.style.display = 'flex';
        Flex3.style.display = 'none';
        Flex4.style.display = 'none';
    }

}

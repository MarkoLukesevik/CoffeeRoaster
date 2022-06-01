const small = document.getElementsByClassName('small')[0];

function hamburger() {
    small.classList.toggle('gone')
}

const drink = document.getElementById('drink');

let toggle = false;

function arrow(event) {
   drink.classList.toggle('hidden');
   rotate(event)
}

function arrow1(event, id) {
    id.classList.toggle('hidden');
    rotate1(event)
 }

function rotate1(event) {
    if (toggle === false) {
        event.style.transform = 'rotate(180deg)'
        toggle = true
    } else if (toggle === true) {
        event.style.transform = 'rotate(0deg)'
        toggle = false
    }
}

function rotate(event) {
    if (toggle === false) {
        event.style.transform = 'rotate(0deg)'
        toggle = true
    } else if (toggle === true) {
        event.style.transform = 'rotate(180deg)'
        toggle = false
    }
}



const coffee1 = document.getElementById('order-coffee');
const type1 = document.getElementById('order-type');
const much1 = document.getElementById('order-much');
const grind1 = document.getElementById('order-grind');
const deliver1 = document.getElementById('order-deliver');
const as = document.getElementById('as');
const ground = document.getElementById('ground');

const coffee2 = document.getElementById('modal-coffee');
const type2 = document.getElementById('modal-type');
const much2 = document.getElementById('modal-much');
const grind2 = document.getElementById('modal-grind');
const deliver2 = document.getElementById('modal-deliver');
const as2 = document.getElementById('modal-as');
const ground2 = document.getElementById('modal-ground');

const price = document.getElementById('price');
const priceSmallScreen = document.getElementById('price-small-screen')

const strelka = document.getElementById('arrow');


const divGrind = document.getElementById('grind');
const grindHeader = document.getElementsByClassName('pay-step-header')[3]

const firstRow = document.getElementsByClassName('first-row')
const secondRow = document.getElementsByClassName('second-row')
const thirdRow = document.getElementsByClassName('third-row')
const fourthRow = document.getElementsByClassName('fourth-row')
const fifthRow = document.getElementsByClassName('fifth-row')


function summary(event, id1, id2, id3) {
    id2.textContent = id1.textContent;
    id3.textContent = id1.textContent;

    checkSelectedColor(event)
    checkTextContent()
    checkWeight()
    
}

function checkSelectedColor(event) {
    if (event.classList.contains('first-row')) {
        changeBackgroundColor(firstRow)
        event.style.backgroundColor = '#0E8784'
    }
    if (event.classList.contains('second-row')) {
        changeBackgroundColor(secondRow)
        event.style.backgroundColor = '#0E8784'
    }
    if (event.classList.contains('third-row')) {
        changeBackgroundColor(thirdRow)
        event.style.backgroundColor = '#0E8784'
    }
    if (event.classList.contains('fourth-row')) {
        changeBackgroundColor(fourthRow)
        event.style.backgroundColor = '#0E8784'
    }
    if (event.classList.contains('fifth-row')) {
        changeBackgroundColor(fifthRow)
        event.style.backgroundColor = '#0E8784'
    }
}

function changeBackgroundColor(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].style.backgroundColor = '#F4F1EB'
    }
}

function checkTextContent() {
    if (coffee1.textContent === 'Capsule') {
        as.textContent = 'using'
        as2.textContent = 'using'
        ground.textContent = ''
        ground2.textContent = ''
        grind1.textContent = ''
        grind2.textContent = ''
        strelka.onclick = false
        grindHeader.style.opacity = '0.4'
    } else {
        as.textContent = 'as'
        as2.textContent = 'as'
        ground.textContent = 'ground ala '
        ground2.textContent = 'ground ala '
        grind1.style.color = '#0E8784'
        strelka.onclick = () => arrow1(strelka, divGrind)
        grindHeader.style.opacity = '1'
    }
}

function checkWeight() {
    if (much1.textContent === '250g') {
        if (deliver1.textContent === 'Every week') {
            price.textContent = '$' + 7.20 * 4
            priceSmallScreen.textContent = '$' + 7.20 * 4
        } else if (deliver1.textContent === 'Every 2 weeks') {
            price.textContent = '$' + 9.60 * 2
            priceSmallScreen.textContent = '$' + 9.60 * 2
        } else if (deliver1.textContent === 'Every month') {
            price.textContent = '$' + 12.00
            priceSmallScreen.textContent = '$' + 12.00
        }
    } else if (much1.textContent === '500g') {
        if (deliver1.textContent === 'Every week') {
            price.textContent = '$' + 13.00 * 4
            priceSmallScreen.textContent = '$' + 13.00 * 4
        } else if (deliver1.textContent === 'Every 2 weeks') {
            price.textContent = '$' + 17.50 * 2
            priceSmallScreen.textContent = '$' + 17.50 * 2
        } else if (deliver1.textContent === 'Every month') {
            price.textContent = '$' + 22.00
            priceSmallScreen.textContent = '$' + 22.00
        }
    } else if (much1.textContent === '1000g') {
        if (deliver1.textContent === 'Every week') {
            price.textContent = '$' + 22.00 * 4
            priceSmallScreen.textContent = '$' + 22.00 * 4
        } else if (deliver1.textContent === 'Every 2 weeks') {
            price.textContent = '$' + 32.00 * 2
            priceSmallScreen.textContent = '$' + 32.00 * 2
        } else if (deliver1.textContent === 'Every month') {
            price.textContent = '$' + 42.00
            priceSmallScreen.textContent = '$' + 42.00
        }
    }
}

const checkout = document.getElementById('checkout');
const modal = document.getElementsByClassName('modal')[0];

function renderModal() {
    modal.classList.toggle('render');
}
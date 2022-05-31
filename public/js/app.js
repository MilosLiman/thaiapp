const burger = document.querySelector('.burger');
const lists = document.querySelector('.lists');

//const nextBtn = document.querySelector('.next-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit');
const closeBtn = document.querySelector('.close-btn');
const backBtn = document.querySelector('.back-btn');
//const backBtn = document.getElementById('prevBtn');

const additional = document.getElementById('additional-info');
const general = document.getElementById('general-datas');

const bookBtn = document.getElementById('book');
const joinBtn = document.getElementById('join');
const modalBg = document.querySelector('.modal-bg');
const modal = document.querySelector('.modal');

const closeModal = () => {
    modalBg.classList.remove('modal-active');
}


burger.addEventListener('click', () => {
    
    lists.classList.toggle('list-show')
})

var currentTab = 0;

showTab(currentTab);


function showTab(n){

    const tab = document.querySelectorAll('.tab');
    tab[currentTab].style.display = 'flex';
    tab[currentTab + 1].style.display = 'none';
    backBtn.style.display = 'none';


    if(n == tab.length-1){
        submitBtn.style.display = 'block';
    }else{
        submitBtn.style.display = 'none';
    }
}

function nextTab(n){

    const x = document.querySelectorAll('.tab');

    backBtn.style.display = 'block';

    x[currentTab].style.display = 'none';
    currentTab = currentTab + n;
    

    if(currentTab >= x.length){
        general.submit();
        return false;
    }

    if(n == 0){
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'block';
        
    }else{
        submitBtn.style.display = 'block';
        nextBtn.style.display = 'none';
    }

    showTab(currentTab);
}


nextBtn.addEventListener('click', () => {
    nextTab(1);
})

backBtn.addEventListener('click', () => {
    nextTab(-1);
    nextBtn.style.display = 'block';

})

$(document).ready(function(){
    $('.logo-box').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover:false,
        responsive: [{
            breakpoint: 768,
            setting: {
                slidesToShow:3
            }
        }, {
            breakpoint: 520,
            setting: {
                slidesToShow: 2
            }
        }]
    });
});

bookBtn.addEventListener('click', () => {

    modalBg.classList.add('modal-active');

})

joinBtn.addEventListener('click', () => {

    modalBg.classList.add('modal-active');

})

modalBg.addEventListener('click', (e) => {

    if(!e.target.closest('.modal')){
        closeModal();
    }
})


closeBtn.addEventListener('click', () => {
    closeModal();

})


// IZRACUNATI CENU I ISPISATI U POLJU DOLE DESNO

const recreative_1w = 199;
const recreative_1m = 399;

const half_1w = 299;
const half_1m = 699;

const all_1w = 399;
const all_1m = 999;

const price = document.querySelector('.price-title');


var tr_price = new Array();
tr_price["recreative"] = 199;
tr_price["half"] = 299;
tr_price["all"] = 399;

function trainingPrice(){

    var trPrice = 0;
    const tr = document.getElementById('training');
    const duration = document.getElementById('duration');

    const selectedDuration = general.elements['duration'];

    duration_value = selectedDuration.value;

    var selectedTr = general.elements['training'];
    trPrice = tr_price[selectedTr.value];

    var selectedTr_value = selectedTr.value;

    //const price = document.querySelector('.price-title');

    if(selectedTr_value == 'recreative' && duration_value == 'week'){
        trPrice = recreative_1w;

    }else if(selectedTr_value == 'recreative' && duration_value == 'month'){
        trPrice = recreative_1m;
    }else if(selectedTr_value == 'half' && duration_value == 'week'){
        trPrice = half_1w;
    }else if(selectedTr_value == 'half' && duration_value == 'month'){
        trPrice = half_1m;
    }else if(selectedTr_value == 'all' && duration_value == 'week'){
        trPrice = all_1w;
    }else if(selectedTr_value == 'all' && duration_value == 'month'){
        trPrice = all_1m;
    }else{
        trPrice = 0;
    }

    price.innerHTML = trPrice;
    //return parseInt(trPrice);
}

trainingPrice();

// var duration_t = new Array();
// duration_t["week"] = 1;
// duration_t["month"] = 2;

// function duration(){

//     var duration = 0;
//     const selectedDuration = general.elements['duration'];

//     duration = duration_t[selectedDuration.value];

//     return duration;

// }


// function totalPrice(){
    
//      var totalPr = 0;

//      totalPr = trainingPrice() * duration();

//     price.innerHTML = totalPr;

// }
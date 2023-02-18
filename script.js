// for whats makes us different
const mainCard = document.querySelector(`.main-card`);
const icon = document.querySelector(`.bi-shield-fill-check`);
const mC1 = document.querySelector(`.main-card1`);
const mC2 = document.querySelector(`.main-card2`);
const mC3 = document.querySelector(`.main-card3`);
const mC4 = document.querySelector(`.main-card4`);
const mC5 = document.querySelector(`.main-card5`);
const i1 = document.querySelector(`.icon1`);
const i2 = document.querySelector(`.icon2`);
const i3 = document.querySelector(`.icon3`);
const i4 = document.querySelector(`.icon4`);
const i5 = document.querySelector(`.icon5`);
const mi1 = document.querySelector(`.mi1`);
const mi2 = document.querySelector(`.mi2`);
const mi3 = document.querySelector(`.mi3`);
const mi4 = document.querySelector(`.mi4`);
const mi5 = document.querySelector(`.mi5`);
var clicked = false;


mC1.addEventListener("click", function(){
    clicked = true;
    if(clicked){
        // navigator.vibrate(60)
        i1.classList.add(`active-main-card`);
        i2.classList.remove(`active-main-card`);
        i3.classList.remove(`active-main-card`);
        i4.classList.remove(`active-main-card`);
        i5.classList.remove(`active-main-card`);
        mC1.classList.remove(`opacity-low`)
        mC2.classList.add(`opacity-low`);
        mC3.classList.add(`opacity-low`);
        mC4.classList.add(`opacity-low`);
        mC5.classList.add(`opacity-low`);
        mi1.classList.remove(`opacity-min`);
        mi2.classList.add( `opacity-min`);
        mi3.classList.add( `opacity-min`);
        mi4.classList.add( `opacity-min`);
        mi5.classList.add( `opacity-min`);
    }
    // clicked = false;
})
mC2.addEventListener("click", function(){
    clicked = true;
    if(clicked){
        // navigator.vibrate(60)
        i2.classList.add(`active-main-card`);
        i1.classList.remove(`active-main-card`);
        i3.classList.remove(`active-main-card`);
        i4.classList.remove(`active-main-card`);
        i5.classList.remove(`active-main-card`);
        mC1.classList.add(`opacity-low`);
        mC2.classList.remove(`opacity-low`);
        mC3.classList.add(`opacity-low`);
        mC4.classList.add(`opacity-low`);
        mC5.classList.add(`opacity-low`);
        mi1.classList.add( `opacity-min`);
        mi2.classList.remove( `opacity-min`);
        mi3.classList.add( `opacity-min`);
        mi4.classList.add( `opacity-min`);
        mi5.classList.add( `opacity-min`);
    }
    // clicked = false;
})
mC3.addEventListener("click", function(){
    clicked = true;
    if(clicked){
        // navigator.vibrate(60)
        i3.classList.add(`active-main-card`);
        i1.classList.remove(`active-main-card`);
        i2.classList.remove(`active-main-card`);
        i4.classList.remove(`active-main-card`);
        i5.classList.remove(`active-main-card`);
        mC1.classList.add(`opacity-low`);
        mC3.classList.remove(`opacity-low`);
        mC2.classList.add(`opacity-low`);
        mC4.classList.add(`opacity-low`);
        mC5.classList.add(`opacity-low`);
        mi1.classList.add( `opacity-min`);
        mi3.classList.remove( `opacity-min`);
        mi2.classList.add( `opacity-min`);
        mi4.classList.add( `opacity-min`);
        mi5.classList.add( `opacity-min`);
    }
    // clicked = false;
})
mC4.addEventListener("click", function(){
    clicked = true;
    if(clicked){
        // navigator.vibrate(60)
        i4.classList.add(`active-main-card`);
        i1.classList.remove(`active-main-card`);
        i2.classList.remove(`active-main-card`);
        i3.classList.remove(`active-main-card`);
        i5.classList.remove(`active-main-card`);
        mC1.classList.add(`opacity-low`);
        mC4.classList.remove(`opacity-low`);
        mC2.classList.add(`opacity-low`);
        mC3.classList.add(`opacity-low`);
        mC5.classList.add(`opacity-low`);
        mi1.classList.add( `opacity-min`);
        mi4.classList.remove( `opacity-min`);
        mi2.classList.add( `opacity-min`);
        mi3.classList.add( `opacity-min`);
        mi5.classList.add( `opacity-min`);
    }
    // clicked = false;
})
mC5.addEventListener("click", function(){
    clicked = true;
    if(clicked){
        // navigator.vibrate(60)
        i5.classList.add(`active-main-card`);
        i1.classList.remove(`active-main-card`);
        i2.classList.remove(`active-main-card`);
        i3.classList.remove(`active-main-card`);
        i4.classList.remove(`active-main-card`);
        mC1.classList.add(`opacity-low`);
        mC5.classList.remove(`opacity-low`);
        mC2.classList.add(`opacity-low`);
        mC3.classList.add(`opacity-low`);
        mC4.classList.add(`opacity-low`);
        mi1.classList.add( `opacity-min`);
        mi5.classList.remove( `opacity-min`);
        mi2.classList.add( `opacity-min`);
        mi3.classList.add( `opacity-min`);
        mi4.classList.add( `opacity-min`);
    }
    
})


// for contact us modal 
    document.getElementById("contact-us-btn").addEventListener(`click`,
    function(){
        document.querySelector(`.bg-modal`).style.display = `flex`;
        // navigator.vibrate(60)
    } )

    document.getElementById("lets-talk").addEventListener   (`click` ,     function(){
        document.querySelector(`.bg-modal`).style.display = `flex`;
        // navigator.vibrate(60)
    });
    document.getElementById("letstalk").addEventListener   (`click` ,  function(){
        document.querySelector(`.bg-modal`).style.display = `flex`;
        // navigator.vibrate(60)
    });
    document.querySelector(`.close-modal`).addEventListener(`click` ,   function(){
        document.querySelector(`.bg-modal`).style.display = `none`;
        // navigator.vibrate(60)
    });

    document.addEventListener(`keyup`, e => {
        if(e.key == "Escape"){
        document.querySelector(`.bg-modal`).style.display = `none`;
        }
    })
    document.addEventListener(`keyup`, e => {
        if(e.key == "Enter"){
         document.querySelector(`#submit-btn`).click();
        }
    })

//for modal contact us form

window.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("my-form");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks!";
    }
  
    function error() {
        form.reset();
      status.classList.add("error");
      status.innerHTML = "Thank you!";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      navigator.vibrate(80)
      var data = new FormData(form);
    //   ajax(form.method, form.action, data, success, error);
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE){
          return}
      if (xhr.status === 200 && xhr.readyState == 4) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
    setTimeout(function(){
        window.location.href = '/thankyou.html'
    },  1000)
      
    });
  });
  


// for hamburger menu 

var iconid = document.getElementById("iconid");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var nav = document.getElementById('ham-nav');
var yellow = document.getElementById("yellow");

iconid.addEventListener('click', function() {
    console.log(`clicked`)
    // navigator.vibrate(60)
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
  nav.classList.toggle('show');
  yellow.classList.toggle('slide');
  document.querySelector(`.ham-nav-ul`).classList.toggle(`display-min`);
});

function closeSlideMenu(){
    document.getElementById(`iconid`).click();
};

// for scroll top button 
const scrollbtn = document.querySelector(`.scroll-to-top`);
const scrollBtnSec = document.querySelector(`.top-scroll-section`);
scrollbtn.addEventListener(`click` , () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    scrollbtn.classList.add(`scale-transform-scroll`);
    // navigator.vibrate(60);

})
document.addEventListener(`scroll` , () =>{
    if(document.documentElement.scrollTop > 50){
        scrollbtn.classList.add(`opacity-max-scroll`);
        scrollbtn.classList.remove(`opacity-min-scroll`);
        scrollBtnSec.classList.add(`transform-scroll-down`);
        scrollbtn.classList.remove(`transform-scroll-up`);
        
    } else{
        scrollbtn.classList.remove(`opacity-max-scroll`);
        scrollbtn.classList.add(`opacity-min-scroll`);
        scrollBtnSec.classList.remove(`transform-scroll-down`);
        scrollBtnSec.classList.add(`transform-scroll-up`);
    }
    if(document.documentElement.scrollTop === 0){
        scrollbtn.classList.remove(`scale-transform-scroll`);
    }
})

//for preventing viewport resize in android
addEventListener("load", function() {
var viewport = document.querySelector("meta[name=viewport]");
viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
});


// for the buttons in card page 2
// const cardbtn1  = document.getElementById(`card-btn1`);
// const cardbtn2  = document.getElementById(`card-btn2`);
// const cardbtn3  = document.getElementById(`card-btn3`);
// cardbtn1.addEventListener(`click` , () => {
    // navigator.vibrate(60)
// })
// cardbtn2.addEventListener(`click` , () => {
//     navigator.vibrate(60)
// })
// cardbtn3.addEventListener(`click` , () => {
//     navigator.vibrate(60)
// })

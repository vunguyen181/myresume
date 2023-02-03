/*---- CURSOR ----*/
var innerCursor = document.querySelector('.inner-cursor');
var outerCursor = document.querySelector('.outer-cursor');
var textCvDownloadCursor = document.querySelector('.text-cv-download-cursor');
var linkedin = document.querySelector('.linkedin');

function addCursorScaleUpEffect(){
    innerCursor.classList.add('width-height-scale-up');
    outerCursor.classList.add('border-scale-up');
}
function removeCursorScaleUpEffect(){
    innerCursor.classList.remove('width-height-scale-up');
    outerCursor.classList.remove('border-scale-up');
}

var cvDownloadButton = document.querySelector('.download-icon');
cvDownloadButton.addEventListener('mouseover', function(){
    addCursorScaleUpEffect();
    textCvDownloadCursor.innerText = 'download CV';
});
cvDownloadButton.addEventListener('mouseleave', function(){
    removeCursorScaleUpEffect();
    textCvDownloadCursor.innerText = '';
});

linkedin.addEventListener('mouseover', function(){
    addCursorScaleUpEffect();
    textCvDownloadCursor.innerText = 'my linkedin account';
});
linkedin.addEventListener('mouseleave', function(){
    removeCursorScaleUpEffect();
    textCvDownloadCursor.innerText = '';
});


document.addEventListener('mousemove', function(event){
    var x = event.clientX;
    var y = event.clientY;
    
    innerCursor.style.left = x + 'px';
    innerCursor.style.top = y + 'px';
    
    outerCursor.style.left = x + 'px';
    outerCursor.style.top = y + 'px';
    
    textCvDownloadCursor.style.left = x + 'px';
    textCvDownloadCursor.style.top = y + 50 + 'px';
});

var clickMe = document.querySelector('.clickme');

var scrollPosition = document.querySelector('body');
scrollPosition.addEventListener('scroll',function(event){
    console.log(event)
})
/*---- END OF CURSOR ----*/


/*--- DETECTING TOUCH SUPPORT ---*/
var isTouchSupported = "ontouchstart" in window || window.navigator.maxTouchPoints;
var customCursor = document.querySelector('.cursors');

if(isTouchSupported){
    customCursor.style.display = 'none';
} else {
    customCursor.style.display = 'block';
}
/*--- END OF DETECTING TOUCH SUPPORT ---*/


/*--- DOWNLOAD BUTTON ---*/
var downloadButton = document.querySelector('.download-button-res');
downloadButton.addEventListener('mouseover', function(){
    addCursorScaleUpEffect();
    textCvDownloadCursor.innerText = 'download CV';
});
downloadButton.addEventListener('mouseleave', function(){
    removeCursorScaleUpEffect();
    textCvDownloadCursor.innerText = '';
});
/*--- END OF DOWNLOAD BUTTON ---*/



/*--- ANCHOR SCROLL ---*/
var anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach(function(anchor){
    anchor.addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        })
    })  
})
/*--- END OF ANCHOR SCROLL ---*/



/*--- BOTTOM NAVBAR ---*/
var upIcon = document.querySelector('.up-icon');
var navbarCard = document.querySelector('.navbar-card');

upIcon.addEventListener('mouseover', function(){
    addCursorScaleUpEffect();
});
upIcon.addEventListener('mouseleave', function(){
    removeCursorScaleUpEffect();
});

upIcon.addEventListener('click',function(){
    navbarCard.classList.toggle('active');
    setTimeout(function(){
        navbarCard.classList.remove('active');
    },5000);
})
/*--- END OF BOTTOM NAVBAR ---*/


/*--- DETECTING TOUCH SUPPORT ---*/
var isTouchSupported = "ontouchstart" in window || window.navigator.maxTouchPoints;
var customCursor = document.querySelector('.cursors');
var wrapper = document.querySelector('.cv-wrapper');

if(isTouchSupported){
    customCursor.style.display = 'none';
    wrapper.style.overflow = 'hidden';
} else {
    customCursor.style.display = 'block';
    wrapper.style.overflow = 'visible';
}
/*--- END OF DETECTING TOUCH SUPPORT ---*/
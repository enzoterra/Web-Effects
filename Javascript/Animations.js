//Reveal Animation

//ScrollReveal().reveal('#pre-title');
//ScrollReveal().reveal('#main-title');
ScrollReveal().reveal('.d-title', {origin:'right', duration: 1000});
ScrollReveal().reveal('.d-text', {origin:'right', duration: 1500});


//Menu Color Animation

$(window).scroll(function() { 
    var scroll = $(window).scrollTop();

    if (scroll > 700) {
        $('#header').css('background-color','rgba(0, 0, 0, 0.2)');
        $('#header').css('backdrop-filter','blur(20px)');
        $('#header').css('box-shadow','1px 0px 3px');
        $('#neon').css('display','block');
        $('#neon').css('animation','fade-in 1s, neon 7s infinite alternate');
    }
    if (scroll < 700) {
        $('#header').css('background-color','transparent');
        $('#header').css('backdrop-filter','blur(0px)');
        $('#header').css('box-shadow','0px 0px 0px');
        $('#neon').css('animation','fade-out 1s');
        $('#neon').css('display','none');
    }
});
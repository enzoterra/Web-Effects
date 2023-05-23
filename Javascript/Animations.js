//Reveal Animation

//ScrollReveal().reveal('#pre-title');
//ScrollReveal().reveal('#main-title');
ScrollReveal().reveal('.d-title', {origin:'right', duration: 1000});
ScrollReveal().reveal('.d-text', {origin:'right', duration: 1500});


//Menu Color Animation

$(window).scroll(function() { 
    var scroll = $(window).scrollTop();

    if (scroll > 700) {
        $('#header').css('background-color','rgb(30, 30, 30)');
        $('#header').css('box-shadow','1px 0px 3px');
    }
    if (scroll < 700) {
        $('#header').css('background-color','transparent');
        $('#header').css('box-shadow','0px 0px 0px');
    }
});
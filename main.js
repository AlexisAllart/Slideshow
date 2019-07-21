$(document).ready(function () {

    // on repositionne toutes les photos les unes sur les autres
    $('.slideshow').css('position', 'relative');
    $('.slideshow > img').css('position', 'absolute');

    // on sélectionn toutes les images "supérieures à 0" et on les cache (on affiche donc la première)
    $('.slideshow > img:gt(0)').hide();

    $('.slideshow').append('<div class="buttons"><a class="prev" href="#">Précédent</a> | <a class="next" href="#">Suivant</a></div>');

    $('.buttons').css({position: 'absolute'});

    // on récupère 'event' pour le réutiliser dans la fonction
    $('.slideshow > .buttons > a.next').on('click', function(event) {
        // on bloque l'évènement d'origine (qui actualisait la page)
        event.preventDefault();

        var nextImg=$('.slideshow > img:visible').next('img');

        if (nextImg.length < 1) {
            nextImg=$('.slideshow img:first');
        }

        $('.slideshow > img:visible').fadeOut(100);
        nextImg.fadeIn(100);
        
    });

    $('.slideshow > .buttons > a.prev').on('click', function(event) {
        event.preventDefault();

        var prevImg=$('.slideshow > img:visible').prev('img');

        if (prevImg.length < 1) {
            prevImg=$('.slideshow img:last');
        }

        $('.slideshow > img:visible').fadeOut(100);
        prevImg.fadeIn(100);
        
    });

    function autoPlay() {
        $('.slideshow .next').trigger('click');
    }

    setInterval(autoPlay, 3000);
});
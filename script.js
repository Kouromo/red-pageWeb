// Procédure qui confirme l'envoi des formulaires
function envoiMsg() {
    alert("Votre message a bien été envoyé");
}


// Procédures pour afficher les images
function zoomImage1(){
    Fancybox.show([
        {
            src  : 'images/photo1.jpg',
            thumb   : 'images/photo1.jpg'

        },
        {
            src  : 'images/photo2.jpg',
            thumb   : 'images/photo2.jpg'
        },
        {
            src  : 'images/photo3.jpg',
            thumb   : 'images/photo3.jpg'
        }
    ], {
        loop : true,
        thumbs : {
            autoStart : true
        }
    });
}

function zoomImage2(){
    Fancybox.show([
        {
            src  : 'images/photo2.jpg',
            thumb   : 'images/photo2.jpg'
        },
        {
            src  : 'images/photo3.jpg',
            thumb   : 'images/photo3.jpg'
        },
        {
            src  : 'images/photo1.jpg',
            thumb   : 'images/photo1.jpg'
        }
    ], {
        loop : true,
        thumbs : {
            autoStart : true
        }
    });
}

function zoomImage3(){
    Fancybox.show([
        {
            src  : 'images/photo3.jpg',
            thumb   : 'images/photo3.jpg'
        },
        {
            src  : 'images/photo1.jpg',
            thumb   : 'images/photo1.jpg'
        },
        {
            src  : 'images/photo2.jpg',
            thumb   : 'images/photo2.jpg'
        }
    ], {
        loop : true,
        thumbs : {
            autoStart : true

        }
    });

}

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


// Changer la couleur de la bordure du formulaire
function changeCouleur(id) {
    document.getElementById(id).style.borderColor = "#ed1e79";
}

function changeCouleurOut(id) {
    document.getElementById(id).style.borderColor = "white";
}

tippy(targets, {
    theme: 'blackAndWhite',
  });

function afficherMenu(){
    // si le menu est caché on l'affiche, sinon on le cache
    if (document.getElementById("menu").style.display == "none") {
        document.getElementById("menu").style.display = "block";
    } else {
        document.getElementById("menu").style.display = "none";
    }
}
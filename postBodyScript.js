// Formulaire de contact

tippy('#name', {
  content: 'Fill with your name',
  theme: 'blackAndWhite',
});
tippy('#email', {
  content: 'Fill with your email',
  theme: 'blackAndWhite',
});
tippy('#message', {
  content: 'Fill with your message',
  theme: 'blackAndWhite',
});

function loadCountries() {
  const xhttp = new XMLHttpRequest();
  const select = document.getElementById("countries");
  const flag = document.getElementById("flag");

  let countries;

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      countries = JSON.parse(xhttp.responseText);
      countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
      assignValues();
      handleCountryChange();
    }
  };
  xhttp.open("GET", "https://restcountries.com/v3.1/all", true);
  xhttp.send();

  function assignValues() {
    countries.forEach(country => {
      const option = document.createElement("option");
      option.value = country.cioc;
      option.textContent = country.name.common;
      select.appendChild(option);
    });
  }

  function handleCountryChange() {
    const countryData = countries.find(
      country => select.value === country.alpha2Code
    );
    flag.style.backgroundImage = `url(${countryData.flag})`;
  }

  select.addEventListener("change", handleCountryChange.bind(this));
}

loadCountries();



// Procédure pour afficher la carte
function initMap() {
  var mapStyle = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#0c0b0b"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#090909"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#d4e4eb"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#fef7f7"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9b7f7f"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#fef7f7"
            }
        ]
    }
  ];

  const selector = document.getElementById("map")
  const center = { lat: 43.4867854, lng: -1.4641213 }
  const options = {
    center: center,
    zoom: 17,
    styles: mapStyle,
  }
  var myLatLng = { lat: 43.4867854, lng: -1.4641213 };
  const map = new google.maps.Map(selector, options);
  var marker = new google.maps.Marker({
    position: myLatLng,
    title: "Web Agency",
    map: map,
    icon: {
      url: 'images/marker.svg',
      scaledSize: new google.maps.Size(50, 50),
    }
  });
}


// Slider

let swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});





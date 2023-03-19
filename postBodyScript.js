// Formulaire de contact

tippy('#name', {
  content: 'Fill with your name',
});
tippy('#email', {
  content: 'Fill with your email',
});
tippy('#message', {
  content: 'Fill with your message',
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
  const selector = document.getElementById("map")
  const center = { lat: 43.4867854, lng: -1.4641213 }
  const options = {
    center: center,
    zoom: 17,
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





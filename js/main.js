//Google map

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('google-map'), {
          center: {lat: 16.864841, lng: 11.953808},
          zoom: 18,
          mapTypeId: 'satellite',

        });
      }

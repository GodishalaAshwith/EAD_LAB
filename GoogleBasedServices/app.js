function initMap() {
  const cbit = { lat: 17.3920, lng: 78.3190 };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: cbit,
    zoom: 14
  });

  new google.maps.Marker({
    position: cbit,
    map: map,
    title: "CBIT"
  });

  const service = new google.maps.places.PlacesService(map);

  service.nearbySearch(
    {
      location: cbit,
      radius: 3000,
      keyword: "Government School"
    },
    (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        results.forEach(place => {
          new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name
          });
        });
      }
    }
  );
}


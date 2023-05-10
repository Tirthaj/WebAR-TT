if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var coordinates = document.getElementById('coordinates');
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      alert(`Got first GPS position: lon ${longitude} lat ${latitude}`);
      coordinates.setAttribute("gps-entity-place","latitude:" +latitude + "; longitude:" + longitude + ";");
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

<template>
    <div class="map-container">
      <div ref="map" class="map"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        map: null,
        markers: [],
      };
    },
    mounted() {
      // Load the Google Maps JavaScript API asynchronously
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.VUE_APP_MAP}&callback=initMap`;
      script.defer = true;
      script.async = true;
      window.initMap = this.initMap;
      document.head.appendChild(script);
      console.log('script.src------', script.src)
      console.log('process.env.VUE_APP_GOOGLE_MAPS_API_KEY.src------', process.env.VUE_APP_URL)
      console.log('VUE_APP_MAP!!!!!!!!!!!', process.env.VUE_APP_MAP)
      
    },
    methods: {
      initMap() {
        // Create a new Google Maps instance
        this.map = new window.google.maps.Map(this.$refs.map, {
          center: { lat: 37.7749, lng: -122.4194 },
          zoom: 12,
        });
        
        // Add a click listener to the map to add markers
        this.map.addListener('click', (event) => {
          this.addMarker(event.latLng);
        });
      },
      addMarker(latLng) {
        // Create a new marker at the specified location
        const marker = new window.google.maps.Marker({
          position: latLng,
          map: this.map,
        });
        
        // Add the marker to our array of markers
        this.markers.push(marker);
      },
    },
  };
  </script>
  
  <style>
  .map-container {
    width: 100%;
    height: 400px;
  }
  
  .map {
    width: 100%;
    height: 100%;
  }
  </style>
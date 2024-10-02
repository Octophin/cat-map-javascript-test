const map = new mapboxgl.Map({
  accessToken:
    "pk.eyJ1Ijoib2N0b3BoaW4iLCJhIjoiY2s1MmtzMnFwMDllYjNtcW43bzZmZnpyNyJ9.w6pj26TwKy5wqaCQN69sFg",
  container: "map",
  center: [-0.10588288303432236, 51.518095113618116],
  zoom: 14,
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

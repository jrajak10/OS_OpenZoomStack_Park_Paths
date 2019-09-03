debugger



mapboxgl.accessToken = "pk.eyJ1IjoiamxzcjEwIiwiYSI6ImNqendwdWcwcDBqcXQzbnBrc3kzNXB2cm8ifQ.O4pVjrJOsuWH8HZLE1vBXw";

let map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/jlsr10/cjzy8er7828xn1cpfx6auq3ul",
    center: [-0.172613, 51.505719],
    zoom: 14
});


map.addControl(new mapboxgl.NavigationControl());




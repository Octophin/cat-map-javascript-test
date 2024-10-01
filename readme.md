# Octophin Cat Map Test

The task is to take a csv of cats and write a script to turn it into the GeoJSON standard: https://en.wikipedia.org/wiki/GeoJSON so that it can be read by a web map.

This GeoJSON file should then be shown in a circle or marker on the map with information about each cat in a popup using the MapboxGl library https://docs.mapbox.com/mapbox-gl-js/guides/.

## Project contents

The project contains:

* A CSV with cat information.
* A `server.js` file (node.js) that can be run using `npm start` and can be seen at `http://localhost:3000`. This is using the Express framework. https://expressjs.com/
* A public folder with frontend JavaScript, CSS and HTML that show the map using MapboxGl.
* An image folder with cat images in the public folder. All of these are always a jpg file exactly matching the cat name.

## Task

* Make the cats in the CSV show on the map. This can be either as a circle or a marker. 
* Make the cat name and image show in a popup for each cat when clicked
* Change the circle / marker colour depending on the cat category (there is a category_colour column in the csv)

## Guidelines

* You will be asked to explain how your code works
* Anything that gets the desired result on the map is accepted
* You can use any libraries or tools on the frontend or backend you want, including throwing out the current tech stack
* Ideal solutions will automatically update the map (on page refresh) whenever the CSV is updated

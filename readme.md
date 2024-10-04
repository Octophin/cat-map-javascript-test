# Octophin Cat Map Test

The task is to take a csv of cats living near our office (file provided) and programatically turn this csv to JSON containing the data. This JSON should be transformed into the GeoJSON standard (https://en.wikipedia.org/wiki/GeoJSON) so that it can be read as points by a web map.

This GeoJSON should then be shown as circles or markers on a map with information about each cat in a popup using the MapboxGl library https://docs.mapbox.com/mapbox-gl-js/guides/.

Ideal solutions will automatically update the map (on page refresh) whenever the CSV is updated.

## Project contents

* A CSV with cat information.
* A `server.js` file (node.js) that can be run using `npm start` and can be seen at `http://localhost:3000`. This uses the Express framework: https://expressjs.com/
* A public folder with frontend JavaScript, CSS and HTML that shows the map using MapboxGl.
* An image folder with cat images in the public folder. All of these are always a jpg file exactly matching the cat's name.

## Task

* Turn the CSV into GeoJSON representing the cats and their locations
* Get this GeoJSON to the frontend and show it on the map. This can be either as circles or markers. 
* Make the names and images show in a popup for each cat when clicked
* Change the circle / marker colour depending on the cat category (there is a category_colour column in the csv already provided)

## Guidelines

* You will be asked to explain how your code works
* Anything that gets the desired result on the map is accepted
* You have full access to the internet to search through documentation
* You can use any libraries or tools on the frontend or backend you want, including throwing out the current tech stack
* You will be assessed on the server-side and client-side JavaScript, not the styling and presentation of the map and its popups.

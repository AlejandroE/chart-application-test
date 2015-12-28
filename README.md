# Aplication Test

This minimalistic app app expects resources/data.json to have valid json representations of the charts requested by the chart directive by chart id.
Once the data is pulled the app instantiates charts on thumb or normal mode, on thumb click the route for the normal graph displated is called.

  * thumb mode has no interactions.
  * normal mode has user interactions and animations enabled.

## TODO:

  * Establish a better way to mediate with backend resources / pull chart data
  * Elaborate a clarer way to pass Ids from routes to directives.
  * Unit test components
  * Improve UI/UX design

## To run the app:

  * clone the repo
  * run "npm install"
  * run "bower install"
  * run grunt server

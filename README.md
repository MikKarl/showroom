# Project repo for Metropolia UAS innovation cource

## 1. Purpose of the project

Purpose of the project was to create AR application that enables customer to give tour of their factory without usual costs in time and money. For instance, usually factory tours require participating individuals to atleast travel to factory and go through savety training. This application removes the need for those.

## 2. Development of the application

Application was developed by basing solution on customer requirements and user feedback.

## 3. Used technologies and languages

* NavVis IndoorViewer platform 
    * AngularJs
    * JQuery
* Typescript
* Javascript
* HTML
* SCSS

## 4. Planned further development based on user feedback

* pausing the tour
* showing the map when user clicks on "show map" button
* adding "show info" button that shows information about the application
* hide "POI list" after link in the list is clicked and instance moves to the POI

## 5. Using the application

### A). Installing and running the application

* download the project zip folder
* extract the zip
* move to the unzipped project folder
* open the command line
* run following command to install dependencies and modules

~~~
npm install
~~~

* if command dosen't work, download [NodeJs](nodejs.org) and try again
* after installing dependencies, start the project with:

~~~
npm run serve
~~~

* project should open automatically in a default browser

NOTE: instance will ask you to sign in

### B). Application view

Application works similarly to the Google Street View, user can move around the enviroment at their own leisure. 

Most of the application funtionalities are focused on the left side of the screen. Screen has (currently) four buttons

* HOME
    * brings user to the starting position of the tour
* START TOUR
    * starts automated tour that goes through all of the assigned points of interests. Tour stops at every POI and stops for 10 second.
* STOP TOUR
    * stops automated tour
* POINTS OF INTEREST
    * displays points of interest as a  list. Clicking on POI name moves view to the assigned point of interest. Clicking the green info icons next to the POIs will move user next to the POI and open assigned point of interest as a fullscreen view

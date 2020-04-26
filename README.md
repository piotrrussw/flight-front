# Flight App
App that allow user to search for flight, airport and save it to favorites.
Developed for my University Internet Engineering class. 

## Demo
App is deployed with Heroku
[LINK](https://flight-app-ie.herokuapp.com)

## App overview
App is design for auth only use. From the home screen you can either sign in or sign up
<br/>

![Home screen](src/assets/readme/home-screen.png?raw=true "Title")
<br/>
<br/>
<br/>

The sign up form requires valid email, username which doesn't have to be unique for all users, and secure password

![Sign up](src/assets/readme/sign-up.png?raw=true "Title")
<br/><br/><br/>

After successful authentication you can find flights that fit your needs. 
The flights search requires origin and destination place as an input and deliver all available flights, with price and exact time.
Moreover, you can find all airports in Europe capital cities, filtered by city as shown on the photo below.
<br/>

![Airports](src/assets/readme/airports.png?raw=true "Title")
<br/>
<br/>
<br/>

After clicking heart icon, airport is added to favorites in user database, so by visiting
"Favorites" tab in menu user can see all his favorites airports and flights.
<br/>

![Favorites](src/assets/readme/favorites.png?raw=true "Title")
<br/>
<br/>
<br/>

Profile tab shows user nickname, avatar and allow to logout, delete account
<br/>

![Favorites](src/assets/readme/profile.png?raw=true "Title")
<br/>
<br/>

## Repository 
[REPO](https://github.com/KISiM-AGH/IE-project-nr-indeksu-299772)

## Run local

```
npm install
npm start
```

## Used API
[FlightAPI](https://github.com/piotrrussw/flight-api) API

## Project
[LINK](https://xd.adobe.com/view/aa03ef8e-d5f9-470c-55bf-d0260b49d036-dc32/grid)

## Technologies
* React
* ReactRouter
* State management: ContextAPI + React Hooks
* MaterialUI

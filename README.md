# Assignment 1 - ReactJS app.

Name: Ling Feng

## Overview.

This is the first assignment project of Web App Dev 2 course.
This project is a pure front-end web application based on reactjs. The topics and contents are derived from the movie data base.

### Features.


+ Top rated movies page
+ A page listing all popular people
+ Full caching support
+ Detailed information page of a popular person with parameterized URLs
+ Added pagination on home page, upcoming page and top-rated page
+ Enhanced the readability and typography of images in movie details page
+ Added a new filter on discover page, allowing filter by language attribute
+ Adjusted the movie details page to show more attributes
+ Implement Firebase third-party authentication
+ Added code-splitting

## Setup requirements.

adjust .env file and related dependencies

## API endpoints.



e.g.
+ Top-rated movies list - /movies/top-rated
+ Popular people list - /person
+ Popular person details page - /person/:id
+ Login Page - /login
+ Register Page - /register

## Routing.



+ /movies/top-rated - show all movies that have a high rating.
+ /person- show a list of popular people with high popularity value.
+ /person/:id - show detailed view of a particular popular person.
+ /login - allow you to log in via google account or email
+ /register - use this page to create a new account


## Independent learning (If relevant).



pagination
Applied to home page, upcoming page and top-rated page
Official instructions: https://mui.com/material-ui/react-pagination/#basic-pagination
Self-study material: https://dzone.com/articles/reactjs-pagination-how-to-page-your-data-with-reac

third-party authentication
Allow logging in with Gmail and registering a new account via email
Tutorial for using google for authentication: https://firebase.google.com/docs/auth/web/google-signin
Solutions for installation errors: https://bobbyhadz.com/blog/react-module-not-found-cant-resolve-firebase#:~:text=To%20solve%20the%20error%20%22Module%20not%20found%3A%20Error%3A,npm%20install%20firebase%20and%20restart%20your%20development%20server.

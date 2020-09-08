# Affirmations

Affirmations is an app created by [Margaret Huang](https://github.com/margaret-jihua), [Steven Michaud](https://github.com/Michaudsr), and [Tanner Leigh](https://github.com/thleigh) through React and MongoDB that encourages and informs users that are struggling or just curious about suicide and depression.
It is simple by nature, allowing it to be accessible to everyone and beautiful to the eye to make it less intimidating to the average user. 
Affirmations strives to be a safe place for all and keeps the mental and physical safety of its users as its highest priority.

Site: 

Back-end Repo: [Back-end](https://github.com/thleigh/Affirmations-Backend)

## Features
<hr/>

*  Every user will be greeted with a daily inspirational quote that can be changed based off of how they're feeling. Users can save quotes to their profile and submit quotes of their own.
*  Users will have access to the suicide prevention hotline and find professional help in their area. If they feel intimidated to do so, users can chat with other users for more personal advice.

## Technologies
<hr />

* React
* Affirmations API
* Map-Box Api
* Passport/Authapp
* Mongoose
* Heroku
* [React-FullPage](https://github.com/alvarotrigo/react-fullpage)

## Preparation 
<hr/>

![ERD](./README-assets/erd.png)

![wireframe](./README-assets/wireframe.png)

## Component Hierarchy:

```
App
|--NavBar
|
|---Signup
|
|---Login
|
|---Profile(Private)
|   |--MoodTeacker 📍
|
|---FullPage
|   |--Welcome
|   |   |--Comment 📍
|   |   |--QuoteCategory 📍
|   |--Resources 📍
|   |   |--MapBox 📍
|   |--About 🖍
|
|--Footer
```
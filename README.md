# Affirmations

Affirmations is an app created by [Margaret Huang](https://github.com/margaret-jihua), [Steven Michaud](https://github.com/Michaudsr), and [Tanner Leigh](https://github.com/thleigh) through React and MongoDB that encourages and informs users that are struggling or just curious about suicide and depression.
It is simple by nature, allowing it to be accessible to everyone and beautiful to the eye to make it less intimidating to the average user. 
Affirmations strives to be a safe place for all and keeps the mental and physical safety of its users as its highest priority.

Site: 

Back-end Repo: [Back-end](https://github.com/thleigh/Affirmations-Backend)

## Features
<hr/>

*  Every user will be greeted with a daily inspirational/affirming quote. Users can save quotes to their profile by liking and submit quotes of their own.
*  Users will have access to the suicide prevention hotline and find professional help in their area. If they feel intimidated to do so, users can chat with other users for more personal advice.

## Technologies
<hr />

* React
* Map-Box Api
* Passport/Authapp
* Mongoose
* Heroku
* [React-FullPage](https://github.com/alvarotrigo/react-fullpage)
* React Bootstrap

## Preparation 
<hr/>
Below is the ERD that we created to plan out our models. Having an ERD was an essential tool for our planning process. It helped us visually see our models and provide the team with efficient time to code. 
To further prove our point. We initially thought we needed 4 models, but after creating the ERD, we realized we only needed 2. This saved us a lot of time.

![ERD](./README-assets/erd.png)

<hr/>
This is our wireframe. We made a wireframe to set what we wanted to see on our website before writing a single line of code. Although the final site does not look exactly the same, it saved us a lot of time. 

![wireframe](./README-assets/wireframe.png)

## Keeping Organized
<hr/>
A powerful tool that helped the team keep organized was [Trello](https://trello.com/).
We set our Trello board to have a column for To-do, Work in Progress, Pull Request/Merge, Merged, Done, Project Resources, and Strech Goals. This helped us keep track of each team member's progress and where we needed to spend
more of our time. It helped us organize sprints and effectively and satisfyingly see our goals.

![trello](./README-assets/trello.png)

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

# Conclusion
Affirmations was started on September 4th, 2020 and was completed on September 11th, 2020. Approximately 50% of this site was created through pair programming. Each member played an essential role in the creation of this site and we are very proud of the outcome. Please contact us if you would like to know more about our project and/or if you have any job openings for us 🥰.
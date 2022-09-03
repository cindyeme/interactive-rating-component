# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Active-states](./screenshots/active-states.jfif)
![Desktop-Design](./screenshots/desktop-design.jfif)
![Desktop-Thanks-Design](./screenshots/thanks-design.jfif)
![Mobile-Design](./screenshots/mobile-design.jfif)
![Mobile-Thanks-Design](./screenshots/thanks-mobile.jfif)


### Links

- Solution URL: [Github solution URL](https://github.com/cindyeme/interactive-rating-component)
- Live Site URL: [Live site URL](https://cindyeme-rating.netlify.app)

## My process

### Built with

- JSX
- CSS custom properties
- Mobile-first workflow
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [React](https://reactjs.org/) - JS library


### What I learned

I learned how to work with forms and state management using React hooks.

Some code snippet:

```js
  // checks if user has rated and if true, display the "thank you" card
  const [rated, setRated] = useState(false);
  // stores rate value
  const [rate, setRate] = useState(0);
  // used to display error when user tries to submit at zero rate
  const [error, setError] = useState("");

  // handle input change
  const handleChange = (e) => {
    setRate(e.target.value);
    setError("");
  };

  // handle form submission 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rate !== 0) setRated(true);
    if (rate === 0) setError("Please select a rate!");
  };
```

### Continued development

I will move on to learning about and working with APIs on FrontendMentor challenges.


### Useful resources

- [React Hooks](https://reactjs.org/docs/hooks-intro.html) - This helped me with state management. I really liked its simplicity and will use it going forward.


## Author

- LinkedIn - [Emerenini Cynthia Ngozi](https://www.linkedin.com/in/emerenini-cynthia-ngozi)
- Frontend Mentor - [@cindyeme](https://www.frontendmentor.io/profile/cindyeme)
- Twitter - [@CynthiaENgozi1](https://www.twitter.com/cynthiaengozi1)


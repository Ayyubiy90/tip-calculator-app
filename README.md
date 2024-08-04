# Frontend Mentor - Tip Calculator App Solution 💰🧮

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents 📑

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)

## Overview 🔎

### The Challenge 🎯

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot 📸

#### Desktop Preview
![](./Preview/Screenshot%20(39).png)

#### Desktop active-states preview
![](./Preview/Screenshot%20(40).png)

#### Mobile Preview
![](./Preview/mobile-design.jpg)

### Links 🔗

- Solution URL: [Tip calculator solution](https://www.frontendmentor.io/solutions/vanilla-javascript-mobile-first-workflow-fAaMpg9GdT)
- Live Site URL: [Tip calculator app](https://tip-calculator-app-one-ebon.vercel.app/)

## My Process 🛠️

### Built With 🧱

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I Learned 🧠

During this project, I gained valuable experience in:

- Implementing a responsive design using CSS Flexbox and Grid
- Creating an interactive calculator with JavaScript
- Handling user input and performing real-time calculations
- Implementing custom styling for form elements

Here are some code snippets I'm particularly proud of:

```javascript
function calculateTip() {
  if (billValue > 0 && numberOfPeople > 0) {
    const tipAmount = (billValue * tipPercentage) / 100 / numberOfPeople;
    const totalPerPerson = billValue / numberOfPeople + tipAmount;

    tipAmountElement.textContent = `$${tipAmount.toFixed(2)}`;
    totalPerPersonElement.textContent = `$${totalPerPerson.toFixed(2)}`;
  } else {
    tipAmountElement.textContent = "$0.00";
    totalPerPersonElement.textContent = "$0.00";
  }
}
```

```css
.calculator {
  background-color: var(--white);
  border-radius: 1.5rem;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  max-width: 920px;
  width: 100%;
  height: 29.5rem;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.05);
}
```

### Continued Development 🚀

Moving forward, I plan to focus on:

- Enhancing my JavaScript skills, particularly in handling complex user interactions
- Improving accessibility features in my projects
- Exploring more advanced CSS techniques for creating visually appealing designs

### Useful Resources 📚

- [MDN Web Docs](https://developer.mozilla.org/) - An invaluable resource for HTML, CSS, and JavaScript references.
- [CSS-Tricks](https://css-tricks.com/) - Great for learning about Flexbox and Grid layouts.

## Author 👨‍💻

- Website - [Abdullah](https://social-links-profile-rose-mu.vercel.app/)
- LinkedIn - [LinkedIn](https://www.linkedin.com/in/abdullah-a-2940b7260/)
- Frontend Mentor - [Abdullah](https://www.frontendmentor.io/profile/Ayyubiy90)
- Twitter - [Abdullah](https://www.twitter.com/ayyubiy10)
- Instagram - [Abdullah](https://www.instagram.com/ayyubiy_10)

## Acknowledgments 🙏

A special thank you to Frontend Mentor for providing this challenge. I also appreciate the community for their inspiration and support!
# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://github.com/DOOMSDAY101/Tip-app-calculator)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

While working on this project, It was quite a bit of challenge for me because this is my first ever project written in Javascript.
CSS Flexbox came in real handy for me to properly space my content properly.
I properly learnt how to use thee trycatch statement in Javascript.


```html
<input type="text" id="amount" value="0.00" maxlength="14" oninput="bill()" onchange="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">
<!--I used this code to filter the input to only accept numerical values-->
```
```css
div.tip-person {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 30px 0 25px 20px;
}
/* I used flexbox to properly space the text */
```
```js
try {
      if (no.value < 0) throw "Input only postive value";
    } catch (error) {
      text3.innerHTML = error;
    }
// I used the code in javascript to handle the errors in my code properly
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### Continued development

For my next project I want to focus more on Javascript and make better code with it.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.w3schools.com) - This helped me for my resposnsive website design.
- [Example resource 2](https://www.jsfiddle.net) - This is an amazing article which helped me finally understand which finally helped me understand som javascript concept.

## Author

- Website - [Sulaiman Ifeoluwa](https://ifeoluwasulaiman-ifeoluwa.netlify.app)
- Frontend Mentor - [@DOOMSDAY101](https://www.frontendmentor.io/profile/DOOMSDAY101)
- Twitter - [@Sulaiman_Ife](https://www.twitter.com/Sulaiman_Ife)


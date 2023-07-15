# Binary Clock, Matthias Bartholomaeus

https://user-images.githubusercontent.com/104579175/224365736-cfc431fc-688f-48e8-8a50-d1bba9e7d4da.mov

This project represents a binary clock where every decimal digits represents a four digit binary number. This porject was created in `React.js` because it lets you easily extract logic in seperate components and lets you easily update the HTML-DOM with handling a state internally that, when changed automatically updates the according HTML Elements. Typescript was not used on purpose because to bootstrap for smaller projects its faster to avoid static types. Typescript is usually helpful for bigger projects where you need to define interfaces. 

## React.js
React is a frontend Javascript library for building user interfaces based on components. It is maintained by Meta and nowadays able to build everything. React allows you to build mobile applications, single page application or in the framework Next.js server side components, which get rendered on the server. 

### Basic Intro
React Components are functions which return JSX, a HTML based extension to JavaScript. 
```
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```
In the Components its able define States with the factory method useState(x) whose parameter x is the initial state. It returns an array whose first element is a binding to the auto updating state and second element is the function to call to update the state. 
```
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }
```
Merging all together:
So after knowing how JSX and states work the question arises, how the full React components looks like then:
```
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}
```
## How to convert decimal to binary in Javascript 
Every programming language offer similar syntax but vary in basic data type function. Therfore i was looking for a convenient way to...
1. Get the new time 
2. split the time in hour minutes and seconds 
3. convert the digits into binary format 

The solution i came up with:
1. create new date object, to get current date and time from computer clock 
2. split every component (hours, minutes, seconds) into digit one and digit two 
3. convert every single digit into a string which represents the digit in binary format with `n.toString(2);` where n represents the `int`decimal number and `2`the base to which convert to. 

In the end i return an array of every single digit of the time in binary format represented by a string.

`return [hDigitTwoStr, hDigitOneStr, mDigitTwoStr, mDigitOneStr, sDigitTwoStr, sDigitOneStr]`
## Start it!!

In the project directory, you can run:

### At first type `npm install` to install all needed packages, like React

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.



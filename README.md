# Exercise 6: Using `Built-in functions in javaScript`

### Task: How to fork a repository on GitHub.com

1. Click on the **Fork** icon at the top right corner of the repository page on GitHub.com.

2. On the next screen, click the green **Create fork** button to create your own copy of the original repository.

3. Once the fork is created, click the green **Code** button and select **Open with GitHub Desktop**.

4. In GitHub Desktop, clone the repository by choosing a **Local Path** where you want to store a copy on your computer. When prompted about how you plan to use this fork, select **For my own purposes**.


## JavaScript Task:

1. In this exercise, the HTML and CSS are provided to you as index.html and css/style.css.
Note: You should not modify the css/style.css file; focus only on the JavaScript functionality.

2. Ensure `"use strict"` is at the top of your script.

3. On the HTML page (index.html), locate the button:
   ```html
    <button id="generate-btn" onclick=''>Generate Random Number</button>
   ```
   The `onclick` attribute is currently empty.

4. Edit the HTML page and manually add the `function` name `generateRandomNumber()` inside the `onclick attribute`.
This ensures the button will call the `generateRandomNumber()` function when clicked. 

5. In the script.js file, create a JavaScript function named generateRandomNumber:
   ```javaScript
   function generateRandomNumber() {
    // function logic here
   }
   ``` 

6. Link to the JavaScript file `js/script.js` from the provided HTML.

7. Inside the `generateRandomNumber function`:
Create a variable using `const` named `randomNumber`.
Assign it to generate a random number between 1 and 100 using `Math.random()` and `Math.floor()`.

8. Log the variable randomNumber to the console using `console.log` for debugging.

9. Use `document.getElementById` to update the `<p>` element with `id="random-number"` to display the random number on the webpage.

10. Use the `alert()` method to show the random number to the user in a pop-up box.

11. Open Go Live in your VS Code editor and check that the content has been updated. 


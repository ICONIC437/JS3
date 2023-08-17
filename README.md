# Assignment-3-JS

**Assignment Instructions**

This document provides detailed instructions for completing the assignment. The goal of this assignment is to create a web page that fetches and displays JSON data using modern JavaScript techniques. Follow the steps outlined below to successfully complete the assignment.

### 1. Create a JSON File

- Create a JSON file with a name relevant to its contents.
- Inside the JSON file, define an array containing at least 6 JSON objects.
- Each JSON object should have a minimum of 4 properties.
- One property within each object must be an image link pointing to a free image source provided.

### 2. GitHub Repository Setup

- Create a new repository on GitHub.
- Choose a name that aligns with your JSON file's content.
- Add a simple description in the repository's README file.
- Upload or submit your JSON file to this repository.
- Configure the repository as a GitHub Pages website.

### 3. Create HTML Page (index.html)

- Create an HTML5 file named `index.html`.
- Within the HTML file, create an HTML element (e.g., `<div>`) or another suitable block-level element.
- Assign a unique ID to this element; it will be used to display the JSON contents.
- You can structure the element to facilitate a nicely formatted layout using various HTML elements.

### 4. External JavaScript File (script.js)

- Create a JavaScript file named `script.js`.
- Place this file inside a sub-folder named "js" within your main folder.
- All your JavaScript code should be placed within this file.
- Make sure to link the JavaScript file to the HTML file using a `<script>` tag.
- Use the `fetch()` method, combined with promises, to retrieve the JSON file from your GitHub repository.
- Display the fetched JSON contents inside the designated HTML element in the HTML file.

**Note:** Add the script link at the end of the HTML file, just before the closing `</body>` tag, as discussed in lectures. This ensures proper execution and prevents blocking rendering.

### 5. External Style Sheet (styles.css)

- Create a CSS file named `styles.css`.
- Place this file inside a sub-folder named "css" within your main folder.
- Define all your CSS rules and styles within this file.
- Link the CSS file to the HTML file using a `<link>` tag in the `<head>` section.
- Feel free to apply any styling you prefer to enhance the appearance of the HTML page. However, prioritize completing the JavaScript requirements before focusing on styling.

### 6. Folder Organization

- Ensure that the HTML file (`index.html`), the JavaScript file (`script.js`), the CSS file (`styles.css`), and their respective sub-folders ("js" and "css") are all located within the main (root) folder of your project.

Following these instructions step by step will lead you to a completed assignment that fetches and displays JSON data on a web page using JavaScript. Remember to regularly commit your changes to your GitHub repository as you work through the assignment. Good luck!

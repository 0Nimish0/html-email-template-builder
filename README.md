HTML Email Template Builder

A browser-based HTML email template builder built with HTML, CSS, and JavaScript. The project allows users to select an email template, edit its content and styling, upload images, and preview the design in desktop and mobile layouts.

Features

* Select between multiple pre-designed email templates
* Edit email headings, paragraphs, and button text
* Change heading and button colors
* Adjust heading font size
* Edit button links
* Upload custom logos and banner images
* Change email background styling
* Preview templates directly in the browser
* Switch between mobile and desktop preview modes
* Responsive email layouts
* Separate templates for sales, welcome, and newsletter campaigns

Templates

The builder currently includes:

Sale Email — promotional and seasonal campaign design
Welcome Email — new customer or community welcome design
Newsletter — monthly updates and announcement design

Technologies Used

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* FileReader API
* Responsive Web Design

## Project Structure


html-email-template-builder/
│
├── images/
│   ├── NPW.png
│   └── brand-image.png
│
├── js/
│   └── app.js
│
├── templates/
│   ├── newsletter.html
│   ├── sale.html
│   └── welcome.html
│
├── index.html
├── style.css
└── README.md


How to Run

1. Clone the repository:

git clone https://github.com/0Nimish0/html-email-template-builder.git

2. Open the project folder in VS Code.

3. Open `index.html` using a local development server such as **Live Server**.

4. Select a template and use the editor panel to customize the email.

How It Works

The application loads the selected HTML email template into the preview area.

JavaScript identifies elements marked with `data-edit` attributes and dynamically creates editing controls for those elements.

Users can then modify the template directly through the editor panel. Changes are reflected immediately in the preview.

The project also uses the **FileReader API** to allow users to upload custom images and display them inside the selected email template.

Purpose

This project was created to practice building practical web applications using JavaScript and DOM manipulation while exploring HTML email design and email campaign workflows.

Future Improvements

* Add more email templates
* Add reusable color themes
* Add template saving and loading
* Add email HTML export
* Add copy-to-clipboard functionality
* Add more advanced responsive email controls
* Add additional email campaign components

Author

Nimish

Web Developer | HTML | CSS | JavaScript | DOM | APIs | CMS

GitHub: https://github.com/0Nimish0

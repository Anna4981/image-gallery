Image Gallery

Veda Technology Web Development Internship: Level 1, Day 9 (Task 9)

A responsive image gallery built with HTML5, CSS3 and JavaScript. Images are displayed in a CSS Grid, and clicking an image opens it in a lightbox preview with a close button.

Features
Responsive image grid built with CSS Grid (adjusts to any screen size)
8 images, each with alt text
Clickable image preview (lightbox) that shows the selected image larger
Close button on the preview
Extra: close the preview with the Escape key or by clicking the dark background
Hover zoom effect on gallery images
Technologies Used
HTML5
CSS3 (Grid, media queries, transitions)
JavaScript (DOM manipulation and click events)
Project Structure
image-gallery/
├── index.html   # Page structure, gallery images and lightbox markup
├── style.css    # Grid layout, lightbox styling and responsive rules
├── script.js    # Click events to open and close the lightbox
└── README.md    # Project documentation
How to Run
Download or clone the project folder.
Make sure index.html, style.css and script.js are in the same folder.
Open index.html in any web browser.

An internet connection is needed if the images are loaded from online sources.

How It Works
Gallery: .gallery uses display: grid with repeat(auto-fill, minmax(220px, 1fr)), so the number of columns changes automatically with screen width. A media query switches to 2 columns on small phones.
Opening the preview: Each image has a click event listener. When clicked, JavaScript copies that image's src and alt into the lightbox and adds the open class, which changes it from display: none to display: flex.
Closing the preview: The close button, a click on the background, or the Escape key removes the open class and hides the lightbox again.
Accessibility
Every image has descriptive alt text.
The close button has an aria-label.
The lightbox uses aria-hidden to show whether it is visible.
Customising

To use your own photos, open index.html and change the src and alt of each <img> inside the .gallery section. Images can come from Unsplash or your own folder.

Interview Questions

Why is alt text important? It lets screen readers describe images to visually impaired users, it appears if an image fails to load, and it helps search engines understand the image.

What is a CSS Grid? A two-dimensional layout system that arranges items into rows and columns, making responsive layouts simple without floats or complex positioning.

How can JavaScript show and hide an element? By adding or removing a CSS class with classList.add() and classList.remove() (or by changing element.style.display) when an event such as a click happens.

Author

Anna Makgabo Thantsha# image-gallery

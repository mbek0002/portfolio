# My portfolio

Building my portfolio has been a fun and exciting experience. I started by finding appropriate color palettes, fonts and mood I wanted to express through my portfolio. I later designed the logo and UI pages, from low fidelity sketches to high fidelity wireframes and prototypes.

The implementation was much more easier as I had already created a style guide when designing and I just had to follow up the designs. My portfolio focuses on 2 main aspect I am passionate about, which are, UI/UX design and Web development. It highlight different case studies of past projects I’ve worked on. 

## Challenges
One of the challenges I faced in the development of my portfolio was was filtering the projects on the portfolio page on page-load, based on project type(design or web). This feature is needed when redirecting users to the portfolio page once they click on the web or design card in the home page. On clicking "design projects", the user is redirected to the portfolio page and only the design projects should be filtered and displayed.
This was accomplished by appending the project type as hash value on the URL when redirecting to the portfolio page. The project type is then retrived from the URL when the page loads the first time and passed as an argument to the JS function that does the project filtering


Another thing I learned from building my portfolio is animating svg images, like I did with the svg on the contact page. It always feels great to learn something new and gain experience as I pursue my journey in this field.

## Assets/Resources

### Images:
Stock images from pexel (https://www.pexels.com/)
- CTA (images/cta-image.jpg)
- Header (images/page-title.png)
- Web placeholder (images/web-projects.jpg)
- Design placeholder (images/design-projects.jpg)

### Fonts:
Century gothic for the body
Playfair display for the headings 

### Frameworks:
Bootstrap5 throughout the website
JQuery 

### Libraries:
- Owl carousel (https://owlcarousel2.github.io/OwlCarousel2/), for the slider images in the home page and project detail pages.
- Animate on scroll(https://michalsnik.github.io/aos/)
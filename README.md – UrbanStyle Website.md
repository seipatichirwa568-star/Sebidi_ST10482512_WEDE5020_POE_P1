# UrbanStyle Website

## Student Information

**Student Name:** Atlegang Sebidi  
**Student Number:** ST10482512  
**Website Name:** UrbanStyle  
**Project Type:** HTML and CSS Website  
**Year:** 2026

---

## 1. Project Overview

UrbanStyle is a modern fashion and lifestyle website created to showcase creative styling services, custom designs and fashion ideas. The website was designed to provide visitors with an attractive and simple way of learning about the business, viewing its creative work and contacting the organisation.

The website consists of five main pages: Home, About Us, Services, Gallery and Contact. Each page has been connected through a navigation bar so that users can easily move between different sections of the website.

The website was developed using HTML and CSS. JavaScript was not used in the project.

---

## 2. Purpose of the Website

The main purpose of the UrbanStyle website is to create an online presence for a modern fashion and lifestyle business.

The website allows visitors to:

- Learn more about UrbanStyle.
- View the services offered.
- Browse a gallery of creative work.
- Find contact information.
- Submit an enquiry through the contact form.
- Navigate between the different pages using the navigation menu.

The design focuses on being simple, colourful and easy to understand while still giving the website a professional appearance.

---

## 3. Technologies Used

### HTML5

HTML was used to create the structure and content of the website. HTML elements were used for headings, paragraphs, navigation links, images, forms, sections and footers.

The HTML pages used in this project are:

- `index.html`
- `about.html`
- `services.html`
- `gallery.html`
- `contact.html`

HTML provides the basic structure of web pages and allows different types of content, including images and navigation links, to be displayed in a browser (MDN Web Docs, 2026a).

### CSS3

CSS was used to control the visual appearance and layout of the website.

The `style.css` file controls:

- Colours
- Fonts
- Spacing
- Navigation
- Buttons
- Cards
- Gallery layout
- Contact form
- Footer
- Responsive design
- Hover effects

CSS is used to describe how HTML content should be presented on a webpage and is an important part of modern web development (MDN Web Docs, 2026b).

### Visual Studio Code

Visual Studio Code was used as the development environment for creating and editing the website files.

### Live Server

Live Server can be used to preview the website locally in a web browser while developing the pages.

---

## 4. Website Structure

The project contains the following files:

```text
UrbanStyle/
│
├── index.html
├── about.html
├── services.html
├── gallery.html
├── contact.html
├── style.css
│
└── images/
    ├── picture1.jpg
    ├── picture2.jpg
    ├── picture3.jpg
    ├── picture4.jpg
    ├── picture5.jpg
    └── picture6.jpg
```

---

## 5. Page Descriptions

### 5.1 Home Page – `index.html`

The Home page is the first page visitors see when opening the website. It introduces UrbanStyle and provides a short overview of the business.

The page contains:

- Navigation bar
- UrbanStyle logo
- Welcome section
- Main heading
- Call-to-action buttons
- Main features
- Footer

The buttons provide links to the Services and Contact pages.

---

### 5.2 About Us – `about.html`

The About Us page provides information about UrbanStyle, including its story, identity, mission, vision and values.

This page helps visitors understand what the organisation represents and what it aims to achieve.

The page contains:

- Company introduction
- Our Story section
- Company identity
- Mission
- Vision
- Values

---

### 5.3 Services – `services.html`

The Services page provides information about the different services offered by UrbanStyle.

The services displayed include:

1. Personal Styling
2. Custom Designs
3. Creative Consultation
4. Event Styling

Each service is displayed using a card layout. The cards also contain links that direct users to the Contact page.

---

### 5.4 Gallery – `gallery.html`

The Gallery page is used to display images related to UrbanStyle's creative work.

The gallery contains six image sections. Images are stored inside the `images` folder and are connected to the webpage using the HTML `<img>` element.

The gallery can be updated by replacing the existing image files with new images while keeping the correct file names.

---

### 5.5 Contact Page – `contact.html`

The Contact page provides visitors with different ways to contact UrbanStyle.

The page includes:

- Email address
- Telephone number
- Location
- Contact form
- Name field
- Email field
- Service selection
- Message field
- Send Message button

The contact form is currently a front-end design only. No backend database or email service has been connected to the form.

---

## 6. Design Features

The website uses a modern colour scheme based mainly on purple, white and dark colours.

The design includes:

- A purple accent colour.
- Rounded cards.
- Modern buttons.
- Consistent navigation.
- Responsive layouts.
- Hover effects.
- Clear headings.
- Image gallery.
- Structured footer.
- Contact form.

The use of CSS allows the same design rules to be applied across all five pages, creating a consistent visual identity throughout the website.

CSS also supports responsive layouts that can adapt to different screen sizes (MDN Web Docs, 2026b).

---

## 7. Navigation

The navigation bar is included on every webpage.

The navigation links are:

| Page | File |
|---|---|
| Home | `index.html` |
| About Us | `about.html` |
| Services | `services.html` |
| Gallery | `gallery.html` |
| Contact | `contact.html` |

This allows users to move between the different pages without having to return to the Home page first.

---

## 8. Images

Images used on the website are stored in the `images` folder.

The Gallery page uses HTML image elements such as:

```html
<img src="images/picture1.jpg" alt="Modern fashion style">
```

The `alt` attribute provides alternative text describing the image. This helps improve the accessibility of the website.

When adding new images, the image file should be placed inside the `images` folder and the file name in the HTML code should match the actual file name.

---

## 9. Responsive Design

The website includes responsive CSS rules using media queries.

This allows the website layout to change depending on the screen size. For example, multiple-column sections can change to single-column layouts on smaller screens.

The responsive design makes the website easier to view on:

- Desktop computers
- Laptops
- Tablets
- Mobile devices

Responsive layout techniques are supported through modern CSS features and standards (W3C, 2026).

---

## 10. JavaScript

JavaScript was intentionally excluded from this project.

The website was developed using only:

- HTML
- CSS

The website therefore focuses on the structure, presentation and navigation of the webpages without using JavaScript functionality.

---

## 11. How to Run the Website

To run the website:

1. Open the `UrbanStyle` folder in Visual Studio Code.
2. Make sure all HTML files and `style.css` are in the main project folder.
3. Make sure the `images` folder is also inside the project folder.
4. Open `index.html`.
5. Right-click the file.
6. Select **Open with Live Server**.
7. The website will open in the default web browser.
8. Use the navigation menu to move between the pages.

If Live Server is not installed, the HTML files can also be opened directly in a web browser.

---

## 12. Testing

The website should be tested to make sure that:

- All navigation links work.
- All five webpages open correctly.
- The CSS file is connected to every page.
- Images display correctly.
- The gallery images use the correct file paths.
- The contact form displays correctly.
- Buttons and links work as expected.
- The website layout adjusts on smaller screens.
- There are no broken image links.
- The website has a consistent design across all pages.

---

## 13. Limitations

The current version of the website is mainly a front-end website.

The contact form does not send information to an actual email address or database because no backend functionality has been implemented.

The website also does not contain JavaScript functionality because JavaScript was excluded from the project requirements.

---

## 14. Future Improvements

Future versions of the website could include:

- A working contact form connected to a database.
- Online booking functionality.
- Customer accounts.
- An online shopping section.
- Product pricing.
- Search functionality.
- JavaScript-based interactive features.
- Social media integration.
- An online payment system.
- More gallery categories.

These features could make the website more interactive and suitable for a real business environment.

---

## 15. Conclusion

UrbanStyle is a multi-page fashion and lifestyle website developed using HTML and CSS. The website provides visitors with information about the organisation, its services, creative work and contact details.

The project demonstrates the use of basic web development concepts such as HTML page structure, navigation, images, forms, CSS styling, responsive design and reusable stylesheets.

The use of a separate CSS file also helps maintain consistency across the different webpages and makes the website easier to update.

---

# References

MDN Web Docs. 2026a. *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 14 August 2026).

MDN Web Docs. 2026b. *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 14 August 2026).

MDN Web Docs. 2026c. *Web technology for developers*. Available at: https://developer.mozilla.org/en-US/docs/Web (Accessed: 14 August 2026).

W3C. 2026. *Cascading Style Sheets*. Available at: https://www.w3.org/Style/CSS/Overview.en (Accessed: 14 August 2026).

W3C. 2026. *W3C standards and drafts*. Available at: https://www.w3.org/TR/ (Accessed: 14 August 2026).

# UrbanStyle | WEDE5020 Part 3 Portfolio of Evidence

**Student Name:** Atlegang Sebidi  
**Student Number:** ST10482512  
**Institution:** Rosebank College  
**Module:** Web Development (Introduction) – WEDE5020  
**Project:** UrbanStyle – Fashion and Styling Website  
**Documentation Updated:** 28 October 2026

---

## 1. Project Links and Deployment

**GitHub Repository:**  
https://github.com/seipatichirwa568-star/Sebidi_ST10482512_WEDE5020_POE_P1

**GitHub Pages Website:**  
https://seipatichirwa568-star.github.io/Sebidi_ST10482512_WEDE5020_POE_P1/

**Previously Published Netlify Website:**  
https://urbanstyle-st10482512.netlify.app/

**GitHub Branch:** master

The website is stored on GitHub and can be published using GitHub Pages, following the WEDE5020 lecturer's deployment instructions.

The GitHub Pages address must be tested before it is submitted as the final live website link.

---

## 2. Project Overview

UrbanStyle is a student-developed fashion and lifestyle website concept.

The website introduces personal styling, custom designs, creative consultations and event styling services.

Visitors can explore services, view fashion inspiration photographs and complete enquiry or contact forms.

The website was developed in three stages:

**Part 1 – HTML:** Created the original website structure and pages.

**Part 2 – CSS:** Improved the website appearance, typography, colours and responsiveness.

**Part 3 – JavaScript:** Added interactive features, validation, dynamic content, SEO improvements and deployment.

HTML creates the website structure, CSS controls the visual appearance and JavaScript allows visitors to interact with the website (MDN Web Docs, s.a.-a; s.a.-b).

The business information and photographs are illustrative. They are not evidence of completed commercial work.

---

## 3. Website Pages

| Page | Filename | Purpose |
|---|---|---|
| Home | index.html | Introduces UrbanStyle and its services |
| About | about.html | Explains the project and frequently asked questions |
| Services | services.html | Displays searchable and sortable services |
| Gallery | gallery.html | Displays fashion inspiration photographs |
| Enquiry | enquiry.html | Allows visitors to enquire about services |
| Contact | contact.html | Provides a general contact form and illustrative map |

All pages are connected through the navigation menu.

---

## 4. Technologies Used

### HTML5

HTML5 was used to structure the website with elements such as header, nav, main, section, article and footer.

It was also used to create forms, labels, buttons, lists and images.

### CSS3

An external stylesheet controls the appearance of all six pages.

The website uses:

- CSS Grid and Flexbox
- Consistent purple colours
- Responsive layouts
- Typography and spacing
- Hover and focus effects
- Responsive images
- Media queries

The main stylesheet is `CSS/style.css`.

### JavaScript

JavaScript was used to implement:

- Mobile navigation
- Searchable services
- Category filtering
- Alphabetical sorting
- Dynamic service cards
- Gallery lightbox
- Scroll animations
- Enquiry guidance
- Form validation

These features use arrays, functions, event listeners and DOM manipulation (MDN Web Docs, s.a.-b).

### Leaflet and OpenStreetMap

Leaflet and OpenStreetMap were used to display an interactive Johannesburg-area map.

The map illustrates an area and does not represent a verified physical store location (Leaflet, s.a.).

### Git and GitHub

Git tracks changes made during development.

GitHub stores the project files and commit history.

The website is maintained on the `master` branch.

---

## 5. Part 2 Feedback and Improvements

The website received **70/100** for Part 2.

The lecturer's feedback helped identify areas that needed improvement.

### 5.1 Layout Structure

**Previous Mark:** 2/5

The lecturer indicated that some elements had alignment and spacing problems.

**Improvements:**

- Improved page containers.
- Applied CSS Grid and Flexbox.
- Adjusted spacing around sections.
- Used consistent card padding.
- Improved mobile layouts.

### 5.2 Decoration and Colour

**Previous Mark:** 3/5

The website contained colours and decorative elements but needed consistency.

**Improvements:**

- Used matching purple shades.
- Improved buttons and borders.
- Used consistent card backgrounds.
- Applied hover and focus styling.

### 5.3 Typography

**Previous Mark:** 4/5

Some text styling needed improvement.

**Improvements:**

- Improved heading sizes.
- Adjusted paragraph spacing.
- Applied consistent fonts.
- Improved line height and readability.

### 5.4 Responsive Images

**Previous Mark:** 2/5

Some images were not displaying or adjusting correctly.

**Improvements:**

- Replaced local Windows image paths with relative paths.
- Added responsive sizing.
- Improved image card dimensions.
- Used descriptive alternative text.
- Applied object-fit to improve image presentation.

### 5.5 Responsive Media Queries

**Previous Mark:** 10/10

The website already performed well in this area.

Responsive breakpoints were retained to support desktop, tablet and mobile screens.

### 5.6 CSS Pseudo-Classes

**Previous Mark:** 10/10

The existing hover, focus and active states were retained.

### 5.7 External Stylesheet

**Previous Mark:** 10/10

The external stylesheet was correctly implemented in the website pages.

The website continues to use `CSS/style.css`.

### 5.8 GitHub Commits

**Previous Mark:** 2/5

The lecturer indicated that the commit history needed clearer descriptions.

Descriptive commit messages were used for subsequent development changes.

### 5.9 References

**Previous Mark:** 3/5

In-text citations and a reference list were added to document the technologies and learning resources used.

---

## 6. JavaScript Functionality

### 6.1 Mobile Navigation

A mobile menu button was implemented.

JavaScript uses addEventListener() and classList.toggle() to open and close the navigation.

### 6.2 Dynamic Services

Service information is stored in a JavaScript array.

JavaScript creates and displays service cards.

The available services include:

- Personal Styling
- Custom Designs
- Creative Consultation
- Event Styling

### 6.3 Search and Filtering

Visitors can type into the service search field.

The website filters the results according to the entered keyword.

A category filter helps users find the services they want.

### 6.4 Sorting

The sorting control changes the order of displayed services.

The results update without requiring a full page reload.

### 6.5 Gallery Lightbox

Visitors can click gallery photographs to enlarge them.

The lightbox displays a larger image and its caption.

A Close button allows the visitor to return to the gallery.

### 6.6 Interactive Map

Leaflet provides an interactive map with zoom controls.

The map shows an illustrative Johannesburg area rather than a verified business address.

### 6.7 FAQ Section

The About page contains expandable questions and answers.

### 6.8 Scroll Animations

Selected page elements use reveal animations when they enter the visible screen.

Reduced-motion preferences are considered.

---

## 7. Form Functionality and Validation

### 7.1 Enquiry Form

The Enquiry page contains fields for:

- Full name
- Email address
- Telephone number
- Service selection
- Approximate budget
- Preferred date
- Request description
- Confirmation checkbox

Service-specific guidance helps users explain their requirements.

### 7.2 Contact Form

The Contact page includes:

- Full name
- Email address
- Telephone number
- Message type
- Message
- Confirmation checkbox

### 7.3 Validation

JavaScript checks that visitors enter appropriate information before submission.

The validation includes:

- Required fields
- Email format
- Telephone format
- Minimum character lengths
- Checkbox confirmation
- Error messages

The implementation uses JavaScript techniques from the WEDE5020 lecture slides, including:

- addEventListener()
- value.trim()
- checkValidity()
- if and else
- preventDefault()
- DOM manipulation

(The IIE, 2026).

### 7.4 Form Submission

The original Netlify deployment was configured to handle form submissions.

GitHub Pages supports HTML forms and JavaScript validation but does not independently process Netlify Forms.

Actual message delivery must be tested with a compatible submission service before being confirmed as working on GitHub Pages.

---

## 8. Search Engine Optimisation

SEO improvements were added to make the website easier for search engines to understand.

These improvements include:

- Descriptive page titles
- Meta descriptions
- Relevant keywords
- Structured headings
- Alternative text for images
- Internal links
- Responsive layouts
- robots.txt
- sitemap.xml

These practices follow guidance from Google Search Central (s.a.).

The sitemap should be updated to the confirmed published website address.

---

## 9. Project File Structure

The main project files are organised as follows:

    UrbanStyle/
    |
    |-- index.html
    |-- about.html
    |-- services.html
    |-- gallery.html
    |-- enquiry.html
    |-- contact.html
    |
    |-- CSS/
    |   |-- style.css
    |
    |-- JS/
    |   |-- script.js
    |
    |-- Images/
    |   |-- urban style 1.jpg
    |   |-- urban style 2jpg.jpg
    |   |-- urban style 3.jpg
    |   |-- urban style 4.jpg
    |   |-- urban style 5.jpg
    |   |-- urban style 6.jpg
    |
    |-- README.md
    |-- robots.txt
    |-- sitemap.xml

Image filenames and folder capitalisation must match the HTML references.

---

## 10. Development Changelog

### Version 1.0 – Part 1

- Created the original HTML pages.
- Added basic navigation.
- Introduced the business concept.
- Added photographs and service information.

### Version 2.0 – Part 2

- Created the external CSS stylesheet.
- Improved typography.
- Applied the purple colour theme.
- Styled buttons and cards.
- Added responsive layouts and media queries.

### Version 3.0 – Part 3

**27 October 2026**

- Improved page layout and spacing.
- Corrected gallery image paths.
- Added the Enquiry page.
- Added external JavaScript.
- Implemented mobile navigation.
- Added dynamic service listings.
- Added search, filtering and sorting.
- Added the gallery lightbox.
- Added an interactive map.
- Added JavaScript form validation.
- Added SEO metadata.
- Created robots.txt and sitemap.xml.

### Version 3.1 – Documentation Update

**28 October 2026**

- Updated the README.
- Added the correct GitHub repository address.
- Recorded the master branch.
- Included the existing Netlify website.
- Added the expected GitHub Pages URL.
- Added Part 2 feedback.
- Updated the changelog.
- Included deployment instructions.
- Updated the references.

The GitHub commit history contains the actual record of committed changes.

---

## 11. Website Testing

Before final submission, the following checks should be completed:

- [ ] All six pages open.
- [ ] CSS loads on every page.
- [ ] Navigation links work.
- [ ] Mobile menu works.
- [ ] Images display correctly.
- [ ] Gallery lightbox works.
- [ ] Service searching works.
- [ ] Filtering and sorting work.
- [ ] Interactive map displays.
- [ ] Invalid form inputs show errors.
- [ ] Form submissions are tested where supported.
- [ ] robots.txt is accessible.
- [ ] sitemap.xml contains the correct domain.
- [ ] GitHub Pages deployment succeeds.
- [ ] Repository and live website links work.

Only mark an item as complete after testing it.

---

## 12. Publishing on GitHub Pages

The lecturer's *Website Deployment on GitHub* guide explains how to publish an existing website.

The process for UrbanStyle is:

1. Open the GitHub repository.
2. Click Settings.
3. Select Pages.
4. Under Build and deployment, select Deploy from a branch.
5. Select the master branch.
6. Select /(root).
7. Click Save.
8. Open GitHub Actions and check the deployment status.
9. Return to Pages and open Visit site.
10. Test the published website.

### GitHub Repository

https://github.com/seipatichirwa568-star/Sebidi_ST10482512_WEDE5020_POE_P1

### Expected GitHub Pages Website

https://seipatichirwa568-star.github.io/Sebidi_ST10482512_WEDE5020_POE_P1/

This website address must be verified after successful deployment.

### Earlier Netlify Website

https://urbanstyle-st10482512.netlify.app/

---

## 13. References

GitHub, 2026. *Creating a GitHub Pages site*. [online] Available at: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site [Accessed 28 October 2026].

Google Search Central, s.a. *SEO starter guide*. [online] Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide [Accessed 27 October 2026].

Leaflet, s.a. *Leaflet quick start guide*. [online] Available at: https://leafletjs.com/examples/quick-start/ [Accessed 27 October 2026].

MDN Web Docs, s.a.-a. *CSS: Cascading Style Sheets*. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/CSS [Accessed 27 October 2026].

MDN Web Docs, s.a.-b. *JavaScript*. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript [Accessed 27 October 2026].

Netlify, s.a. *Forms setup*. [online] Available at: https://docs.netlify.com/manage/forms/setup/ [Accessed 27 October 2026].

The Independent Institute of Education (The IIE), 2026. *WEDE5020: JavaScript Form Validation*. [Lecture slides]. The IIE.

**Image sources:** The original image sources and usage permissions should be verified before commercial use.

---

## 14. Conclusion

UrbanStyle demonstrates the use of HTML, CSS and JavaScript to build a responsive and interactive website.

The project addresses feedback from Part 2 and introduces additional features for Part 3, including dynamic service listings, gallery interaction, JavaScript form validation, SEO improvements and deployment documentation.

GitHub provides access to the project source code and commit history. The published website allows the lecturer and client to review the work online.

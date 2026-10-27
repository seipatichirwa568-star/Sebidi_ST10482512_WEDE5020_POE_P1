
# UrbanStyle | WEDE5020 Part 3 POE

**Student:** Atlegang Sebidi  
**Student Number:** ST10482512  
**Institution:** Rosebank College  
**Module:** WEDE5020 – Web Development (Introduction)  
**Project:** UrbanStyle  
**Year:** 2026  

**GitHub Repository:** [ADD LINK]  
**Live Netlify Website:** [ADD LINK]

## 1. Project Overview

UrbanStyle is a fashion and lifestyle website concept.
The website allows visitors to explore fashion styling
services, view inspiration pictures and send enquiries.

For Part 3, I focused on improving the website layout,
adding JavaScript functionality and making the forms
more useful.

The website contains six pages:
- Home
- About
- Services
- Gallery
- Enquiry
- Contact

## 2. Technologies Used

HTML5 was used to structure the pages and create
the forms.

CSS3 was used for the website's layout, colours,
typography, responsive images and media queries
(MDN Web Docs, s.a.-a).

JavaScript was used to add interactivity, including
the navigation menu, service search, gallery lightbox,
form validation and AJAX submissions
(MDN Web Docs, s.a.-b).

Leaflet and OpenStreetMap were used to demonstrate
an interactive location-based feature (Leaflet, s.a.).

Netlify is used to deploy the website and process
form submissions (Netlify, s.a.).

## 3. Part 2 Feedback and Improvements

The Part 2 result was 70/100.

### 3.1 Layout Structure

Previous mark: 2/5

Feedback:
The layout structure was incomplete or incorrect.
Some elements had alignment and spacing issues.

Changes made:
- Applied a shared width container.
- Used CSS Grid and Flexbox for alignment.
- Improved spacing around sections.
- Used consistent card padding.
- Improved the mobile layout.

### 3.2 Decoration and Colour

Previous mark: 3/5

Feedback:
The website had decorative features and colours,
but consistency could be improved.

Changes made:
- Maintained UrbanStyle's purple brand colour.
- Applied consistent borders and cards.
- Improved hover and focus styling.
- Used matching background colours throughout.

### 3.3 Typography

Previous mark: 4/5

Feedback:
Typography was present but needed improvement.

Changes made:
- Improved the heading hierarchy.
- Used consistent font sizes.
- Adjusted line spacing and paragraph widths.
- Improved contrast between headings and body text.

### 3.4 Responsive Images

Previous mark: 2/5

Feedback:
Image adjustments were incomplete or incorrect.

Changes made:
- Removed broken local Windows image paths.
- Used relative paths to the Images folder.
- Applied max-width: 100%.
- Used object-fit and aspect-ratio for image cards.
- Added descriptive image names and alt text.

Higher-resolution licensed pictures should replace
the supplied small stock images before commercial use.

### 3.5 Responsive Breakpoints

Previous mark: 10/10

This was already a strength of the project.

I retained responsive design and organised the
tablet and mobile breakpoints in the external CSS.

### 3.6 Pseudo-Classes

Previous mark: 10/10

I retained hover, focus and active interaction
styles to support usability.

### 3.7 External Stylesheet

Previous mark: 10/10

The site continues to use one external stylesheet:
CSS/style.css.

### 3.8 GitHub Commits

Previous mark: 2/5

Feedback indicated that the project needed a
stronger history of descriptive commits.

For Part 3, meaningful changes should be committed
separately, with messages explaining what was done.

### 3.9 References

Previous mark: 3/5

I updated the reference list and added author-date
citations explaining the technologies used.

## 4. JavaScript Functionality

The following features were added:

- Mobile navigation
- Scroll animations
- Searchable service listings
- Service category filtering
- Alphabetical sorting
- Dynamic service cards
- Interactive gallery lightbox
- FAQ accordion
- Leaflet map
- Service-specific enquiry guidance

JavaScript arrays, functions, event listeners and
DOM manipulation were used to create these features
(MDN Web Docs, s.a.-b).

## 5. Form Validation

The Enquiry and Contact pages now have separate forms.

The validation includes:
- Required fields
- Email format checking
- Telephone format checking
- Minimum character lengths
- Checkbox validation
- Error messages beneath incorrect fields

The JavaScript uses:
- addEventListener()
- value.trim()
- checkValidity()
- if and else statements
- showError()
- clearError()
- event.preventDefault()

These techniques were covered in the WEDE5020
JavaScript Form Validation lecture slides
(The IIE, 2026).

Valid form information is submitted to Netlify
using fetch() and URLSearchParams() (Netlify, s.a.).

## 6. SEO Improvements

The website includes:
- Unique page titles
- Meta descriptions
- Relevant keywords
- Structured headings
- Descriptive image alt text
- Internal navigation links
- Mobile-responsive layouts
- robots.txt
- sitemap.xml

These features help search engines discover and
understand the website (Google Search Central, s.a.).

## 7. Changelog

### Version 1 – Original Website

Created the initial five HTML pages and
external stylesheet.

### Version 2 – Part 2 Website

Improved CSS styling, navigation, responsiveness
and visual presentation.

### Version 3 – Part 3 Improvements

27 October 2026:

- Corrected broken gallery image paths.
- Improved layout alignment and spacing.
- Improved responsive image handling.
- Added enquiry.html.
- Added an external JavaScript file.
- Added dynamic service search and sorting.
- Added a gallery lightbox.
- Added FAQ accordions.
- Added an interactive map.
- Added JavaScript form validation.
- Added AJAX submission functionality.
- Added SEO metadata, sitemap and robots file.
- Updated project documentation and references.

## 8. Testing

Complete these checks before submission:

- [ ] All six pages open.
- [ ] Navigation links work.
- [ ] Mobile menu works.
- [ ] Service search and sorting work.
- [ ] Gallery lightbox opens and closes.
- [ ] Interactive map loads.
- [ ] Enquiry guidance changes correctly.
- [ ] Empty fields display error messages.
- [ ] Invalid email addresses display errors.
- [ ] Contact form reaches Netlify Forms.
- [ ] Enquiry form reaches Netlify Forms.
- [ ] robots.txt opens on Netlify.
- [ ] sitemap.xml contains the correct domain.
- [ ] GitHub has descriptive commits.

## 9. Deployment

Hosting platform: Netlify

Live link:
[ADD REAL NETLIFY LINK]

GitHub repository:
[ADD REAL GITHUB LINK]

The lecturer should open the master branch if
the repository uses master for submission.

## 10. References

Google Search Central. s.a. *SEO Starter Guide*.
[Online]. Available at:
https://developers.google.com/search/docs/fundamentals/seo-starter-guide
[Accessed 27 October 2026].

Leaflet. s.a. *Quick Start Guide*. [Online].
Available at:
https://leafletjs.com/examples/quick-start/
[Accessed 27 October 2026].

MDN Web Docs. s.a.-a. *CSS: Cascading Style Sheets*.
[Online]. Available at:
https://developer.mozilla.org/en-US/docs/Web/CSS
[Accessed 27 October 2026].

MDN Web Docs. s.a.-b. *JavaScript*. [Online].
Available at:
https://developer.mozilla.org/en-US/docs/Web/JavaScript
[Accessed 27 October 2026].

Netlify. s.a. *Forms setup*. [Online].
Available at:
https://docs.netlify.com/manage/forms/setup/
[Accessed 27 October 2026].

The Independent Institute of Education (The IIE).
2026. *WEDE5020: JavaScript Form Validation*
[Lecture slides]. The IIE.

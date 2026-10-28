# UrbanStyle | WEDE5020 Part 3 Portfolio of Evidence

**Student:** Atlegang Sebidi  
**Student number:** ST10482512  
**Institution:** Rosebank College  
**Module:** Web Development (Introduction) – WEDE5020  
**Project:** UrbanStyle – Fashion and Styling Website  
**Documentation updated:** 28 October 2026

## 1. Project links and publishing

**GitHub repository (submission link 1):** https://github.com/seipatichirwa568-star/Sebidi_ST10482512_WEDE5020_POE_P1  
**Previously published Netlify website:** https://urbanstyle-st10482512.netlify.app/  
**GitHub branch containing the website:** **master**  
**GitHub Pages website (submission link 2):** Not yet confirmed. Copy the actual URL from GitHub → Settings → Pages → Visit site after a successful deployment.

The expected GitHub Pages URL, once publishing is enabled and successful, is:
https://seipatichirwa568-star.github.io/Sebidi_ST10482512_WEDE5020_POE_P1/

**Important:** The expected GitHub Pages address above is not proof of a successful deployment. Test it before sending the final links to the lecturer or client. The existing Netlify address was used earlier, but its current availability should be checked in a browser.

For this project, GitHub Pages can publish the HTML, CSS and browser JavaScript. Netlify Forms submissions only work when the website is being served by a working Netlify deployment; GitHub Pages does not itself store Netlify form messages (GitHub, 2026; Netlify, s.a.).

## 2. Project overview

UrbanStyle is a student-created fashion and lifestyle website concept. Visitors can read about styling services, look at clothing inspiration, search the available services and send a message or enquiry. The website presents an illustrative Johannesburg service area rather than a verified shop address.

Part 1 provided the original HTML website. Part 2 introduced consistent external CSS and mobile layouts. Part 3 focuses on JavaScript functionality, form validation, SEO and a working public deployment. HTML structures the content, CSS controls its appearance and JavaScript responds to visitors' actions (MDN Web Docs, s.a.-a; s.a.-b).

**Project clarification:** Photos are illustrative, not proof of completed client work. Pricing, business contact information, image licences and availability must be confirmed by the owner before using the concept as a commercial website.

## 3. Website pages

| Page | Filename | Purpose |
|---|---|---|
| Home | **index.html** | Introduces UrbanStyle, styling options and enquiry links |
| About | **about.html** | Describes the website concept and frequently asked questions |
| Services | **services.html** | Displays searchable, filterable and sortable service listings |
| Gallery | **gallery.html** | Displays fashion reference photos with a click-to-enlarge lightbox |
| Enquiry | **enquiry.html** | Collects details about styling, custom designs and appointments |
| Contact | **contact.html** | Collects general messages and provides an illustrative area map |

Navigation links connect all six pages. The homepage file is located at the root of the **master** branch, so it can be used as the entry point for GitHub Pages.

## 4. Tools and project files

| Technology | How it was used |
|---|---|
| HTML5 | Page layout, headings, navigation, images, accessible form controls |
| CSS3 | One external stylesheet, typography, purple colour theme, grids and breakpoints |
| JavaScript | Mobile menu, dynamically generated services, search, filtering, sorting and form validation |
| HTML dialog | Gallery lightbox for enlarged images |
| Leaflet and OpenStreetMap | Illustrative interactive Johannesburg-area map |
| Git and GitHub | Repository, **master** branch, development commits and source-code handover |
| Netlify | Earlier public deployment and form handling |
| GitHub Pages | Lecturer-approved static website publishing option |
| VS Code | File editing and local testing |

**Main project structure:**

- **index.html**, **about.html**, **services.html**, **gallery.html**, **enquiry.html**, **contact.html**
- **CSS/style.css** – external stylesheet
- **JS/script.js** – JavaScript features and form logic
- **Images/** – fashion image files (the folder name and letter case must match the HTML)
- **robots.txt** and **sitemap.xml** – search engine configuration
- **README.md** – final project documentation

When fixing image problems, use relative URLs such as **Images/urban style 1.jpg** rather than paths to a local Windows computer. The lightbox must display the corresponding gallery image.

## 5. Part 2 feedback and improvements

The Part 2 mark was **70/100**. I reviewed the lecturer's marking feedback and concentrated on the weaker areas while retaining the features that already received good marks.

| Lecturer feedback | Part 2 result | Work described for Part 3 |
|---|---:|---|
| Updates from previous feedback | 7/10 | Added more detailed documentation and a development changelog |
| External stylesheet | 10/10 | Continued using shared external CSS across the pages |
| CSS layout structure | 2/5 | Improved containers, spacing, grid alignment and card padding |
| Decoration and colour | 3/5 | Used consistent purple shades, card borders and button styling |
| Typography | 4/5 | Improved headings, line spacing and reading widths |
| CSS pseudo-classes | 10/10 | Retained hover and focus states |
| Responsive media queries | 10/10 | Retained and organised tablet and mobile breakpoints |
| Responsive image adjustments | 2/5 | Used relative image paths, flexible sizing and image cropping rules |
| Descriptive GitHub commits | 2/5 | Used specific commit messages for subsequent work |
| References | 3/5 | Included in-text citations and an IIE Harvard–Anglia-style reference list |

These changes were made to address the lecturer's feedback, not to replace the original website with a different project.

## 6. Part 3 functionality

### 6.1 JavaScript interaction

- **Mobile navigation:** The menu button opens and closes the navigation at smaller screen widths.
- **Dynamic services:** JavaScript stores the available services in an array and creates service cards.
- **Search and filtering:** Visitors can search service names and filter by category.
- **Sorting:** A sorting control changes the order of the results.
- **Gallery lightbox:** Clicking a gallery photograph opens a larger image and caption inside a dialog.
- **Reveal animation:** Elements become visible as the visitor scrolls, while reduced-motion settings are considered.
- **FAQ:** The About page uses expandable questions and answers.
- **Illustrative map:** Leaflet shows the Johannesburg city-centre area, not a verified store address.

JavaScript functions, arrays, DOM manipulation and event listeners are used for these features (MDN Web Docs, s.a.-b).

### 6.2 Forms and validation

The **Enquiry** form is for requests about styling and other services. The **Contact** form is for general messages.

The project includes form controls such as text fields, email fields, drop-downs, text areas and confirmation checkboxes. Validation checks required information, appropriate formats and minimum lengths. Error messages are displayed beside fields that need attention.

The JavaScript form validation follows the approaches shown in the WEDE5020 lecture slides, including **addEventListener()**, **value.trim()**, **checkValidity()**, **if/else**, **preventDefault()** and visible error messages (The IIE, 2026).

**Hosting limitation:** Form validation can run on GitHub Pages, but a real submission handler is needed to deliver messages. The earlier Netlify implementation uses asynchronous submission to Netlify Forms, which is not provided by GitHub Pages. Do not report successful GitHub Pages form delivery unless a new handler has been tested.

## 7. SEO and website accessibility

The project includes page-specific title tags, meta descriptions, relevant content keywords, headings, descriptive image alternative text and internal links. CSS media queries adapt the layout for mobile screens. It also contains **robots.txt** and **sitemap.xml** (Google Search Central, s.a.).

Before final handover, check that the live sitemap contains the **actual selected hosting domain**. The repository currently contains a Netlify-based sitemap. Do not change it to a GitHub Pages URL until GitHub Pages is confirmed live.

Images must be accompanied by correct permissions or credits. Do not use watermarked stock photographs as though they are licensed client assets.

## 8. Changelog and development record

### Part 1 – HTML website
- Created the initial UrbanStyle pages and navigation.
- Added the fashion and styling project information.

### Part 2 – CSS improvements
- Connected the external stylesheet to the website pages.
- Improved typography, colours, buttons, layout and responsive breakpoints.

### Part 3 – 27 October 2026
- Updated gallery paths and image sizing for publication.
- Improved page spacing and consistent presentation.
- Added the separate Enquiry page.
- Added mobile navigation and dynamic service search, filtering and sorting.
- Added gallery lightbox behaviour and FAQ interaction.
- Added an illustrative Leaflet map.
- Added JavaScript form validation and submission handling for the earlier Netlify deployment.
- Added SEO page metadata, sitemap and robots file.

### Part 3 documentation – 28 October 2026
- Added this standard **README.md** for easier viewing on GitHub.
- Added the actual UrbanStyle repository link and previous Netlify deployment link.
- Recorded the correct **master** branch.
- Documented the lecturer's GitHub Pages publishing process and the need to verify the new live link.
- Clarified the distinction between working client-side validation and hosted form submissions.

This changelog is a summary of development work. The GitHub commit history provides the actual record of committed changes.

## 9. Testing checklist

- [ ] All six pages open on the newly published GitHub Pages website.
- [ ] Styling and images load correctly on desktop and mobile.
- [ ] Navigation and mobile menu work.
- [ ] Service search, filtering and sorting return correct results.
- [ ] Each gallery image enlarges and closes correctly.
- [ ] Map loads using an internet connection.
- [ ] Invalid Contact and Enquiry inputs show appropriate messages.
- [ ] Real form submissions are tested with a compatible submission service, if required.
- [ ] robots.txt and sitemap.xml reflect the selected published domain.
- [ ] GitHub Pages **Actions** shows a successful deployment.
- [ ] The final website and repository links open in a separate browser.

A checked item should represent an actual completed test. Previous Netlify testing should not be treated as proof that every feature works on another hosting service.

## 10. Publishing with GitHub Pages

The lecturer's *Website Deployment on GitHub* guide explains how to publish an existing GitHub repository. For this project:

1. Open https://github.com/seipatichirwa568-star/Sebidi_ST10482512_WEDE5020_POE_P1 .
2. Select **Settings → Pages**.
3. Choose **Deploy from a branch** as the source.
4. Choose **master** and **/(root)**, because the site's **index.html** is in that branch's root.
5. Click **Save**.
6. Open **Actions** and confirm that the latest **pages build and deployment** run has succeeded.
7. Return to **Settings → Pages**, click **Visit site**, and test the published website.
8. Replace the unconfirmed GitHub Pages link at the top of this README with the confirmed address and commit that final documentation change.

For future updates, edit the correct project folder in VS Code, check **git status** and **git remote -v**, make a descriptive commit and push to **master**. GitHub Pages should then rebuild the website.

**Two lecturer submission links:** The repository URL above and the confirmed GitHub Pages website URL. Keep the older Netlify link separately if it is still required by the client.

## 11. References (IIE Harvard–Anglia style)

GitHub, 2026. *Creating a GitHub Pages site*. [online] Available at: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site [Accessed 28 October 2026].

Google Search Central, s.a. *SEO starter guide*. [online] Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide [Accessed 27 October 2026].

Leaflet, s.a. *Leaflet quick start guide*. [online] Available at: https://leafletjs.com/examples/quick-start/ [Accessed 27 October 2026].

MDN Web Docs, s.a.-a. *CSS: Cascading Style Sheets*. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/CSS [Accessed 27 October 2026].

MDN Web Docs, s.a.-b. *JavaScript*. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript [Accessed 27 October 2026].

Netlify, s.a. *Forms setup*. [online] Available at: https://docs.netlify.com/manage/forms/setup/ [Accessed 27 October 2026].

The Independent Institute of Education (The IIE), 2026. *WEDE5020: JavaScript Form Validation*. [Lecture slides]. The IIE.

**Images:** Image sources and licensing still need to be checked. The reference list above does not claim ownership or permission to use any fashion photograph.

/* UrbanStyle - WEDE5020 Part 3
   JavaScript techniques from the lecture slides:
   DOM manipulation, arrays, functions, if/else,
   addEventListener, trim, checkValidity,
   preventDefault and AJAX.
*/

"use strict";

document.addEventListener("DOMContentLoaded", function () {

    // 1. Mobile navigation

    const menuButton = document.getElementById("menu-button");
    const nav = document.getElementById("main-nav");

    if (menuButton && nav) {
        menuButton.addEventListener("click", function () {
            const open = nav.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(open)
            );

            menuButton.textContent = open
                ? "Close ✕"
                : "Menu ☰";
        });
    }


    // 2. Scroll animations

    if (
        "IntersectionObserver" in window &&
        !window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {
        const items = document.querySelectorAll(".reveal");

        if (items.length) {
            const observer = new IntersectionObserver(
                function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("visible");
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.08 }
            );

            document.body.classList.add("js-ready");

            items.forEach(function (item) {
                observer.observe(item);
            });
        }
    }


    // 3. Services array

    const services = [
        {
            name: "Personal Styling",
            category: "fashion",
            description:
                "Outfit ideas based on a person's preferences, budget and occasion."
        },
        {
            name: "Custom Designs",
            category: "design",
            description:
                "Discuss an original design concept and ask what is possible."
        },
        {
            name: "Creative Consultation",
            category: "design",
            description:
                "Talk through inspiration, colour choices and a creative brief."
        },
        {
            name: "Event Styling",
            category: "events",
            description:
                "Discuss styling ideas for occasions and event themes."
        }
    ];


    // 4. Search, filtering and sorting

    const grid = document.getElementById("service-grid");
    const search = document.getElementById("service-search");
    const category = document.getElementById("service-category");
    const sort = document.getElementById("service-sort");
    const count = document.getElementById("service-count");

    function renderServices() {
        if (!grid) {
            return;
        }

        const term = search.value.trim().toLowerCase();
        const selected = category.value;

        const matches = services.filter(function (service) {
            const words = (
                service.name + " " + service.description
            ).toLowerCase();

            return words.includes(term) &&
                (
                    selected === "all" ||
                    service.category === selected
                );
        });

        if (sort.value === "az") {
            matches.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
        }

        if (sort.value === "za") {
            matches.sort(function (a, b) {
                return b.name.localeCompare(a.name);
            });
        }

        grid.replaceChildren();

        matches.forEach(function (service) {
            const card = document.createElement("article");
            card.className = "card service-card";

            const heading = document.createElement("h3");
            heading.textContent = service.name;

            const description = document.createElement("p");
            description.textContent = service.description;

            const link = document.createElement("a");
            link.className = "btn";
            link.href = "enquiry.html?service=" +
                encodeURIComponent(service.name);
            link.textContent = "Ask about this";

            card.append(heading, description, link);
            grid.appendChild(card);
        });

        if (matches.length === 0) {
            const empty = document.createElement("p");
            empty.textContent =
                "No matching services. Try a different search.";

            grid.appendChild(empty);
        }

        count.textContent =
            matches.length + " of " +
            services.length + " services shown";
    }

    if (grid && search && category && sort && count) {
        search.addEventListener("input", renderServices);
        category.addEventListener("change", renderServices);
        sort.addEventListener("change", renderServices);

        renderServices();
    }


    // 5. Gallery lightbox

    const lightbox = document.getElementById("photo-dialog");

    if (
        lightbox &&
        typeof lightbox.showModal === "function"
    ) {
        const large = document.getElementById("large-photo");
        const caption = document.getElementById("photo-caption");

        document.querySelectorAll(".gallery-btn").forEach(
            function (button) {
                button.addEventListener("click", function () {
                    large.src = button.dataset.src;
                    large.alt = button.dataset.caption;
                    caption.textContent = button.dataset.caption;

                    lightbox.showModal();
                });
            }
        );

        document.getElementById("close-dialog")
            .addEventListener("click", function () {
                lightbox.close();
            });

        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                lightbox.close();
            }
        });
    }


    // 6. Interactive map

    const mapBox = document.getElementById("city-map");

    if (mapBox) {
        if (typeof L !== "undefined") {
            const map = L.map(mapBox).setView(
                [-26.2041, 28.0473],
                11
            );

            L.tileLayer(
                "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
                {
                    maxZoom: 18,
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }
            ).addTo(map);

            L.circle([-26.2041, 28.0473], {
                radius: 2500,
                color: "#7340ca",
                fillOpacity: 0.12
            })
                .addTo(map)
                .bindPopup(
                    "Johannesburg city centre, for illustration only. " +
                    "No UrbanStyle shop location is verified."
                );
        } else {
            mapBox.classList.add("no-map");
            mapBox.textContent =
                "Map unavailable. Please try an internet connection.";
        }
    }


    // 7. Enquiry service guidance

    const enquiryService =
        document.getElementById("enquiry-service");

    const guidance =
        document.getElementById("service-guidance");

    const serviceNotes = {
        "Personal Styling":
            "Describe the occasion, clothing preferences and budget. " +
            "A personal quote will need to be confirmed.",

        "Custom Designs":
            "Explain your idea, preferred colours and estimated budget. " +
            "Feasibility and price require confirmation.",

        "Creative Consultation":
            "Describe the creative project and what advice you need. " +
            "Session availability and cost must be confirmed.",

        "Event Styling":
            "Share the event date, type and preferred theme. " +
            "Booking availability and pricing are not guaranteed."
    };

    function updateGuidance() {
        if (!enquiryService || !guidance) {
            return;
        }

        guidance.textContent =
            serviceNotes[enquiryService.value] ||
            "Select a service to see what details we need for an enquiry.";
    }

    if (enquiryService) {
        const requested = new URLSearchParams(
            location.search
        ).get("service");

        if (serviceNotes[requested]) {
            enquiryService.value = requested;
        }

        enquiryService.addEventListener(
            "change",
            updateGuidance
        );

        updateGuidance();
    }


    // 8. Show field errors - lecturer's method

    function showError(form, field, message) {
        const error = form.querySelector(
            '[data-error-for="' + field.id + '"]'
        );

        if (error) {
            error.textContent = message;
            field.setAttribute(
                "aria-describedby",
                error.id
            );
        }

        field.setAttribute("aria-invalid", "true");
    }


    // 9. Clear errors once the input is corrected

    function clearError(form, field) {
        const error = form.querySelector(
            '[data-error-for="' + field.id + '"]'
        );

        if (error) {
            error.textContent = "";
        }

        field.removeAttribute("aria-invalid");
        field.removeAttribute("aria-describedby");
    }


    // 10. Check a single field

    function checkField(form, field) {
        const value = field.type === "checkbox"
            ? ""
            : field.value.trim();

        let message = "";

        if (
            field.type === "checkbox" &&
            field.required &&
            !field.checked
        ) {
            message =
                "Please tick this box before submitting.";
        }

        else if (
            field.type !== "checkbox" &&
            field.required &&
            value === ""
        ) {
            message = "Please complete this field.";
        }

        else if (
            value !== "" &&
            field.validity.typeMismatch
        ) {
            message = "Please enter a valid email address.";
        }

        else if (
            value !== "" &&
            field.validity.patternMismatch
        ) {
            message =
                "Please use a valid phone-number format.";
        }

        else if (
            value !== "" &&
            field.validity.tooShort
        ) {
            message =
                "Please enter at least " +
                field.minLength +
                " characters.";
        }

        else if (
            value !== "" &&
            !field.checkValidity()
        ) {
            message = "Please check your answer.";
        }

        if (message) {
            showError(form, field, message);
            return false;
        }

        clearError(form, field);
        return true;
    }


    // 11. Check all form fields

    function validateForm(form) {
        let isValid = true;

        const fields = form.querySelectorAll(
            'input:not([type="hidden"]), select, textarea'
        );

        fields.forEach(function (field) {
            if (!checkField(form, field)) {
                isValid = false;
            }
        });

        return isValid;
    }


    // 12. Display a status message

    function statusMessage(form, message, error) {
        const status = form.querySelector(".form-status");

        if (status) {
            status.textContent = message;
            status.className =
                "form-status " +
                (error ? "error" : "success");
        }
    }


    // 13. AJAX contact and enquiry forms

    document.querySelectorAll(".netlify-form").forEach(
        function (form) {
            const fields = form.querySelectorAll(
                'input:not([type="hidden"]), select, textarea'
            );

            fields.forEach(function (field) {

                field.addEventListener("blur", function () {
                    field.dataset.touched = "yes";
                    checkField(form, field);
                });

                field.addEventListener("change", function () {
                    field.dataset.touched = "yes";
                    checkField(form, field);
                });

                field.addEventListener("input", function () {
                    if (field.dataset.touched) {
                        checkField(form, field);
                    }
                });

            });


            form.addEventListener(
                "submit",
                async function (event) {
                    event.preventDefault();

                    if (!validateForm(form)) {
                        statusMessage(
                            form,
                            "Please correct the highlighted fields.",
                            true
                        );

                        const first = form.querySelector(
                            '[aria-invalid="true"]'
                        );

                        if (first) {
                            first.focus();
                        }

                        return;
                    }

                    const isLocal =
                        location.protocol === "file:" ||
                        ["localhost", "127.0.0.1"].includes(
                            location.hostname
                        );

                    if (isLocal) {
                        statusMessage(
                            form,
                            "Your form is valid. Use the published Netlify site to send it.",
                            false
                        );

                        return;
                    }

                    if (
                        !location.hostname.endsWith("netlify.app") &&
                        !document.documentElement.dataset.allowOtherHost
                    ) {
                        statusMessage(
                            form,
                            "This demonstration sends forms only from the Netlify site. Check your deployment settings.",
                            true
                        );

                        return;
                    }

                    const submit = form.querySelector(
                        'button[type="submit"]'
                    );

                    if (submit) {
                        submit.disabled = true;
                    }

                    statusMessage(
                        form,
                        "Sending your message...",
                        false
                    );

                    try {
                        const formData = new FormData(form);

                        const encoded = new URLSearchParams(
                            formData
                        );

                        const response = await fetch("/", {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/x-www-form-urlencoded"
                            },

                            body: encoded.toString()
                        });

                        if (!response.ok) {
                            throw new Error(
                                "HTTP " + response.status
                            );
                        }

                        statusMessage(
                            form,
                            "Your message was submitted. Thank you!",
                            false
                        );

                        form.reset();

                        fields.forEach(function (field) {
                            clearError(form, field);
                            delete field.dataset.touched;
                        });

                        updateGuidance();

                    } catch (error) {
                        console.error(error);

                        statusMessage(
                            form,
                            "Submission failed. Please try again.",
                            true
                        );

                    } finally {
                        if (submit) {
                            submit.disabled = false;
                        }
                    }
                }
            );
        }
    );


    // 14. Prepare a contact email

    // Address from the original UrbanStyle project.
    // Client must confirm it belongs to the business.

    const BUSINESS_EMAIL = "info@urbanstyle.co.za";

    const emailButton =
        document.getElementById("email-button");

    const contactForm =
        document.getElementById("contact-form");

    if (emailButton && contactForm) {
        emailButton.addEventListener("click", function () {

            if (!validateForm(contactForm)) {
                statusMessage(
                    contactForm,
                    "Please correct the form first.",
                    true
                );

                return;
            }

            const data = new FormData(contactForm);

            const subject = encodeURIComponent(
                "UrbanStyle: " + data.get("topic")
            );

            const body = encodeURIComponent(
                "Name: " + data.get("full-name") + "\n" +
                "Reply email: " + data.get("email") + "\n" +
                "Topic: " + data.get("topic") + "\n\n" +
                data.get("message")
            );

            window.location.href =
                "mailto:" + BUSINESS_EMAIL +
                "?subject=" + subject +
                "&body=" + body;

            statusMessage(
                contactForm,
                "Your email app should open. Press Send there to deliver the email.",
                false
            );
        });
    }

});

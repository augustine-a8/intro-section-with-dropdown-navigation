const primaryNav = document.querySelector(".primary-header-content");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
    }
});

const featuresDropDwnBtn = document.querySelector("#features-link");
const featuresDropDwn = document.querySelector("#features-dropdwn");

featuresDropDwnBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const featuresDropDwnVisibility = featuresDropDwn.getAttribute("data-visible");
    if (featuresDropDwnVisibility === "false") {
        featuresDropDwn.setAttribute("data-visible", "true");
        featuresDropDwnBtn.setAttribute("aria-expanded", "true");
    } else {
        featuresDropDwn.setAttribute("data-visible", "false");
        featuresDropDwnBtn.setAttribute("aria-expanded", "false");
    }
});

const companyDropDwnBtn = document.querySelector("#company-link");
const companyDropDwn = document.querySelector("#company-dropdwn");

companyDropDwnBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const companyDropDwnVisibility = companyDropDwn.getAttribute("data-visible");
    if (companyDropDwnVisibility === "false") {
        companyDropDwn.setAttribute("data-visible", "true");
        companyDropDwnBtn.setAttribute("aria-expanded", "true");
    } else {
        companyDropDwn.setAttribute("data-visible", "false");
        companyDropDwnBtn.setAttribute("aria-expanded", "false");
    }
});

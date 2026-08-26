const nav = document.querySelector("nav");
const footer = document.querySelector("footer");
const projects = document.querySelector("#section3");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            nav.classList.add("projects-nav");
            footer.classList.add("projects-footer");
        } else {
            nav.classList.remove("projects-nav");
            footer.classList.remove("projects-footer");
        }

    });

}, {
    threshold: 0.5
});

observer.observe(projects);
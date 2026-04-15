document.addEventListener("DOMContentLoaded", function () {
    const intro = document.getElementById("intro-overlay");
    const video = document.querySelector("#intro-overlay video");
    const page = document.getElementById("page-wrapper");

    video.addEventListener("ended", function () {
        intro.classList.add("fade-out");
        page.classList.add("page-visible");

        setTimeout(function () {
            intro.style.display = "none";
        }, 800);
    });
});
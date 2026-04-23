
// intro animation insert section JS

// Note:
// I learned document.addEventListener("DOMContentLoaded") from online JavaScript tutorials and MDN documentation
// while trying to control when my script should run.
// In class we mostly ran JS directly, but I found that this method ensures the HTML content is fully loaded first.
// My takeaway is that this helps avoid errors when accessing elements before they exist in the page.

document.addEventListener("DOMContentLoaded", function () {
// Note:
// I used const to declare variables after learning from online tutorials.
// In class we mainly used let, but I learned that const is used when the variable will not be reassigned.
// My takeaway is that using const makes the code clearer and safer.

// Note:
// I learned querySelector from online tutorials while trying to select nested elements (like a video inside a div).
// In class we mainly used getElementById, but querySelector allows more flexible selection using CSS-style syntax.
// My takeaway is that it is useful when selecting elements that do not have an id.
    const intro = document.getElementById("intro-overlay");
    const video = document.querySelector("#intro-overlay video");
    const page = document.getElementById("page-wrapper");

    //here was the affect of page info become visble after the video was completely done

// I learned addEventListener for events like "ended" from online JavaScript examples.
// I used it here to detect when the video finishes playing.
// My takeaway is that JavaScript can react to user actions or media events.

// I learned classList.add from online tutorials while working with CSS transitions.
// It allows me to trigger CSS effects (like fade-out) by adding a class.
// My takeaway is that JavaScript and CSS can work together to create animations.
    video.addEventListener("ended", function () {
        intro.classList.add("fade-out");
        page.classList.add("page-visible");


// I learned setTimeout from online tutorials while trying to delay actions.
// I used it here to remove the intro overlay after the fade-out animation completes.
// My takeaway is that timing control is important for smooth user experience.
        setTimeout(function () {
            intro.style.display = "none";
        }, 800);
    });
});

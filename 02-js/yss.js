// Default setting
// Some JavaScript methods used here were learned from online tutorials,
// including https://www.runoob.com and MDN Web Docs.

// Intro animation control
// This script controls when the intro video should play.
// It only plays the intro when the user enters the F1 site from the big homepage.

document.addEventListener("DOMContentLoaded", function () {

    const intro = document.getElementById("intro-overlay");
    const video = document.querySelector("#intro-overlay video");
    const page = document.getElementById("page-wrapper");


    // NEW UPDATE:
    // After testing the navigation between pages, I noticed that the intro animation
    // played every time I returned to the F1 home page.
    // This made the experience feel repetitive, so I added this logic to control when
    // the animation should be triggered.

    let previousPage = document.referrer;

    // Note:
    // Sometimes document.referrer can be empty (for example, when the page is refreshed
    // or opened directly). In that case, we treat it as not coming from the big homepage
    // and skip the intro animation.
    let cameFromBigHome = previousPage.includes("home.html");
    // fallback: if there is no referrer, do not play the intro animation
    if (previousPage === "") {
        cameFromBigHome = false;
    }

    // Safety check:
    // If any of the required elements (intro overlay, video, or main page wrapper) do not exist,
    // the script stops running here. This prevents errors when this JS file is used on pages
    // that do not include the intro animation structure.
    if (intro === null || video === null || page === null) {
        return;
    }

    // Interaction logic:
    // This decision is based on if-else logic (also related to basic programming concepts learned in CS111).
    // If the user did NOT come from the big homepage, we skip the intro animation.
    // This usually happens when the user navigates inside the site (for example: drivers → home)
    // or refreshes the page. In this case, we directly show the main content.
    if (cameFromBigHome === false) {
        // We hide the intro overlay completely and make the page visible immediately.
        intro.style.display = "none";
        page.classList.add("page-visible");
    }
    // Interaction logic:
    // If the user came from the big homepage, we allow the intro animation to play.
    // The video will control when the main content becomes visible.
    else {
        // When the video finishes playing, we trigger the transition from intro to content.
        video.addEventListener("ended", function () {
            // We add CSS classes to start the fade-out animation and reveal the main page.
            intro.classList.add("fade-out");
            page.classList.add("page-visible");

            // After a short delay (to match the CSS animation duration), we completely remove the intro layer.
            setTimeout(function () {
                intro.style.display = "none";
            }, 800);
        });
    }
});


/*
NOTES ABOUT CODE I LEARNED OUTSIDE CLASS:
Main sources:
- https://www.runoob.com
- MDN Web Docs

1. document.addEventListener("DOMContentLoaded")
I learned this from online JavaScript tutorials and MDN documentation.
I used it because I wanted the JavaScript to run after the HTML page is loaded.
My takeaway is that this can help avoid errors when JavaScript tries to find an element before the page has finished loading.

2. const
(I first learned this before it was introduced in lecture.)
I learned const from online JavaScript tutorials.
In class, we mostly used let, but I learned that const is useful when the variable will not be reassigned later.
My takeaway is that const can make the code clearer because it shows that these element variables should stay the same.

3. document.querySelector()
I learned querySelector from online tutorials when I needed to select the video inside the intro-overlay div.
In class, we mostly used getElementById, but the video element did not have its own id.
My takeaway is that querySelector can select an element by using CSS-style selection.

4. document.referrer
I learned document.referrer from online JavaScript references while trying to know which page the user came from.
I used it here so the intro animation only plays when the user comes from big-home.html.
My takeaway is that JavaScript can use simple browser information to improve user experience.

5. includes()
I learned includes() from online JavaScript tutorials.
I used it to check whether the previous page address contains the text "big-home.html".
My takeaway is that includes() is useful for checking whether a string contains a specific word or phrase.

6. addEventListener("ended")
I learned the ended event from online JavaScript examples about video elements.
I used it to detect when the intro video has finished playing.
My takeaway is that JavaScript can respond not only to clicks, but also to media events.

7. classList.add()
I learned classList.add from online tutorials while working with CSS transitions.
I used it to add the fade-out and page-visible classes after the video ends.
My takeaway is that JavaScript can work together with CSS by adding or removing classes.

8. setTimeout()
I learned setTimeout from online tutorials while trying to delay an action.
I used it to hide the intro overlay after the fade-out animation has enough time to finish.
My takeaway is that timing control can make an animation feel smoother.
*/

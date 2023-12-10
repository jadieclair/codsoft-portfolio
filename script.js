/* Repaly Introduction text */

// Function to replay the animation
function replayAnimation() {
  const textElement = document.getElementById("animatedText");
  textElement.style.animation = "none";
  textElement.offsetHeight; // Trigger reflow
  textElement.style.animation = null;
}

// Check if the user has scrolled to the top of the page
function checkScroll() {
  if (window.scrollY === 0) {
    replayAnimation();
  }
}

// Attach the checkScroll function to the scroll event
window.addEventListener("scroll", checkScroll);

/* Projects */

// Event listener for playing the video on button click
document.getElementById("playButton").addEventListener("click", function () {
  var video = document.getElementById("videoPlayer");
  video.play();
});

/* Back to top */

function scrollToTop() {
  // Scroll to the top of the page with smooth animation
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

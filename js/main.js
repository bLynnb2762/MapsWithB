// Set copyright year
document.getElementById("copyright-year").textContent = new Date().getFullYear();

// When StoryMap is loading, show the loading wheel and message
function storyLoaded() {
    // Give the StoryMap a couple extra seconds to finish rendering
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
    }, 2000);
}
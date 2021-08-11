
const shareIcon = document.getElementById('share-icon');
const shareIconMenu = document.getElementById('share-icon-menu');
const traingle = document.getElementById('traingle');

shareIcon.addEventListener("click", () => {
    if (shareIcon.classList.contains("open")) {
        shareIcon.classList.remove("open");
        shareIconMenu.classList.remove("open");
        traingle.classList.remove("open");
    } else {
        shareIcon.classList.add("open");
        shareIconMenu.classList.add("open");
        traingle.classList.add("open");
    }
})
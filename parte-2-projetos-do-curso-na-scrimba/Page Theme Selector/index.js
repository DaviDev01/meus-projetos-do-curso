const themeSelector = document.querySelector("#themes")
const themeLink = document.querySelector(".theme")

function setTheme() {
    let theme = themeSelector.value;
    themeLink.setAttribute("href", "theme-" + theme + ".css") /* theme can be "light", "Dark", "scrimba" and that will be the name of one of the three style sheets*/

}

themeSelector.addEventListener("change", () => {
    setTheme();
})

setTheme()
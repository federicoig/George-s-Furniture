const furnitureLink = document.querySelector("#furniture")
const gallery = document.querySelector(".separator")

furnitureLink.addEventListener("click", smoothScrollTo =>
    gallery.scrollIntoView({behavior: "smooth"})
)

const aboutLink = document.querySelector("#about")
const info = document.querySelector(".separator2")

aboutLink.addEventListener("click", smoothScrollTo =>
    info.scrollIntoView({behavior: "smooth"})
)

const contactLink = document.querySelector("#contact")
const footer = document.querySelector("#footer")

contactLink.addEventListener("click", smoothScrollTo =>
    footer.scrollIntoView({behavior: "smooth"})
)




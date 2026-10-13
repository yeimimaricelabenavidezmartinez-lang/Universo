const objects = document.querySelectorAll(
    ".sun, .planet, .j1407b"
);

const infoBox = document.getElementById("infoBox");
const infoTitle = document.getElementById("infoTitle");
const infoText = document.getElementById("infoText");
const closeButton = document.getElementById("close");

objects.forEach(object => {

    object.addEventListener("click", () => {

        const name = object.dataset.name;
        const info = object.dataset.info;

        infoTitle.textContent = name;
        infoText.textContent = info;

        infoBox.style.display = "block";
    });

});

closeButton.addEventListener("click", () => {
    infoBox.style.display = "none";
});
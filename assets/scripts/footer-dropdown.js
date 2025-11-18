const dropdown = document.querySelector(".btn-test-dropdown");
const dropdownContent = document.querySelector(".dropdown-theme-list");

dropdown.addEventListener("mouseover", () => {
    dropdownContent.style.display = "flex";
    dropdownContent.style.animation = "show-content 0.5s ease forwards";
});

dropdown.addEventListener("mouseout", () => {
    dropdownContent.style.animation = "dont-show-content 0.5s ease forwards";

    dropdownContent.addEventListener("animationend", function handler(element) {
        if (element.animationName === "dont-show-content") {
            dropdownContent.style.display = "none";
        }
        dropdownContent.removeEventListener("animationend", handler);
    });
});
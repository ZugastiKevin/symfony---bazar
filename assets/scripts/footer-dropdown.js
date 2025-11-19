function attachHoverDropdown(toggleSelector) {
    const toggles = document.querySelectorAll(toggleSelector);

    toggles.forEach((toggle) => {
        const targetSelector = toggle.dataset.dropdownTarget;
        if (!targetSelector) return;

        const dropdownContent = document.querySelector(targetSelector);
        if (!dropdownContent) return;

        const showDropdown = () => {
            dropdownContent.style.display = "flex";
            dropdownContent.style.animation = "show-content 0.5s ease forwards";
        };

        const hideDropdown = () => {
            dropdownContent.style.animation = "dont-show-content 0.5s ease forwards";

            const handler = (event) => {
                if (event.animationName === "dont-show-content") {
                    dropdownContent.style.display = "none";
                    dropdownContent.removeEventListener("animationend", handler);
                }
            };

            dropdownContent.addEventListener("animationend", handler);
        };

        toggle.addEventListener("mouseenter", showDropdown);
        toggle.addEventListener("mouseleave", hideDropdown);

        dropdownContent.addEventListener("mouseenter", showDropdown);
        dropdownContent.addEventListener("mouseleave", hideDropdown);
    });
}

// attachHoverDropdown(".navbar-dropdown-toggle");
attachHoverDropdown(".language-dropdown-toggle");
attachHoverDropdown(".theme-dropdown-toggle");


// const dropdown = document.querySelector(".theme-dropdown-toggle");
// const dropdownContent = document.querySelector(".dropdown-theme-list");
//
// dropdown.addEventListener("mouseover", () => {
//     dropdownContent.style.display = "flex";
//     dropdownContent.style.animation = "show-content 0.5s ease forwards";
// });
//
// dropdown.addEventListener("mouseout", () => {
//     dropdownContent.style.animation = "dont-show-content 0.5s ease forwards";
//
//     dropdownContent.addEventListener("animationend", function handler(element) {
//         if (element.animationName === "dont-show-content") {
//             dropdownContent.style.display = "none";
//         }
//         dropdownContent.removeEventListener("animationend", handler);
//     });
// });
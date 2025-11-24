function attachHoverDropdown(toggleSelector) {
    const toggles = document.querySelectorAll(toggleSelector);

    toggles.forEach((toggle) => {
        const targetSelector = toggle.dataset.dropdownTarget;
        if (!targetSelector) return;

        const dropdownContent = document.querySelector(targetSelector);
        if (!dropdownContent) return;

        let hideTimeout = null;
        let isOpen = false;

        const showDropdown = () => {
            if (hideTimeout) {
                clearTimeout(hideTimeout);
                hideTimeout = null;
            }

            isOpen = true;
            dropdownContent.style.display = "flex";
            dropdownContent.style.animation = "show-content 0.25s ease forwards";
            toggle.classList.add("dropdown-open");
        };

        const reallyHideDropdown = () => {
            dropdownContent.style.animation = "dont-show-content 0.25s ease forwards";

            const handler = (event) => {
                if (event.animationName === "dont-show-content") {
                    dropdownContent.style.display = "none";
                    toggle.classList.remove("dropdown-open");
                    dropdownContent.removeEventListener("animationend", handler);
                    isOpen = false;
                }
            };

            dropdownContent.addEventListener("animationend", handler);
        };

        const hideDropdown = () => {
            hideTimeout = setTimeout(reallyHideDropdown, 150);
        };

        const toggleDropdown = (event) => {
            event.preventDefault();
            event.stopPropagation();

            if (isOpen) {
                if (hideTimeout) {
                    clearTimeout(hideTimeout);
                }
                reallyHideDropdown();
            } else {
                showDropdown();
            }
        };

        // Desktop : hover
        toggle.addEventListener("mouseenter", showDropdown);
        toggle.addEventListener("mouseleave", hideDropdown);
        dropdownContent.addEventListener("mouseenter", showDropdown);
        dropdownContent.addEventListener("mouseleave", hideDropdown);

        // Mobile : click/touch
        toggle.addEventListener("click", toggleDropdown);
        toggle.addEventListener("touchstart", toggleDropdown, { passive: false });

        // Fermer si on clique ailleurs
        document.addEventListener("click", (event) => {
            if (isOpen && !toggle.contains(event.target) && !dropdownContent.contains(event.target)) {
                if (hideTimeout) {
                    clearTimeout(hideTimeout);
                }
                reallyHideDropdown();
            }
        });

        document.addEventListener("touchstart", (event) => {
            if (isOpen && !toggle.contains(event.target) && !dropdownContent.contains(event.target)) {
                if (hideTimeout) {
                    clearTimeout(hideTimeout);
                }
                reallyHideDropdown();
            }
        });
    });
}

function attachNavbarDropdown() {
    const toggle = document.querySelector(".navbar-dropdown-toggle");
    const navbarMenu = document.querySelector(".navbar_menu");
    const navbarContainer = document.querySelector(".dropdown-navbar");

    if (!toggle || !navbarMenu || !navbarContainer) return;

    const targetSelector = toggle.dataset.dropdownTarget;
    if (!targetSelector) return;

    const dropdownContent = document.querySelector(targetSelector);
    if (!dropdownContent) return;

    const regionEls = [toggle, navbarContainer, dropdownContent];

    let hideTimeout = null;
    let isClosing = false;
    let isOpen = false;

    const isInRegion = (el) =>
        regionEls.some((node) => node && node.contains(el));

    const showAll = () => {
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
        }

        isClosing = false;
        isOpen = true;

        dropdownContent.style.display = "flex";
        dropdownContent.style.animation = "show-content 0.25s ease forwards";
        toggle.classList.add("dropdown-open");

        navbarMenu.classList.remove("navbar-menu-anim-show");
        navbarMenu.classList.add("navbar-menu-anim-hide");

        navbarContainer.style.display = "flex";
        navbarContainer.classList.remove("dropdown-navbar-anim-hide");
        navbarContainer.classList.add("dropdown-navbar-anim-show");
    };

    const reallyHideAll = () => {
        isClosing = true;
        isOpen = false;

        dropdownContent.style.animation = "dont-show-content 0.25s ease forwards";

        const handler = (event) => {
            if (event.animationName === "dont-show-content") {
                if (!isClosing) {
                    dropdownContent.removeEventListener("animationend", handler);
                    return;
                }

                dropdownContent.style.display = "none";
                toggle.classList.remove("dropdown-open");
                dropdownContent.removeEventListener("animationend", handler);
            }
        };
        dropdownContent.addEventListener("animationend", handler);

        navbarContainer.classList.remove("dropdown-navbar-anim-show");
        navbarContainer.classList.add("dropdown-navbar-anim-hide");

        navbarMenu.classList.remove("navbar-menu-anim-hide");
        navbarMenu.classList.add("navbar-menu-anim-show");
    };

    const onLeaveRegion = (event) => {
        const to = event.relatedTarget;
        if (to && isInRegion(to)) return;

        if (hideTimeout) {
            clearTimeout(hideTimeout);
        }
        hideTimeout = setTimeout(reallyHideAll, 150);
    };

    const toggleNavbar = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (isOpen) {
            if (hideTimeout) {
                clearTimeout(hideTimeout);
            }
            reallyHideAll();
        } else {
            showAll();
        }
    };

    // Desktop : hover
    regionEls.forEach((el) => {
        el.addEventListener("mouseenter", showAll);
        el.addEventListener("mouseleave", onLeaveRegion);
    });

    // Mobile : click/touch
    toggle.addEventListener("click", toggleNavbar);
    toggle.addEventListener("touchstart", toggleNavbar, { passive: false });

    // Fermer si on clique ailleurs
    document.addEventListener("click", (event) => {
        if (isOpen && !isInRegion(event.target)) {
            if (hideTimeout) {
                clearTimeout(hideTimeout);
            }
            reallyHideAll();
        }
    });

    document.addEventListener("touchstart", (event) => {
        if (isOpen && !isInRegion(event.target)) {
            if (hideTimeout) {
                clearTimeout(hideTimeout);
            }
            reallyHideAll();
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    attachNavbarDropdown();
    attachHoverDropdown(".language-dropdown-toggle");
    attachHoverDropdown(".theme-dropdown-toggle");
});
document.addEventListener("DOMContentLoaded", function () {

    const box = document.getElementById("cookie-consent");
    const accept = document.getElementById("accept-cookies");
    const refuse = document.getElementById("refuse-cookies");
    const rememberCheckbox = document.getElementById("_remember_me");

    // Vérifier que les éléments existent
    if (!box || !accept || !refuse) {
        console.warn("Éléments cookie non trouvés");
        return;
    }

    const consent = localStorage.getItem("cookie-consent");

    // AFFICHAGE INITIAL
    if (!consent) {
        setTimeout(() => {
            box.classList.add("show");
        }, 600);
    } else if (consent === "refused") {
        box.classList.add("collapsed");
    }

    // DÉSACTIVER REMEMBER ME SI REFUS
    if (consent !== "accepted" && rememberCheckbox) {
        rememberCheckbox.disabled = true;
    }

    // ACCEPTER
    accept.addEventListener("click", () => {
        localStorage.setItem("cookie-consent", "accepted");
        box.classList.remove("show");
        box.classList.add("hidden");
        if (rememberCheckbox) rememberCheckbox.disabled = false;
    });

    // REFUSER
    refuse.addEventListener("click", () => {
        localStorage.setItem("cookie-consent", "refused");
        box.classList.remove("show");
        box.classList.add("collapsed");

        if (rememberCheckbox) {
            rememberCheckbox.checked = false;
            rememberCheckbox.disabled = true;
        }
    });

    // SI ON CLIQUE SUR LE BOUTON RÉDUIT → RÉAFFICHER LA BANNIÈRE
    const collapseBtn = document.getElementById("cookie-expand-btn");
    if (collapseBtn) {
        collapseBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            box.classList.remove("collapsed");
            box.classList.add("show");
        });
    }

    // SI ON CLIQUE SUR REMEMBER ME APRÈS UN REFUS → RÉAFFICHER LA BANNIÈRE
    if (rememberCheckbox) {
        const rememberLabel = document.querySelector('label[for="_remember_me"]');
        const clickHandler = (e) => {
            const currentConsent = localStorage.getItem("cookie-consent");

            if (currentConsent === "refused") {
                e.preventDefault();
                e.stopPropagation();
                rememberCheckbox.checked = false;
                box.classList.remove("collapsed");
                box.classList.add("show");
                return false;
            }
        };

        rememberCheckbox.addEventListener("click", clickHandler);
        if (rememberLabel) {
            rememberLabel.addEventListener("click", clickHandler);
        }
    }

});

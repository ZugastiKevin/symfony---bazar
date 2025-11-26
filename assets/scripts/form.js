/* =====================================================
   VALIDATION GÉNÉRIQUE DES FORMULAIRES
   Emails + Mots de passe + Pseudos + Custom validators
   Compatible Support / User / Login / ForgotPassword
   ===================================================== */

const selector = 'input[type="text"], input[type="number"], input[type="email"], input[type="password"], select, textarea';
const inputs = document.querySelectorAll(selector);
const form = document.querySelector('.all-form');

// =====================================================
// Fonctions d'apparence des inputs
// =====================================================
function initInput(inputEl) {
    const wrapper = inputEl.closest('span') || inputEl.parentElement;

    if (inputEl.value.trim() !== '') {
        wrapper?.classList.add('inputs--filled');
    }

    inputEl.addEventListener('focus', onFocus);
    inputEl.addEventListener('blur', onBlur);

    // Pour le responsive mobile
    inputEl.addEventListener('touchend', onBlur);
}

function onFocus(ev) {
    const parent = ev.target.closest('span') || ev.target.parentElement;

    if (parent && parent.classList) {
        parent.classList.add('inputs--filled');
    }
}

function onBlur(ev) {
    const input = ev.target;
    const wrapper = input.closest('span') || input.parentElement;

    if (input.value.trim() === '') {
        wrapper?.classList.remove('inputs--filled', 'inputs--invalid');
    } else {
        wrapper?.classList.add('inputs--filled');
    }
}

function liveValidation(ev) {
    const input = ev.target;
    const wrapper = input.closest('span') || input.parentElement;

    if (!input.checkValidity()) {
        wrapper?.classList.add('inputs--invalid');
    } else {
        wrapper?.classList.remove('inputs--invalid');
    }
}

// =====================================================
// Système de validation générique
// =====================================================
const validators = {};
const validationTimers = {}; // Stockage des timers

function registerValidator(inputId, errorId, validateFn) {
    validators[inputId] = { errorId, validateFn };
}

function runValidator(inputId) {
    const config = validators[inputId];
    if (!config) return true;

    const input = document.getElementById(inputId);
    const errorBox = document.getElementById(config.errorId);

    if (!input || !errorBox) return true;

    const wrapper = input.closest('span') || input.parentElement;

    errorBox.style.visibility = 'hidden';
    errorBox.textContent = '\u00A0';
    wrapper?.classList.remove('inputs--invalid');

    const result = config.validateFn(input.value, input);

    if (result !== true) {
        errorBox.textContent = result;
        errorBox.style.visibility = 'visible';
        wrapper?.classList.add('inputs--invalid');
        return false;
    }

    return true;
}

function attachValidator(inputId, eventTypes = ['input', 'blur'], delayMs = 3000) {
    const input = document.getElementById(inputId);
    if (!input) return;

    eventTypes.forEach(eventType => {
        if (eventType === 'input') {
            // Pour l'événement 'input', on ajoute un délai de 3 secondes
            input.addEventListener('input', () => {
                if (validationTimers[inputId]) {
                    clearTimeout(validationTimers[inputId]);
                }

                validationTimers[inputId] = setTimeout(() => {
                    runValidator(inputId);
                }, delayMs);
            });
        } else if (eventType === 'change') {
            // Pour 'change', validation immédiate
            input.addEventListener('change', () => {
                if (validationTimers[inputId]) {
                    clearTimeout(validationTimers[inputId]);
                    delete validationTimers[inputId];
                }
                runValidator(inputId);
            });
        } else if (eventType === 'blur') {
            // Pour 'blur', validation immédiate
            input.addEventListener('blur', () => {
                if (validationTimers[inputId]) {
                    clearTimeout(validationTimers[inputId]);
                    delete validationTimers[inputId];
                }
                runValidator(inputId);
            });

            // Ajouter 'touchend' pour mobile
            input.addEventListener('touchend', () => {
                if (validationTimers[inputId]) {
                    clearTimeout(validationTimers[inputId]);
                    delete validationTimers[inputId];
                }
                // Petit délai pour éviter les doubles déclenchements
                setTimeout(() => runValidator(inputId), 100);
            });
        } else if (eventType === 'click') {
            // Pour 'click', validation immédiate
            input.addEventListener('click', () => {
                if (validationTimers[inputId]) {
                    clearTimeout(validationTimers[inputId]);
                    delete validationTimers[inputId];
                }
                runValidator(inputId);
            });
        }
    });
}

// =====================================================
// VALIDATEURS EMAILS (génériques pour tout le site)
// =====================================================

function registerEmail(inputId, errorId) {
    registerValidator(inputId, errorId, (value, input) => {
        const v = value.trim();
        if (v === "") return "Veuillez saisir une adresse email.";
        if (!input.checkValidity()) return "Adresse email invalide.";
        return true;
    });
}

const emailFields = [
    { inputId: "support_email", errorId: "email-error" },
    { inputId: "user_email", errorId: "user_email-error" },
    { inputId: "username", errorId: "username-error" },
    { inputId: "forgot_password_request_form_email", errorId: "forgot_email-error" }
];

emailFields.forEach(f => registerEmail(f.inputId, f.errorId));

// =====================================================
// VALIDATEURS PSEUDOS (génériques)
// =====================================================

function registerPseudo(inputId, errorId, minLength = 3) {
    registerValidator(inputId, errorId, (value) => {
        const v = value.trim();
        if (v === "") return "Veuillez entrer votre pseudo.";
        if (v.length < minLength) return `Le pseudo doit contenir au moins ${minLength} caractères.`;
        return true;
    });
}

const pseudoFields = [
    { inputId: "support_name", errorId: "pseudo-error", minLength: 3 },
    { inputId: "user_pseudo", errorId: "user_pseudo-error", minLength: 3 },
];

pseudoFields.forEach(f => registerPseudo(f.inputId, f.errorId, f.minLength));

// =====================================================
// VALIDATEURS MOTS DE PASSE (génériques)
// =====================================================

registerValidator("user_plainPassword_first", "user_password_first-error", (value) => {
    const v = value.trim();
    if (v === "") return "Veuillez entrer un mot de passe.";
    if (v.length < 8) return "Au moins 8 caractères requis.";
    if (!/[A-Z]/.test(v)) return "Une majuscule est requise.";
    if (!/\d/.test(v)) return "Un chiffre est requis.";
    if (!/[\W_]/.test(v)) return "Un caractère spécial est requis.";
    return true;
});

registerValidator("user_plainPassword_second", "user_password_second-error", (value) => {
    const first = document.getElementById("user_plainPassword_first");
    if (!first) return true;

    if (value.trim() === "") return "Veuillez confirmer votre mot de passe.";
    if (value !== first.value) return "Les mots de passe ne correspondent pas.";
    return true;
});

// Mot de passe de connexion
registerValidator("password", "password-error", (value) => {
    if (value.trim() === "") return "Veuillez entrer votre mot de passe.";
    return true;
});

// Mot de passe "oublié" (nouveau mot de passe, si tu as un champs dédié)
registerValidator("forgot_password", "forgot_password-error", (value) => {
    if (value.trim() === "") return "Veuillez entrer un mot de passe.";
    return true;
});

// =====================================================
// VALIDATEURS SUPPORT SUPPLÉMENTAIRES → category / message / image
// =====================================================

registerValidator("support_category", "selecte-error", (value) => {
    if (!value || value.trim() === "") return "Veuillez choisir une catégorie.";
    return true;
});

registerValidator("support_message", "text-area-error", (value) => {
    const v = value.trim();
    if (v === "") return "Veuillez entrer un message.";
    if (v.length < 10) return "Le message doit contenir au moins 10 caractères.";
    return true;
});

// VALIDATION DE L’IMAGE (support)
registerValidator("support_imageFile", "image-error", (value, input) => {
    const file = input.files[0];
    if (!file) return true;

    const allowed = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    const max = 2 * 1024 * 1024;

    if (!allowed.includes(file.type)) return "Formats autorisés : JPEG, JPG, PNG, WEBP.";
    if (file.size > max) return "Image trop volumineuse (max 2 Mo).";

    return true;
});

// ========================
// SOUMISSION DU FORMULAIRE
// ========================
function onSubmit(ev) {
    let hasError = false;

    // Annuler tous les timers en cours
    Object.keys(validationTimers).forEach(inputId => {
        clearTimeout(validationTimers[inputId]);
        delete validationTimers[inputId];
    });

    // Vérifier tous les validateurs enregistrés
    Object.keys(validators).forEach((inputId) => {
        if (!runValidator(inputId)) {
            hasError = true;
        }
    });

    // Vérifier la validité HTML5 des champs sans validateur custom
    const form = ev.target;
    const inputs = form.querySelectorAll(selector);

    inputs.forEach((input) => {
        // Ignorer les champs qui ont déjà un validateur custom
        if (validators[input.id]) return;

        const wrapper = input.closest('span') || input.parentElement;

        if (!input.checkValidity()) {
            wrapper?.classList.add('inputs--invalid');
            hasError = true;
        } else {
            wrapper?.classList.remove('inputs--invalid');
        }
    });

    if (hasError) {
        ev.preventDefault();
    }
}

// ========================
// INITIALISATION
// ========================
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.all-form');
    const loginForm = document.getElementById('login-form');
    const inputs = document.querySelectorAll(selector);

    // Initialiser les inputs de base
    inputs.forEach((input) => {
        initInput(input);

        if (input.tagName === 'SELECT' && input.value) {
            const wrapper = input.closest('span') || input.parentElement;
            wrapper?.classList.add('inputs--filled');
        }
    });

    // Attacher les validateurs du formulaire de support
    attachValidator('support_name', ['input', 'blur'], 3000);
    attachValidator('support_email', ['input', 'blur'], 3000);
    attachValidator('support_category', ['change', 'blur'], 3000);
    attachValidator('support_message', ['input', 'blur'], 3000);
    attachValidator('support_imageFile', ['change'], 0);

    // Attacher les validateurs du formulaire utilisateur
    attachValidator('user_pseudo', ['input', 'blur'], 3000);
    attachValidator('user_email', ['input', 'blur'], 3000);
    attachValidator('user_plainPassword_first', ['input', 'blur'], 3000);
    attachValidator('user_plainPassword_second', ['input', 'blur'], 3000);

    // Attacher les validateurs du formulaire de connexion
    attachValidator('username', ['input', 'blur'], 3000);
    attachValidator('password', ['input', 'blur'], 3000);

    // Attacher les validateurs éventuels du formulaire "mot de passe oublié"
    attachValidator('forgot_password_request_form_email', ['input', 'blur'], 3000);
    attachValidator('forgot_password', ['input', 'blur'], 3000);

    // Attacher la validation au submit
    if (form) {
        form.addEventListener('submit', onSubmit);
    }

    // Attacher la validation au formulaire de connexion
    if (loginForm) {
        loginForm.addEventListener('submit', onSubmit);
    }
});

const selector = 'input[type="text"], input[type="number"], input[type="email"], input[type="password"], select, textarea';
const inputs = document.querySelectorAll(selector);
const form = document.querySelector('.all-form');

// ========================
// FONCTIONS D'INPUT
// ========================
function initInput(inputEl) {
    const wrapper = inputEl.closest('span') || inputEl.parentElement;

    if (inputEl.value.trim() !== '') {
        wrapper?.classList.add('inputs--filled');
    }

    inputEl.addEventListener('focus', onFocus);
    inputEl.addEventListener('blur', onBlur);
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
        wrapper?.classList.remove('inputs--filled');
        wrapper?.classList.remove('inputs--invalid');
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

// ========================
// VALIDATEURS PERSONNALISÉS
// ========================
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
    errorBox.textContent = '';
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
                // Annuler le timer précédent s'il existe
                if (validationTimers[inputId]) {
                    clearTimeout(validationTimers[inputId]);
                }

                // Créer un nouveau timer
                validationTimers[inputId] = setTimeout(() => {
                    runValidator(inputId);
                }, delayMs);
            });
        } else {
            // Pour les autres événements (blur, change), validation immédiate
            input.addEventListener(eventType, () => {
                // Annuler le timer en cours si l'utilisateur quitte le champ
                if (validationTimers[inputId]) {
                    clearTimeout(validationTimers[inputId]);
                    delete validationTimers[inputId];
                }
                runValidator(inputId);
            });
        }
    });
}

// ========================
// DÉFINITION DES VALIDATIONS
// ========================

// Validation Pseudo (Name)
registerValidator('support_name', 'pseudo-error', (value) => {
    if (value.trim() === '') {
        return "Veuillez entrer votre pseudo.";
    }
    if (value.length < 3) {
        return "Le pseudo doit contenir au moins 3 caractères.";
    }
    return true;
});

// Validation Email
registerValidator('support_email', 'email-error', (value, input) => {
    if (value.trim() === '') {
        return "Veuillez saisir une adresse email.";
    }
    if (!input.checkValidity()) {
        return "Adresse email invalide.";
    }
    return true;
});

// Validation Select (Category)
registerValidator('support_category', 'selecte-error', (value) => {
    if (!value || value.trim() === '') {
        return "Veuillez choisir une catégorie.";
    }
    return true;
});

// Validation Textarea (Message)
registerValidator('support_message', 'text-area-error', (value) => {
    if (value.trim() === '') {
        return "Veuillez entrer un message.";
    }
    if (value.length < 10) {
        return "Le message doit contenir au moins 10 caractères.";
    }
    return true;
});

// Validation Image
registerValidator('support_imageFile', 'image-error', (value, input) => {
    const file = input.files[0];
    if (!file) return true;

    const allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    const max = 2 * 1024 * 1024;

    if (!allowed.includes(file.type)) {
        return "Formats autorisés : JPEG, JPG, PNG, WEBP.";
    }

    if (file.size > max) {
        return "Image trop volumineuse (max 2 Mo).";
    }

    return true;
});

// ========================
// VALIDATIONS FORMULAIRE UTILISATEUR
// ========================

// Validation Pseudo Utilisateur
registerValidator('user_pseudo', 'user_pseudo-error', (value) => {
    if (value.trim() === '') {
        return "Veuillez entrer votre pseudo.";
    }
    if (value.length < 3) {
        return "Le pseudo doit contenir au moins 3 caractères.";
    }
    return true;
});

// Validation Email Utilisateur
registerValidator('user_email', 'user_email-error', (value, input) => {
    if (value.trim() === '') {
        return "Veuillez saisir une adresse email.";
    }
    if (!input.checkValidity()) {
        return "Adresse email invalide.";
    }
    return true;
});

// Validation Mot de passe (utiliser les vrais IDs)
registerValidator('user_plainPassword_first', 'user_password_first-error', (value) => {
    if (value.trim() === '') {
        return "Veuillez entrer un mot de passe.";
    }
    if (value.length < 8) {
        return "Le mot de passe doit contenir au moins 8 caractères.";
    }

    // Vérifier majuscule
    if (!/[A-Z]/.test(value)) {
        return "Le mot de passe doit contenir au moins une majuscule.";
    }

    // Vérifier chiffre
    if (!/\d/.test(value)) {
        return "Le mot de passe doit contenir au moins un chiffre.";
    }

    // Vérifier caractère spécial
    if (!/[\W_]/.test(value)) {
        return "Le mot de passe doit contenir au moins un caractère spécial.";
    }

    return true;
});

// Validation Confirmation mot de passe (utiliser les vrais IDs)
registerValidator('user_plainPassword_second', 'user_password_second-error', (value) => {
    const firstPassword = document.getElementById('user_plainPassword_first');
    if (!firstPassword) return true;

    if (value.trim() === '') {
        return "Veuillez confirmer votre mot de passe.";
    }
    if (value !== firstPassword.value) {
        return "Les mots de passe ne correspondent pas.";
    }
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

    // Attacher les validateurs du formulaire utilisateur (avec les vrais IDs)
    attachValidator('user_pseudo', ['input', 'blur'], 3000);
    attachValidator('user_email', ['input', 'blur'], 3000);
    attachValidator('user_plainPassword_first', ['input', 'blur'], 3000);
    attachValidator('user_plainPassword_second', ['input', 'blur'], 3000);

    // Attacher la validation au submit
    if (form) {
        form.addEventListener('submit', onSubmit);
    }
});

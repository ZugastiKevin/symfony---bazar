const selector = 'input[type="text"], input[type="number"], input[type="email"], input[type="password"], select, textarea';
const inputs = document.querySelectorAll(selector);
const form = document.querySelector('.all-form');

function initInput(inputEl) {
    const wrapper = inputEl.closest('span');
    if (inputEl.value.trim() !== '') wrapper?.classList.add('inputs--filled');

    inputEl.addEventListener('focus', () => wrapper?.classList.add('inputs--filled'));
    inputEl.addEventListener('blur', onBlur);
}

function onBlur(ev) {
    const input = ev.target;
    const wrapper = input.closest('span');

    if (input.value.trim() === '') {
        wrapper.classList.remove('inputs--filled', 'inputs--invalid');
    } else {
        wrapper.classList.add('inputs--filled');
        if (!input.checkValidity()) wrapper.classList.add('inputs--invalid');
    }
}

function createValidator({ inputId, errorId, validate }) {
    document.addEventListener('DOMContentLoaded', () => {
        const input = document.getElementById(inputId);
        const errorBox = document.getElementById(errorId);

        if (!input || !errorBox) return;

        const wrapper = input.closest('span');

        function run() {
            errorBox.style.display = 'none';
            errorBox.textContent = '';
            wrapper?.classList.remove('inputs--invalid');

            const result = validate(input.value, input, errorBox);

            if (result !== true) {
                errorBox.textContent = result;
                errorBox.style.display = 'block';
                wrapper?.classList.add('inputs--invalid');
                return false;
            }

            return true;
        }

        input.addEventListener('input', run);
        input.addEventListener('blur', run);

        // exposer la fonction globale pour onSubmit
        window[`validate_${inputId}`] = run;
    });
}

createValidator({
    inputId: 'pseudo',
    errorId: 'pseudo-error',
    validate: (value) => {
        if (value.trim() === '') return "Veuillez entrer votre pseudo.";
        if (value.length < 3) return "Le pseudo doit contenir au moins 3 caractères.";
        return true;
    }
});

createValidator({
    inputId: 'email',
    errorId: 'email-error',
    validate: (value, input) => {
        if (value.trim() === '') return "Veuillez saisir une adresse email.";
        if (!input.checkValidity()) return "Adresse email invalide.";
        return true;
    }
});

createValidator({
    inputId: 'selecte',
    errorId: 'selecte-error',
    validate: (value) => {
        if (value === "" || value === null) return "Veuillez choisir une catégorie.";
        return true;
    }
});

createValidator({
    inputId: 'text-area',
    errorId: 'text-area-error',
    validate: (value) => {
        if (value.trim() === '') return "Veuillez entrer un message.";
        if (value.length < 10) return "Le message doit contenir au moins 10 caractères.";
        return true;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('support_imageFile');
    const errorBox = document.getElementById('image-error');
    if (!input || !errorBox) return;

    const wrapper = input.closest('span');
    const allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    const max = 2 * 1024 * 1024;

    function validateFile() {
        errorBox.style.display = 'none';
        wrapper?.classList.remove('inputs--invalid');

        const file = input.files[0];
        if (!file) return true;

        if (!allowed.includes(file.type)) {
            errorBox.textContent = "Formats autorisés : JPEG, JPG, PNG, WEBP.";
            errorBox.style.display = 'block';
            wrapper?.classList.add('inputs--invalid');
            return false;
        }

        if (file.size > max) {
            errorBox.textContent = "Image trop volumineuse (max 2 Mo).";
            errorBox.style.display = 'block';
            wrapper?.classList.add('inputs--invalid');
            return false;
        }

        return true;
    }

    input.addEventListener('change', validateFile);
    window.validate_support_imageFile = validateFile;
});

function onSubmit(ev) {
    const wrappers = ev.target.querySelectorAll('span');
    let hasError = false;

    // Check native HTML validation
    wrappers.forEach((wrapper) => {
        const input = wrapper.querySelector(selector);
        if (input && !input.checkValidity()) {
            wrapper.classList.add('inputs--invalid');
            hasError = true;
        }
    });

    // Check all custom validators
    for (const key in window) {
        if (key.startsWith("validate_") && typeof window[key] === "function") {
            if (!window[key]()) hasError = true;
        }
    }

    if (hasError) ev.preventDefault();
}

if (form) form.addEventListener('submit', onSubmit);

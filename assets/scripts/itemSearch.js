document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('search-input');
    const btn = document.getElementById('search-button');
    const results = document.getElementById('results');
    const clear   = document.getElementById('search-clear');

    const asideInput = document.getElementById('place-order-search-input');
    const asideClear = document.getElementById('place-order-search-clear');
    const toggleBtn  = document.getElementById('place-order-toggle');

    function clearResults() {
        if (results) {
            results.innerHTML = '';
        }
    }

    function updateButton() {
        if (!input) return;

        const v = input.value.trim();
        const hasValue = v !== '';

        if (clear) {
            const wrapper = clear.closest('.search-input-wrapper');
            if (wrapper) {
                wrapper.classList.toggle('has-value', hasValue);
            }
        }

        if (asideClear) {
            const wrapper = asideClear.closest('.search-input-wrapper');
            if (wrapper) {
                wrapper.classList.toggle('has-value', hasValue);
            }
        }

        if (!hasValue) {
            clearResults();
        }

        if (asideInput) {
            asideInput.value = input.value;
        }
    }

    if (input) {
        updateButton();
        input.addEventListener('input', updateButton);
    }

    if (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            const firstLink =
                document.querySelector('#results .results-list .results-content a') ||
                document.querySelector('#results a');

            if (firstLink) {
                firstLink.click();
            }
        });
    }

    if (clear && input) {
        clear.addEventListener('click', function (e) {
            e.preventDefault();

            input.value = '';

            updateButton();

            input.focus();
        });
    }

    document.addEventListener('htmx:beforeRequest', function (evt) {
        const detail = evt.detail || {};
        const el = detail.elt;

        if (!el || el.id !== 'search-input') return;

        const v = el.value.trim();

        if (v === '') {
            evt.preventDefault();
            return;
        }

        const icon    = document.getElementById("search-icon");
        const spinner = document.getElementById("search-spinner");

        if (icon && spinner) {
            icon.style.display = "none";
            spinner.style.display = "inline-block";
        }
    });

    document.addEventListener('htmx:afterRequest', function (evt) {
        const detail = evt.detail || {};
        const el = detail.elt;

        if (!el || el.id !== 'search-input') return;

        const icon    = document.getElementById("search-icon");
        const spinner = document.getElementById("search-spinner");

        if (icon && spinner) {
            spinner.style.display = "none";
            icon.style.display = "inline-block";
        }

        updateButton();
    });

    if (toggleBtn && input && asideInput) {
        toggleBtn.addEventListener('click', () => {
            asideInput.value = input.value;
        });
    }

    if (asideInput && input) {
        asideInput.addEventListener('input', () => {
            // copie la valeur dans le champ qui a les attributs hx-*
            input.value = asideInput.value;

            // met à jour l'état du bouton / clear / résultats
            updateButton();

            // déclenche un keyup pour que htmx réagisse (hx-trigger="keyup changed delay:300ms")
            const evt = new KeyboardEvent('keyup', { bubbles: true });
            input.dispatchEvent(evt);
        });
    }

    if (asideClear && asideInput) {
        asideClear.addEventListener('click', (e) => {
            e.preventDefault();
            asideInput.value = '';
            asideInput.focus();

            // si tu veux aussi vider la recherche principale et les résultats :
            if (input) {
                input.value = '';
                updateButton();
            }
        });
    }
});
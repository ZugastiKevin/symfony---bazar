document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('search-input');
    const btn = document.getElementById('search-button');
    const results = document.getElementById('results');
    const clear   = document.getElementById('search-clear');

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

        if (!hasValue) {
            clearResults();
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
});
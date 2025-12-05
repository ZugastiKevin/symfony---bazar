document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('search-input');
    const btn = document.getElementById('search-button');
    const results = document.getElementById('results');
    const spinner = document.getElementById('spinner');

    function updateButton() {
        const v = (input && input.value || '').trim();
    }

    if (input) {
        updateButton();
        input.addEventListener('input', updateButton);
    }

    document.addEventListener('htmx:beforeRequest', function (evt) {
        const el = evt.detail && evt.detail.elt;
        if (!el || el.id !== 'search-input') return;

        const v = el.value.trim();

        // Si vide -> annuler la requête et vider l'affichage
        if (v === '') {
            evt.preventDefault();
            if (results) results.innerHTML = '';
            if (spinner) spinner.style.display = 'none';
            return;
        }

        // Pour 1-2 caractères, laisser la requête partir (le backend décidera de chercher en BDD)
        if (spinner) spinner.style.display = 'inline';
    });

    document.addEventListener('htmx:afterRequest', function (evt) {
        const el = evt.detail && evt.detail.elt;
        if (el && el.id === 'search-input') {
            if (spinner) spinner.style.display = 'none';
        }
    });
});
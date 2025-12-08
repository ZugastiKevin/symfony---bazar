import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.scss';
import './scripts/form.js';
import './scripts/remember_me.js';
import './scripts/reset-btn.js';
import './scripts/itemSearch.js';
import './scripts/place-order.js';
import './scripts/dropdown.js';
import 'htmx.org';
window.htmx = require('htmx.org');

document.addEventListener('click', function (e) {
    const btn = e.target.closest('.btn-copy');
    if (!btn) return;

    const text = btn.getAttribute('data-copy');
    if (!text) return;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(() => {});
    } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
            document.execCommand('copy');
        } catch (err) {}
        document.body.removeChild(ta);
    }

    const card = btn.closest('.order-card');
    if (!card) return;

    const popup = card.querySelector('.copy-popup');
    if (!popup) return;

    popup.textContent = text;
    popup.classList.add('visible');

    setTimeout(() => {
        popup.classList.remove('visible');
        popup.textContent = '';
    }, 2000);
});

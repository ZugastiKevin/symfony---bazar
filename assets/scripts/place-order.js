document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn   = document.getElementById('place-order-toggle');
    const panel       = document.getElementById('place-order-panel');
    const overlay     = document.getElementById('place-order-overlay');
    const closeBtn    = document.getElementById('place-order-close');

    const nameEl      = document.getElementById('po-item-name');
    const imgEl       = document.getElementById('po-item-image');
    const uniqueEl    = document.getElementById('po-item-unique');
    const qtyRange    = document.getElementById('po-quantity');
    const qtyValue    = document.getElementById('po-quantity-value');
    const priceInput  = document.getElementById('po-price');
    const priceTotal  = document.getElementById('po-price-total');

    if (!toggleBtn || !panel || !overlay) {
        return;
    }

    function getFirstResultElement() {
        // Adapter le sélecteur à ta structure réelle
        return document.querySelector('#results .results-list .results-content .result-item')
            || document.querySelector('#results .result-item')
            || null;
    }

    function fillPanelFromFirstResult() {
        const first = getFirstResultElement();

        if (!first) {
            if (nameEl) nameEl.textContent = 'Aucun item sélectionné';
            if (imgEl) imgEl.src = '';
            if (uniqueEl) uniqueEl.textContent = '';
            return;
        }

        const itemName   = first.dataset.itemName || first.textContent.trim();
        const itemImage  = first.dataset.itemImage || '';
        const itemUnique = first.dataset.itemUnique || '';
        const itemPlat   = first.dataset.itemPlatinum || '';

        if (nameEl)   nameEl.textContent   = itemName;
        if (uniqueEl) uniqueEl.textContent = itemUnique;
        if (imgEl) {
            imgEl.src = itemImage;
            imgEl.alt = itemName;
        }

        if (itemPlat && !isNaN(itemPlat)) {
            priceInput.value = parseInt(itemPlat, 10);
            updatePriceTotal();
        }
    }

    function openPanel() {
        fillPanelFromFirstResult();
        panel.classList.add('is-open');
        overlay.classList.add('is-open');
    }

    function closePanel() {
        panel.classList.remove('is-open');
        overlay.classList.remove('is-open');
    }

    function updateQuantityDisplay() {
        if (qtyValue && qtyRange) {
            qtyValue.textContent = qtyRange.value;
            updatePriceTotal();
        }
    }

    function updatePriceTotal() {
        if (!priceInput || !qtyRange || !priceTotal) return;
        const qty   = parseInt(qtyRange.value || '1', 10);
        const price = parseInt(priceInput.value || '0', 10);
        const total = qty * price;
        priceTotal.textContent = isNaN(total) ? '0' : total.toString();
    }

    // Events
    toggleBtn.addEventListener('click', function (e) {
        e.preventDefault();
        openPanel();
    });

    overlay.addEventListener('click', closePanel);
    if (closeBtn) closeBtn.addEventListener('click', closePanel);

    if (qtyRange) {
        qtyRange.addEventListener('input', updateQuantityDisplay);
        updateQuantityDisplay();
    }

    if (priceInput) {
        priceInput.addEventListener('input', updatePriceTotal);
    }

    // Quand HTMX met à jour #results, on peut (optionnel) re-préparer les données
    document.addEventListener('htmx:afterSwap', function (evt) {
        if (evt.target && evt.target.id === 'results') {
            // facultatif : auto refresh du panel si ouvert
            if (panel.classList.contains('is-open')) {
                fillPanelFromFirstResult();
            }
        }
    });
});

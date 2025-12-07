document.addEventListener('DOMContentLoaded', function () {
    const searchInput   = document.getElementById('search-input');
    const searchButton  = document.getElementById('search-button');
    const searchResults = document.getElementById('results');
    const searchClear   = document.getElementById('search-clear');
    const searchIcon    = document.getElementById('search-icon');
    const searchSpinner = document.getElementById('search-spinner');

    const toggleBtn     = document.getElementById('place-order-toggle');
    const panel         = document.getElementById('place-order-panel');
    const overlay       = document.getElementById('place-order-overlay');
    const closeBtn      = document.getElementById('place-order-close');

    const asideSearch   = document.getElementById('place-order-search-input');
    const asideClear    = document.getElementById('place-order-search-clear');

    const nameEl        = document.getElementById('po-item-name');
    const uniqueEl      = document.getElementById('po-item-unique');
    const itemIdInput   = document.getElementById('po-item-id');
    const imgEl         = document.querySelector('.po-item-image img');
    const itemUniqueNameInput = document.getElementById('po-item-uniqueName');
    const rankSection = document.querySelector('.po-rank-section');
    const rankInput   = document.querySelector('.po-rank-section .number-line__input');


    function clearResults() {
        if (searchResults) {
            searchResults.innerHTML = '';
        }
    }

    function updateSearchUi() {
        if (!searchInput) return;

        const v = searchInput.value.trim();
        const hasValue = v !== '';

        if (searchClear) {
            const wrapper = searchClear.closest('.search-input-wrapper');
            if (wrapper) {
                wrapper.classList.toggle('has-value', hasValue);
            }
        }

        if (!hasValue) {
            clearResults();
        }

        // synchronise l'aside avec le search principal
        if (asideSearch) {
            asideSearch.value = searchInput.value;
        }
    }

    function getFirstResultElement() {
        return document.querySelector('#results .results-list .results-content[data-item-name]') || null;
    }

    function fillPanelFromFirstResult() {
        const first = getFirstResultElement();

        if (!first) {
            if (nameEl)   nameEl.textContent   = 'Aucun item sélectionné';
            if (imgEl) {
                imgEl.src = '';
                imgEl.alt = '';
            }
            if (rankSection) {
                rankSection.classList.add('is-hidden');
            }
            return;
        }

        const uniqueName    = first.dataset.itemUnique    || '';
        const itemName      = first.dataset.itemName      || first.textContent.trim();
        const itemImageName = first.dataset.itemImageName || '';
        const itemCategory  = (first.dataset.itemCategory || '').toLowerCase();
        const fusionLimit   = parseInt(first.dataset.fusionLimit || '0', 10);

        if (itemUniqueNameInput)
            itemUniqueNameInput.value = uniqueName;

        if (nameEl)   nameEl.textContent   = itemName;

        if (imgEl) {
            imgEl.src = itemImageName;
            imgEl.alt = itemName;
        }

        if (rankSection) {
            if (itemCategory === 'mods' || itemCategory === 'mod') {
                rankSection.classList.remove('is-hidden');
            } else {
                rankSection.classList.add('is-hidden');
            }
        }

        if (rankInput) {
            if (!isNaN(fusionLimit) && fusionLimit > 0) {
                rankInput.max = fusionLimit;
                if (parseInt(rankInput.value || '0', 10) > fusionLimit) {
                    rankInput.value = fusionLimit;
                }
            } else {
                rankInput.max   = 0;
                rankInput.value = 0;
            }
        }
    }

    function openPanel() {
        fillPanelFromFirstResult();
        if (panel)   panel.classList.add('is-open');
        if (overlay) overlay.classList.add('is-open');
    }

    function closePanel() {
        if (panel)   panel.classList.remove('is-open');
        if (overlay) overlay.classList.remove('is-open');
    }

    // --- SEARCH PRINCIPAL (HTMX) ---

    if (searchInput) {
        updateSearchUi();
        searchInput.addEventListener('input', updateSearchUi);
    }

    if (searchButton) {
        searchButton.addEventListener('click', function (e) {
            e.preventDefault();

            const firstLink =
                document.querySelector('#results .results-list .results-content a') ||
                document.querySelector('#results a');

            if (firstLink) {
                firstLink.click();
            }
        });
    }

    if (searchClear && searchInput) {
        searchClear.addEventListener('click', function (e) {
            e.preventDefault();
            searchInput.value = '';
            updateSearchUi();
            searchInput.focus();
        });
    }

    // spinner HTMX
    document.addEventListener('htmx:beforeRequest', function (evt) {
        const detail = evt.detail || {};
        const el = detail.elt;

        if (!el || el.id !== 'search-input') return;

        const v = el.value.trim();
        if (v === '') {
            evt.preventDefault();
            return;
        }

        if (searchIcon && searchSpinner) {
            searchIcon.style.display = 'none';
            searchSpinner.style.display = 'inline-block';
        }
    });

    document.addEventListener('htmx:afterRequest', function (evt) {
        const detail = evt.detail || {};
        const el = detail.elt;

        if (!el || el.id !== 'search-input') return;

        if (searchIcon && searchSpinner) {
            searchSpinner.style.display = 'none';
            searchIcon.style.display = 'inline-block';
        }

        updateSearchUi();
    });

    // Quand HTMX remplace #results → si le panel est ouvert, on met à jour avec le nouveau premier résultat
    document.addEventListener('htmx:afterSwap', function (evt) {
        if (evt.target && evt.target.id === 'results') {
            if (panel && panel.classList.contains('is-open')) {
                fillPanelFromFirstResult();
            }
        }
    });

    // --- ASIDE : synchro + recherche BDD/API ---

    // ouverture du panneau
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function (e) {
            e.preventDefault();
            // copie la valeur actuelle de la barre de recherche principale
            if (searchInput && asideSearch) {
                asideSearch.value = searchInput.value;
            }
            openPanel();
        });
    }

    if (overlay) {
        overlay.addEventListener('click', closePanel);
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', closePanel);
    }

    // taper dans l'input de l'aside → met à jour le search principal + déclenche la recherche HTMX
    if (asideSearch && searchInput) {
        asideSearch.addEventListener('input', () => {
            searchInput.value = asideSearch.value;
            updateSearchUi();

            // déclenche un keyup pour que htmx/reactive (hx-trigger="keyup changed delay:300ms")
            const evt = new KeyboardEvent('keyup', { bubbles: true });
            searchInput.dispatchEvent(evt);
        });
    }

    // clear de l'aside
    if (asideClear && asideSearch) {
        asideClear.addEventListener('click', (e) => {
            e.preventDefault();
            asideSearch.value = '';
            asideSearch.focus();

            if (searchInput) {
                searchInput.value = '';
                updateSearchUi();
            }
        });
    }

    // auto increment decrement
    document.querySelectorAll('.number-line').forEach(line => {
        const input = line.querySelector('.number-line__input');
        const up    = line.querySelector('.up');
        const down  = line.querySelector('.down');

        if (!input || !up || !down) return;

        let interval = null;
        let holdTimer = null;

        const max = parseInt(input.getAttribute('max') || '9999999', 10);
        const min = parseInt(input.getAttribute('min') || '0', 10);

        if (input.value === '' || input.value === null) {
            input.value = min;
        }

        function clampValue(val) {
            val = parseInt(val, 10);
            if (isNaN(val)) val = min;
            if (val < min) val = min;
            if (val > max) val = max;
            return val;
        }

        function applyClamp() {
            input.value = clampValue(input.value);
        }

        function safeStepUp() {
            applyClamp();
            input.stepUp();
            applyClamp();
        }

        function safeStepDown() {
            applyClamp();
            input.stepDown();
            applyClamp();
        }

        function startHold(action) {
            action();

            holdTimer = setTimeout(() => {
                interval = setInterval(action, 70);
            }, 170);
        }

        function stopHold() {
            clearTimeout(holdTimer);
            holdTimer = null;

            if (interval !== null) {
                clearInterval(interval);
                interval = null;
            }
        }

        // increment
        up.addEventListener('mousedown', () => startHold(() => input.stepUp()));
        up.addEventListener('touchstart', () => startHold(() => input.stepUp()), { passive: true });

        // decrement
        down.addEventListener('mousedown', () => startHold(() => input.stepDown()));
        down.addEventListener('touchstart', () => startHold(() => input.stepDown()), { passive: true });

        // Empêcher toute entrée invalide au clavier
        input.addEventListener('input', () => {
            applyClamp();
        });

        // stop
        ['mouseup', 'mouseleave', 'touchend', 'touchcancel'].forEach(evt =>
            line.addEventListener(evt, stopHold)
        );
    });
});

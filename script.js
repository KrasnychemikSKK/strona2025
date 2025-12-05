document.addEventListener('DOMContentLoaded', () => {
    // 1. Funkcja do aktualizacji zegara w pasku zadań
    function updateClock() {
        const clockElement = document.getElementById('clock');
        const now = new Date();
        
        // Formatowanie godziny (np. 12:37 PM)
        const timeString = now.toLocaleTimeString('pl-PL', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true // Użycie AM/PM (typowe dla UI z lat 90.)
        });
        
        clockElement.textContent = timeString;
    }

    // Aktualizuj zegar co sekundę
    setInterval(updateClock, 1000);
    // Ustaw zegar natychmiast po załadowaniu
    updateClock();

    // 2. Obsługa przycisku "Wypożycz teraz!"
    const showAlertButton = document.getElementById('show-alert-btn');
    if (showAlertButton) {
        showAlertButton.addEventListener('click', () => {
            // Używamy natywnego alert() dla klasycznego okna dialogowego
            alert('UWAGA! Płyta jest gotowa do odbioru. Proszę skontaktuj się z obsługą w celu finalizacji transakcji. (ERROR CODE: 404 - Baza Danych VHS)');
            
            // Można też dodać prostą zmianę statusu
            const statusMessage = document.getElementById('status-message');
            if(statusMessage) {
                statusMessage.textContent = 'Trwa przetwarzanie...';
                // Ustawienie "Gotowy" z powrotem po 3 sekundach
                setTimeout(() => {
                    statusMessage.textContent = 'Gotowy';
                }, 3000);
            }
        });
    }

    // 3. (OPCJONALNIE) Prosta zmiana tytułu przy kliknięciu 'Minimalizuj'
    const minimizeButton = document.querySelector('.minimize');
    if (minimizeButton) {
        minimizeButton.addEventListener('click', () => {
            const windowTitle = document.querySelector('.window-title');
            if (windowTitle.textContent.includes('Video Club')) {
                windowTitle.textContent = '[Zminimalizowano]';
            } else {
                windowTitle.textContent = '💿 Video Club \'98';
            }
        });
    }
});
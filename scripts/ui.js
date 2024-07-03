// В ui.js будут функции для отображения таблицы чемпионов, запросов к серверу и взаимодействия с элементами интерфейса.

// Функция отображения таблицы чемпионов
function showChampionsTable(championsData) {
    championsBody.innerHTML = ''; // Очищаем предыдущие данные

    championsData.forEach(champion => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${champion.name}</td>
            <td>${champion.result}</td>
            <td>${champion.time}</td>
        `;
        championsBody.appendChild(row);
    });

    championsTableContainer.classList.remove('hidden');
}

// Обработчик события для кнопки "Сохранить"
saveBtn.addEventListener('click', () => {
    const playerName = playerNameInput.value.trim();
    const score = scoreboard.textContent.replace('Счёт: ', '');

    if (playerName) {
        const data = {
            name: playerName,
            result: parseInt(score),
            time: new Date().toLocaleDateString('ru-RU')
        };

        fetch('http://localhost:7070/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка при сохранении результата');
                }
                saveDialog.classList.add('hidden');
            })
            .catch(error => {
                console.error('Ошибка:', error);
            });
    }
});

// Остальная логика взаимодействия с интерфейсом и сервером...

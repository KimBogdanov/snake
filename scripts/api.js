const apiEndpoint = 'http://localhost:7070';

function saveScore(playerName, score) {
    const data = {
        name: playerName,
        result: score,
        time: new Date().toLocaleDateString('ru-RU')
    };

    fetch(`${apiEndpoint}/save`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            alert('Результат сохранен успешно!');
        })
        .catch(error => {
            console.error('Error saving score:', error);
            alert('Произошла ошибка при сохранении результата');
        });
}

function fetchChampions() {
    fetch(`${apiEndpoint}/champions`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(champions => {
            ui.displayChampions(champions);
        })
        .catch(error => {
            console.error('Error fetching champions:', error);
            alert('Произошла ошибка при загрузке чемпионов');
        });
}

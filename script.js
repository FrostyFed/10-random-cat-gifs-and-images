document.addEventListener('DOMContentLoaded', () => {
    const url = "https://api.thecatapi.com/v1/images/search?limit=10";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.container');

            container.innerHTML = ''; 

            data.forEach(cat => {
                const gameContainer = document.createElement('div');
                gameContainer.classList.add('game');
                
                const img = document.createElement('img');
                img.src = cat.url;
                img.alt = "Random Cat";
                img.style.width = '100%';
                img.style.height = 'auto';

                gameContainer.appendChild(img);

                container.appendChild(gameContainer);
            });
        })
});

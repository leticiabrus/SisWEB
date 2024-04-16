// Função para buscar os dados da API e exibir os heróis na página
async function fetchHeroes() {
    try {
        const response = await fetch('https://akabab.github.io/superhero-api/api/all.json');
        const data = await response.json();
        const heroList = document.getElementById('hero-list');

        data.forEach(hero => {
            const heroItem = document.createElement('div');
            heroItem.classList.add('hero-item');

            const heroImg = document.createElement('img');
            heroImg.classList.add('hero-img');
            heroImg.src = hero.images.sm;
            heroImg.alt = hero.name;

            const heroName = document.createElement('div');
            heroName.classList.add('hero-name');
            heroName.textContent = hero.name;

            heroItem.appendChild(heroImg);
            heroItem.appendChild(heroName);
            heroList.appendChild(heroItem);
        });
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}

// Chamar a função para buscar os heróis quando a página carregar
window.onload = fetchHeroes;
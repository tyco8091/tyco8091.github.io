document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const cocktailList = document.getElementById('cocktailList');
    const randomButton = document.getElementById('randomButton');
  
    searchButton.addEventListener('click', () => {
      const searchTerm = searchInput.value.trim();
      if (searchTerm === '') {
        alert('Please enter a search term');
        return;
      }
  
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;
  
      fetchCocktails(url);
    });
  
    randomButton.addEventListener('click', () => {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  
      fetchCocktails(url);
    });
  
    function fetchCocktails(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          displayCocktails(data.drinks);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  
    function displayCocktails(cocktails) {
      cocktailList.innerHTML = '';
  
      if (cocktails === null) {
        cocktailList.innerHTML = '<p>No cocktails found</p>';
        return;
      }
  
      cocktails.forEach(cocktail => {
        const cocktailDiv = document.createElement('div');
        cocktailDiv.classList.add('cocktail');
        cocktailDiv.innerHTML = `
          <h3>${cocktail.strDrink}</h3>
          <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" style="max-width: 100px;">
          <p>${cocktail.strInstructions}</p>
        `;
        cocktailList.appendChild(cocktailDiv);
      });
    }
  });
  
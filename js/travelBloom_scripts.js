
async function searchRecommendation() {
    try {
        const input = document.getElementById('conditionInput').value.toLowerCase(); 
        const resultDiv = document.getElementById('DisplayRecommendation');
        resultDiv.innerHTML = ''; // Limpiar el contenido previo

        const response = await fetch('./travel.json'); // Ajusta la ruta si es necesario

        if (!response.ok) { 
            throw new Error(`HTTP error! status: ${response.status}`);
        } 

        const data = await response.json();
        let found = false;

        data.countries.forEach(country => {
        country.cities.forEach(city => {
            if (city.name.toLowerCase().includes(input)) {
                    console.log('En Cities...');
                    resultDiv.innerHTML += `
                        <div>
                            <h3>Destination: ${city.name}</h3>
                            <img src="${city.imageUrl}" width=100% height="300" alt="${city.name}">
                            <p>${city.description}</p>
                        </div>`;
                    found = true;
                }
            });
        });

        data.temples.forEach(temple => {
            if (temple.name.toLowerCase().includes(input)) {
                console.log('En Temples...');
                resultDiv.innerHTML += `
                    <div>
                        <h3>Destination: ${temple.name}</h3>
                        <img src="${temple.imageUrl}" width=100% height="300" alt="${temple.name}">
                        <p>${temple.description}</p>
                    </div>`;
                found = true;
            }
        });

        data.beaches.forEach(beach => {
            if (beach.name.toLowerCase().includes(input)) {
                console.log('En Beaches...');
                resultDiv.innerHTML += `
                    <div>
                        <h3>Destination: ${beach.name}</h3>
                        <img src="${beach.imageUrl}" width=100% height="300" alt="${beach.name}">
                        <p>${beach.description}</p>
                    </div>`;
                found = true;
            }
        });

        if (!found) {
            resultDiv.innerHTML = "<p>No se encontraron resultados para tu búsqueda.</p>";
        }

    } catch (error) {
        console.error("Error al obtener el JSON:", error);
    }
}

// Escuchar el botón de búsqueda
const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', searchRecommendation );

function limpiarResultDiv() {
    //resultDiv.innerHTML = '';
}

// contact_us.html scripts
function thankyou(){
    alert('Thank you for contacting us!')
}
document.addEventListener("DOMContentLoaded", () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const jsonContainer = document.getElementById('json-container');
            data.forEach(item => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');

                const img = document.createElement('img');
                img.src = item.image;
                img.alt = item.name;

                const name = document.createElement('h2');
                name.textContent = item.name;

                const description = document.createElement('p');
                description.textContent = item.description;

                productDiv.appendChild(img);
                productDiv.appendChild(name);
                productDiv.appendChild(description);

                jsonContainer.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Rest of the code
    })
    .catch(error => console.error('Error fetching JSON:', error));

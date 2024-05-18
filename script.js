fetch('https://coding-week-2024-api.onrender.com/api/data')
    .then(response => response.json())
    .then(data => {
        const section1Data = data.slice(0, 3);
        const section2Data = data.slice(3);

        // Populate Section 1
        const section1 = document.getElementById('section-1');
        section1Data.forEach(item => {
            const container = document.createElement('div');
            container.classList.add('image-container');
            container.innerHTML = `
                <img src="${item.image}" style="height: 500px; width: 300px;">
                <div class="date">📅${item.date}</div>
                <div class="heading">${item.headline.slice(0, 20)}${item.headline.length > 20 ? '...' : ''}</div>
                <div class="${item.type.toLowerCase()}">${item.type}</div>
                <div class="featured">featured</div>
                <div class="additional-features hidden">
                <!-- Additional features content goes here -->
                <p><h3>headline-</h3>${item.headline}<br><h3>content-</h3>${item.content}<br><h3>author-</h3>${item.author}</p>
                </div>
            `;
            section1.appendChild(container);
            container.addEventListener('click', () => {
                const additionalFeatures = container.querySelector('.additional-features');
                additionalFeatures.classList.toggle('hidden');
            });
        });

        // Populate Section 2
        const section2 = document.getElementById('section-2');
        section2Data.forEach(item => {
            const nicheContainer = document.createElement('div');
            nicheContainer.classList.add('niche');
            nicheContainer.innerHTML = `
                <img src="${item.image}" style="height: 75px; width: 75px;">
                <div class="date">${item.date}</div>
                <div class="heading">${item.headline}</div>
                <div class="additional-features hidden">
                <!-- Additional features content goes here -->
                <p style="background-color:"white";><h3>type-</h3>${item.type}<br><h3>content-</h3>${item.content}<br><h3>author-</h3>${item.author}</p>
                </div>
            `;
            section2.appendChild(nicheContainer);
            nicheContainer.addEventListener('click', () => {
                const additionalFeatures = nicheContainer.querySelector('.additional-features');
                additionalFeatures.classList.toggle('hidden');
            });
        });
    })
    .catch(error => console.error('Error fetching data:', error));

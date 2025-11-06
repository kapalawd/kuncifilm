// Fungsi untuk menghasilkan daftar film secara dinamis
function generateFilmList() {
    const filmList = document.getElementById('film-list');
    films.forEach(film => {
        const li = document.createElement('li');
        li.className = 'film-item';
        li.innerHTML = `
            <h3>${film.id} - ${film.title}</h3>
            <p>${film.description}</p>
            <button class="access-button" data-link="${film.link}">Akses Film</button>
        `;
        filmList.appendChild(li);
    });
}

// Fungsi untuk menangani klik tombol akses film
function handleAccessButtonClick(event) {
    if (event.target.classList.contains('access-button')) {
        const link = event.target.getAttribute('data-link');
        if (link) {
            window.open(link, '_blank'); // Buka link di tab baru
        } else {
            alert('Link film belum tersedia. Silakan isi link di films-data.js.');
        }
    }
}

// Fungsi pencarian sederhana
function searchFilms() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('.film-item');
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? 'block' : 'none';
    });
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    generateFilmList();
    document.getElementById('film-list').addEventListener('click', handleAccessButtonClick);
});
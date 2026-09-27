// --- EFECTO GLOBAL DE ESTRELLITAS AL HACER CLIC ---
document.addEventListener('click', (e) => {
    const stars = ['✨', '⭐', '🌟', '✦'];
    for (let i = 0; i < 4; i++) {
        const star = document.createElement('div');
        star.className = 'star-particle';
        star.textContent = stars[Math.floor(Math.random() * stars.length)];
        
        star.style.left = `${e.clientX}px`;
        star.style.top = `${e.clientY}px`;
        
        const dx = (Math.random() - 0.5) * 80 + 'px';
        const dy = (Math.random() - 0.5) * 80 - 30 + 'px';
        star.style.setProperty('--dx', dx);
        star.style.setProperty('--dy', dy);

        document.body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 1000);
    }
});

// --- LÓGICA DE CONTROL DEL MODAL Y WHATSAPP ---
function openModal(titulo, icono, descripcion, detalles, numeroTelefono = "573000000000") {
    const modalTitle = document.getElementById('modal-title');
    const modalIcon = document.getElementById('modal-icon');
    const modalDesc = document.getElementById('modal-desc');
    const modalDetails = document.getElementById('modal-details');
    const modalWaBtn = document.getElementById('modal-wa-btn');
    const modalOverlay = document.getElementById('modal-overlay');

    if (modalOverlay) {
        modalTitle.textContent = titulo;
        modalIcon.textContent = icono;
        modalDesc.textContent = descripcion;
        modalDetails.textContent = detalles;

        const mensajeWA = encodeURIComponent(`Hola ✨, me gustaría agendar o solicitar más información sobre el servicio: ${titulo}`);
        modalWaBtn.href = `https://wa.me/${numeroTelefono}?text=${mensajeWA}`;

        modalOverlay.classList.add('active');
    }
}

function closeModal() {
    const modalOverlay = document.getElementById('modal-overlay');
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
    }
}

function closeModalOnOverlay(e) {
    if (e.target.id === 'modal-overlay') {
        closeModal();
    }
}
const signosZodiaco = [
    { id: "aries", nombre: "Aries", emoji: "♈", fechas: "Mar 21 - Abr 19", mensajes: ["El Arcángel Miguel impulsa tu valentía. Es momento de dar ese primer paso sin miedo.", "Tu fuego interno es sagrado; no dejes que apaguen tu entusiasmo."] },
    { id: "tauro", nombre: "Tauro", emoji: "♉", fechas: "Abr 20 - May 20", mensajes: ["Tu paciencia da frutos maduros. Confía en los tiempos perfectos.", "Abre los brazos a la abundancia material y espiritual que te mereces."] },
    { id: "geminis", nombre: "Géminis", emoji: "♊", fechas: "May 21 - Jun 20", mensajes: ["El Arcángel Uriel ilumina tu mente. Una conversación traerá claridad.", "Tu curiosidad abre puertas mágicas; sintoniza con la gratitud."] },
    { id: "cancer", nombre: "Cáncer", emoji: "♋", fechas: "Jun 21 - Jul 22", mensajes: ["Tu sensibilidad es tu superpoder espiritual. Protege tu energía.", "Los ángeles sanan tu hogar y tus emociones. Suelta la nostalgia."] },
    { id: "leo", nombre: "Leo", emoji: "♌", fechas: "Jul 23 - Ago 22", mensajes: ["Permite que la luz de tu corazón brille con fuerza.", "El Arcángel Jofiel renueva tu alegría y tu creatividad."] },
    { id: "virgo", nombre: "Virgo", emoji: "♍", fechas: "Ago 23 - Sep 22", mensajes: ["El Arcángel Rafael abraza tu bienestar. Libérate de la exigencia.", "Todo está ordenado divinamente. Tómate un descanso."] },
    { id: "libra", nombre: "Libra", emoji: "♎", fechas: "Sep 23 - Oct 22", mensajes: ["El equilibrio regresa a tus relaciones. Elige siempre la paz.", "La belleza mística envuelve tu camino hoy."] },
    { id: "escorpio", nombre: "Escorpio", emoji: "♏", fechas: "Oct 23 - Nov 21", mensajes: ["Estás renaciendo con mayor poder y sabiduría.", "Tu profundidad e intuición son herramientas muy potentes."] },
    { id: "sagitario", nombre: "Sagitario", emoji: "♐", fechas: "Nov 22 - Dic 21", mensajes: ["Nuevos horizontes se abren. Confía en el mapa de tu alma.", "Mantén la fe intacta; el Universo respalda tus sueños."] },
    { id: "capricornio", nombre: "Capricornio", emoji: "♑", fechas: "Dic 22 - Ene 19", mensajes: ["Tus esfuerzos constantes rinden frutos. Reconoce tus triunfos.", "Los ángeles sostienen tus cargas cuando te permites descansar."] },
    { id: "acuario", nombre: "Acuario", emoji: "♒", fechas: "Ene 20 - Feb 18", mensajes: ["Tu visión original inspirará a quienes te rodean.", "El Arcángel Raziel activa tu intuición mística hoy."] },
    { id: "piscis", nombre: "Piscis", emoji: "♓", fechas: "Feb 19 - Mar 20", mensajes: ["Tu conexión divina te llena de paz. Sumérgete en el arte.", "Fluye con los acontecimientos; el río divino te guía."] }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('zodiac-grid');
    const oraculoTexto = document.getElementById('oraculo-texto');
    const oraculoAutor = document.getElementById('oraculo-autor');

    if (grid) {
        signosZodiaco.forEach(signo => {
            const card = document.createElement('div');
            card.className = 'zodiac-card';
            card.innerHTML = `
                <div class="zodiac-icon">${signo.emoji}</div>
                <div class="zodiac-name">${signo.nombre}</div>
                <div class="zodiac-dates">${signo.fechas}</div>
            `;

            card.addEventListener('click', () => {
                document.querySelectorAll('.zodiac-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');

                const frases = signo.mensajes;
                const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

                oraculoTexto.style.opacity = '0';
                setTimeout(() => {
                    oraculoTexto.textContent = `"${fraseAleatoria}"`;
                    oraculoAutor.textContent = `✨ Guía Angelical para ${signo.nombre} ${signo.emoji}`;
                    oraculoTexto.style.opacity = '1';
                }, 200);
            });

            grid.appendChild(card);
        });
    }
});
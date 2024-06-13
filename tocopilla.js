// Agregar evento clic a cada "leer más"
document.querySelectorAll('.read-morebox').forEach(readMore => {
    readMore.addEventListener('click', () => {
      // Encontrar el contenedor de la caja
      const box = readMore.parentNode;
      // Toggle de la clase "expanded" para expandir o contraer el contenido
      box.querySelector('.contentbox').classList.toggle('expandedbox');
      // Cambiar el texto del "leer más" según el estado
      if (box.querySelector('.contentbox').classList.contains('expandedbox')) {
        readMore.textContent = 'Ver menos';
      } else {
        readMore.textContent = 'Leer más';
      }
    });
  });
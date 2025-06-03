// Lista de páginas con 3 secciones de texto y una imagen flotante
const pages = [
  {
    bgColor: '#6C5B7B',
    imageSide: 'left',
    image: 'img/iglesia1.jpeg',
    imageWidth: '45%',
    textTop: 'el 8 de julio de 1888, la fecha de fundación de la Congregación Evangélica de Humboldt, y el día 16 de julio comienza funcionar la escuela Estos acontecimientos hablan de la decisión de las familias protestantes para mejorar la instrucción de sus hijos, con una clara visión de que la religión y la educación son las mejores herramientas para entenderse y trabajar en ésta, para ellos, nueva patria por adopción. El presidente de la primera Comisión Directiva fue Santiago Deppeler. El pastor Forster venía a celebrar los cultos, pero en casa de familias, porque no existía un lugar físico determinado para ello.',
    textMiddle: 'Se levanta la construcción en tiempo récord, ya que en el acta del 14-3 de 1889 se hace mención del organista proposición hecha a éste por el término de 3 meses tocar el órgano en el Templo.',
    
    textBottom: ' ',
  },
  {
    bgColor: '#355C7D',
    imageSide: 'right',
    image: 'img/organo.jpeg',
    imageWidth: '45%',
    textTop: 'Este Templo humilde, levantado con dedicación, entusiasmo y alegría, fue el guardián de la Palabra del Señor y el lugar al que concurrían las familias para dar tes-fimonio de su fe y renovar sus esperanzas, ya que el trabajo era duro en estas tierras en que decidieron afincarse y forjar su por-venir. Los encuentros con la Santa Cena y los sermones de los Pastores, marcaban la senda que no se debía abandonar.',
    textMiddle: '  El viejo templo fue testigo de cultos, bautismos, bendiciones nupciales, reuniones de comisiones y asambleas, confirma-ciones, ensayos de coro, fiesta de Navidad, y toda otra actividad que estuviera ligada al diario quehacer de la Comunidad. ',
    textBottom: ' En mayo de 1937, se nombra una comisión constructora para tal fin, se piden pa-receres, se discuten ofertas y se acepta que un arquitecto alemán se haga cargo de la nueva obra. Se trata del joven Peter Bartning de 24 años, que originario de Berlín viaja a bordo de un barco que parte de Hamburgo, Alemania el 19 de noviembre de 1937',
  },
  {
    bgColor: '#355C7D',
    imageSide: 'right',
    image: 'WhatsApp Image 2025-05-13 at 4.03.22 PM.jpeg',
    imageWidth: '50%',
    textTop: 'Otra página comienza con un párrafo introductorio.',
    textMiddle: 'Texto central que acompaña visualmente a la imagen a su lado.',
    textBottom: 'Y una conclusión o nota final debajo de todo.'
  },
  {
    bgColor: '#355C7D',
    imageSide: 'right',
    image: 'WhatsApp Image 2025-05-13 at 4.03.22 PM.jpeg',
    imageWidth: '50%',
    textTop: 'Otra página comienza con un párrafo introductorio.',
    textMiddle: 'Texto central que acompaña visualmente a la imagen a su lado.',
    textBottom: 'Y una conclusión o nota final debajo de todo.'
  },
  {
    bgColor: '#355C7D',
    imageSide: 'right',
    image: 'WhatsApp Image 2025-05-13 at 4.03.22 PM.jpeg',
    imageWidth: '50%',
    textTop: 'Otra página comienza con un párrafo introductorio.',
    textMiddle: 'Texto central que acompaña visualmente a la imagen a su lado.',
    textBottom: 'Y una conclusión o nota final debajo de todo.'
  },

];

let currentPage = 0;
const book = document.getElementById('book');

// Función que construye una página
function renderPage(index) {
  book.innerHTML = ''; // Limpiar contenido anterior

  const pageData = pages[index];

  const page = document.createElement('div');
  page.classList.add('page');
  page.style.backgroundColor = pageData.bgColor;

  // Construir contenido con las tres secciones de texto y la imagen en medio
  const textDiv = document.createElement('div');
  textDiv.className = 'content';
  textDiv.innerHTML = `
    <p>${pageData.textTop}</p> <!-- Parte superior -->
    <img 
      src="${pageData.image}" 
      alt="Imagen" 
      class="float-${pageData.imageSide}" 
      style="width: ${pageData.imageWidth};"> <!-- Imagen flotante -->
    <p>${pageData.textMiddle}</p> <!-- Texto alrededor de la imagen -->
    <div style="clear: both;"></div> <!-- Limpia el float antes del texto final -->
    <p>${pageData.textBottom}</p> <!-- Parte inferior -->
  `;

  page.appendChild(textDiv);
  book.appendChild(page);
}

// Navegar entre páginas
function goToPage(delta) {
  const nextPage = currentPage + delta;
  if (nextPage >= 0 && nextPage < pages.length) {
    currentPage = nextPage;
    renderPage(currentPage);
  }
}

// Clic izquierdo o derecho para avanzar o retroceder
book.addEventListener('click', (e) => {
  const x = e.clientX || e.touches?.[0]?.clientX;
  if (x < window.innerWidth / 2) {
    goToPage(-1);
  } else {
    goToPage(1);
  }
});

// Mostrar la primera página al inicio
renderPage(currentPage);

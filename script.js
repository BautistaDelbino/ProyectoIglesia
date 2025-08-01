// Lista de paginas (tapa, contenido, contratapa)
const pages = [
  // TAPA
  {
    fullImage: true,
    backgroundClass: 'bg-tapa'
  },

  // Pagina 1
  {
    bgColor: '#6C5B7B',
    imageSide: 'left',
    image: 'img/iglesia1.jpeg',
    imageWidth: '45%',
    textTop: 'Fundación: El 8 de julio de 1888, la fecha de fundación de la Congregación Evangélica de Humboldt, y el día 16 de julio comienza funcionar la escuela Estos acontecimientos hablan de la decisión de las familias protestantes para mejorar la instrucción de sus hijos,',
    textMiddle: 'con una clara visión de que la religión y la educación son las mejores herramientas para entenderse y trabajar en ésta, para ellos, nueva patria por adopción.',
    textBottom: 'El presidente de la primera Comisión Directiva fue Santiago Deppeler. El pastor Forster venía a celebrar los cultos, pero en casa de familias, porque no existía un lugar físico determinado para ello.',
  },

  //Pagina 2
  {
    bgColor: '#355C7D',
    imageSide: 'left',
    image: '',
    imageWidth: '50%',
    textTop: 'Se levanta la construcción en tiempo récord, ya que en el acta del 14-3 de 1889 se hace mención del organista proposición hecha a éste por el término de 3 meses tocar el órgano en el Templo. Este Templo humilde, levantado con dedicación, entusiasmo y alegría, fue el guardián de la Palabra del Señor y el lugar al que concurrían las familias para dar tes-fimonio de su fe y renovar sus esperanzas, ya que el trabajo era duro en estas tierras',
    textMiddle: 'en que decidieron afincarse y forjar su por-venir. Los encuentros con la Santa Cena y los sermones de los Pastores, marcaban la senda que no se debía abandonar. El viejo templo fue testigo de cultos, bautismos, bendiciones nupciales, reuniones de comisiones y asambleas, confirma-ciones, ensayos de coro, fiesta de Navidad, y toda otra actividad que estuviera ligada al diario quehacer de la Comunidad.',
    textBottom: ''
  },
  // Pagina 3
{
    bgColor: '#355C7D',
    imageSide: 'right',
    image: 'imagen2.jpeg',
    imageWidth: '50%',
    textTop: 'Otra página comienza...',
    textMiddle: 'Texto central que acompaña...',
    textBottom: 'Y una conclusión o nota final...'
  },
  // Pagina 4
{
    bgColor: '#355C7D',
    imageSide: 'right',
    image: 'imagen2.jpeg',
    imageWidth: '50%',
    textTop: 'Otra página comienza...',
    textMiddle: 'Texto central que acompaña...',
    textBottom: 'Y una conclusión o nota final...'
  },
  // Pagina 5
{
    bgColor: '#355C7D',
    imageSide: 'right',
    image: 'imagen2.jpeg',
    imageWidth: '50%',
    textTop: 'Otra página comienza...',
    textMiddle: 'Texto central que acompaña...',
    textBottom: 'Y una conclusión o nota final...'
  },
  // Pagina 6
{
    bgColor: '#355C7D',
    imageSide: 'right',
    image: 'imagen2.jpeg',
    imageWidth: '50%',
    textTop: 'Otra página comienza...',
    textMiddle: 'Texto central que acompaña...',
    textBottom: 'Y una conclusión o nota final...'
  },
  // CONTRATAPA
  {
    fullImage: true,
    backgroundClass: 'bg-contratapa'
  }
];

let currentPage = 0;
const book = document.getElementById('book');

// Renderizar pagina actual
function renderPage(index) {
  book.innerHTML = ''; // Limpiar

  const pageData = pages[index];
  const page = document.createElement('div');
  page.classList.add('page');

  // Página de imagen completa
  if (pageData.fullImage && pageData.backgroundClass) {
    page.classList.add(pageData.backgroundClass);

    // Div vacio para ocupar espacio
    const filler = document.createElement('div');
    filler.style.height = '100%';
    filler.style.width = '100%';
    page.appendChild(filler);

  } else {
    // Pagina comun con texto
    page.style.backgroundColor = pageData.bgColor || '#fff';

    const textDiv = document.createElement('div');
    textDiv.className = 'content';
    textDiv.innerHTML = `
      <p>${pageData.textTop}</p>
      <img 
        src="${pageData.image}" 
        alt="Imagen" 
        class="float-${pageData.imageSide}" 
        style="width: ${pageData.imageWidth};">
      <p>${pageData.textMiddle}</p>
      <div style="clear: both;"></div>
      <p>${pageData.textBottom}</p>
    `;

    page.appendChild(textDiv);
  }

  book.appendChild(page);
}

// Navegacion por click/touch
book.addEventListener('click', (e) => {
  const x = e.clientX || e.touches?.[0]?.clientX;
  if (x < window.innerWidth / 2) {
    goToPage(-1);
  } else {
    goToPage(1);
  }
});

// Cambio de pagina
function goToPage(delta) {
  const nextPage = currentPage + delta;
  if (nextPage >= 0 && nextPage < pages.length) {
    currentPage = nextPage;
    renderPage(currentPage);
  }
}

// Cargar primera pagina
renderPage(currentPage);
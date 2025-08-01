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
  image1Side: 'left',
  image1: 'img/iglesia1.jpeg',
  image1Width: '60%',
  image2Side: 'right',
  image2: '',
  image2Width: '40%',
  title: 'Fundación',
    textTop: 'La fecha de fundación de la Congregación Evangélica de Humboldt fue el 8 de julio de 1888, y el día 16 de julio comienza funcionarla escuela. Estos acontecimientos hablan de la decisión de las familias protestantes para mejorar la instrucción de sus hijos, con una clara visión de que la religión y la educación son las mejores herramientas para entenderse y trabajar en esta.',
    textMiddle: '',
    subtitle: 'Culto',
    textBottom: 'El presidente de la primera Comisión Directiva fue Santiago Deppeler. El pastor Forster venía a celebrar los cultos, pero en casa de familias, porque no existía un lugar físico determinado para ello.',
  },

  //Pagina 2
  {
    bgColor: '#355C7D',
  image1Side: 'left',
  image1: 'img/organo.jpeg',
  image1Width: '80%',
  image2Side: 'right',
  image2: '',
  image2Width: '40%',
    textTop: 'Se levanta la construcción en tiempo récord, ya que en el acta del 14-3 de 1889 se hace mención del organista proposición hecha a éste por el término de 3 meses tocar el órgano en el Templo. Este Templo humilde, levantado con dedicación, entusiasmo y alegría, fue el guardián de la Palabra del Señor y el lugar al que concurrían las familias para dar tes-fimonio de su fe y renovar sus esperanzas, ya que el trabajo era duro en estas tierras',
    textMiddle: 'en que decidieron afincarse y forjar su por-venir. Los encuentros con la Santa Cena y los sermones de los Pastores, marcaban la senda que no se debía abandonar. El viejo templo fue testigo de cultos, bautismos, bendiciones nupciales, reuniones de comisiones y asambleas, confirma-ciones, ensayos de coro, fiesta de Navidad, y toda otra actividad que estuviera ligada al diario quehacer de la Comunidad.',
    textBottom: ''
  },
  // Pagina 3
{
    bgColor: '#355C7D',
    image1Side: 'left',
    image1: 'img/Peter Bartning.jpg',
    image1Width: '40%',
    image2Side: 'right',
    image2: '',
    image2Width: '40%',
    textTop: 'En mayo de 1937, se nombra una comisión constructora para tal fin, se piden pa-receres, se discuten ofertas y se acepta que un arquitecto alemán se haga cargo de la nueva obra. Se trata del joven Peter Bartning de 24 años, que originario de Berlín viaja a bordo de un barco que parte de Hamburgo, Alemania el 19 de noviembre de 1937',
    textMiddle: 'El Arquitecto Peter, era alojado en la zona rural, a esta obra tan esperada se decide colocar la piedra fundamental, y este acto trascendental ocurrió el 15 de abril, viernes santo de ese 1938, con mucho frío y lluvia. Con fecha 4 de agosto de 1938, el joven Arquitecto Peter Bartning entrega una carta recibo, donde da por concluida la obra.',
    textBottom: 'Se decide en reunión de Comisión Di-rectiva, que la inauguración del nuevo templo se realice en el mes de octubre y se festejen también los 50 años de la Congre-gacion.'
  },
  // Pagina 4
{
    bgColor: '#355C7D',
    image1Side: 'left',
    image1: 'img/campanario.jpeg',
    image1Width: '40%',
    image2Side: 'right',
    image2: '',
    image2Width: '40%',
    textTop: 'culto de inauguración del día 23 de octubre de 1938, La nueva construcción tiene campana-110 pero no tiene campanas. Es entonces que comienza un largo trámite que duraria nada menos que 10 años. ',
    textMiddle: 'Se reciben además aportes de la Comunidad Evangélica de Esperanza y la Comisión de Fo-mento. Con la venta de los materiales de la demolición del Antiguo Templo, se cubre la deuda total, demostrando así que "nada se pierde todo se transforma" La energía de paredes y techos, las ri-sas, cantos y llantos de que estaban im-pregnados, no se fueron con los carros que llevaban los productos de la demolición.',
    textBottom: 'Quedaron acá para siempre en estos testigos musicales que dan sus notas al aire, diciendo "somos aquellos que fuimos y seremos en la historia y el recuerdo". El 12 de noviembre de 1950 fueron consagradas las campanas en un culto especial. en mayo de 1959, se radica el Pastor Otto Vohringer con su tamilia'
  },
  // Pagina 5
{
    bgColor: '#355C7D',
    image1Side: 'left',
    image1: 'img/damas.jpeg',
    image1Width: '100%',
    image2Side: 'right',
    image2: '',
    image2Width: '40%',
    textTop: '22 de marzo de 1928, se formó la primera comisión directiva de la Sociedad de Damas Evangélicas, el rol de estas mujeres era muy impor-tante, se preocupaban por las distintas áreas de los ministerios de la iglesia, como por ejemplo la catequesis, incluyendo clases de confirmación, escuela dominical, obligaciones de los cantantes del Coro de la Iglesia, la escuela de alemán.',
    textMiddle: 'Ellas eran quienes recaudaban fondos para cubrir estos gastos, además fondos para el sostenimiento de la iglesia y mantenimiento de las instalaciones. Damas, junto con la familia del pastor Johan Vöhringer, celebraron Navidad y en ese culto fue la primera Fiesta del Arboli-to, que hasta la actualidad se sigue con la tradición de adornar un árbol natural para dicha celebración.',
    textBottom: 'Uno de sus grandes anhelos fue construir un espacio para reuniones y demás actividades relacionadas con la iglesia. El 8 de julio de 1988, recordando el primer Centenario de la Comunidad Evan-gélica, se inauguró el salón parroquial,'
  },
  // Pagina 6
{
    bgColor: '#355C7D',
    image1Side: 'left',
    image1: 'img/escuela.jpeg',
    image1Width: '50%',
    image2Side: 'right',
    image2: 'img/escuela2.jpeg',
    image2Width: '80%',
    textTop: 'Escuelita Biblica: La educación cristiana es uno de los pilares importantes para el crecimiento de la fe. Y es el espacio dedicado a nuestros pequeños y adolescentes. Con ellos compartimos encuentros semanales, donde después de cantos, oraciones, ofrendas, se los divide por edades para compartir y',
    textMiddle: 'aprender de las historias bíblicas como así también distintos temas que tienen que ver con la vida cotidiana. Ellos participan de encuentros, campamentos y cultos espe-ciales. Estamos llamados a compartir la fe de generación en generación y así cumplir con el mandato de nuestro señor Jesús.',
    textBottom: ''
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

    const filler = document.createElement('div');
    filler.style.height = '100%';
    filler.style.width = '100%';
    page.appendChild(filler);

  } else {
    page.style.backgroundColor = pageData.bgColor || '#fff';

    const textDiv = document.createElement('div');
    textDiv.className = 'content';

    // Crear imágenes HTML (máximo 2)
    let imagesHTML = '';
    if (pageData.image1) {
      imagesHTML += `
        <img 
          src="${pageData.image1}" 
          alt="Imagen 1" 
          class="float-${pageData.image1Side || 'left'}" 
          style="width: ${pageData.image1Width || '45%'};">
      `;
    }
    if (pageData.image2) {
      imagesHTML += `
        <img 
          src="${pageData.image2}" 
          alt="Imagen 2" 
          class="float-${pageData.image2Side || 'right'}" 
          style="width: ${pageData.image2Width || '45%'};">
      `;
    }
    //sector de orden de paginas
   textDiv.innerHTML = `
  ${pageData.title ? `<h1 class="page-title">${pageData.title}</h1>` : ''}
  <p>${pageData.textTop}</p>
  ${pageData.subtitle ? `<h3 class="page-subtitle">${pageData.subtitle}</h3>` : ''}
  ${imagesHTML}
  <p>${pageData.textMiddle}</p>
  <p>${pageData.textBottom}</p>
  <div style="clear: both;"></div>
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
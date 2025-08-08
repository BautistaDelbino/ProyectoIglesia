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
  title: 'El Templo',
    textTop: 'Se levanta la construcción en tiempo récord, ya que en el acta del 14-3 de 1889 se hace mención del organista proposición hecha a éste por el término de 3 meses tocar el órgano en el Templo. Este Templo humilde, levantado con dedicación, entusiasmo y alegría, fue el guardián de la Palabra del Señor y el lugar al que concurrían las familias para dar testimonio de su fe y renovar sus esperanzas',
    textMiddle: 'Los encuentros con la Santa Cena y los sermones de los Pastores, marcaban la senda que no se debía abandonar. El viejo templo fue testigo de cultos, bautismos, reuniones de comisiones y asambleas, confirmaciones, ensayos de coro, navidades, y toda otra actividad.',
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
    title: 'Peter Bartning',
    textTop: 'En mayo de 1937, se nombra una comisión constructora y se acepta que un arquitecto alemán se haga cargo de la nueva obra. Se trata del joven Peter Bartning de 24 años, que originario de Berlín viaja a bordo de un barco, el 19 de noviembre de 1937',
    textMiddle: 'A esta obra tan esperada se decide colocar la piedra fundamental, y este acto trascendental ocurrió el 15 de abril, viernes santo de ese 1938, con mucho frío y lluvia. Con fecha 4 de agosto de 1938, el joven Arquitecto Peter Bartning entrega una carta recibo, donde da por concluida la obra.',
    textBottom: 'Se decide en reunión, que la inauguración se realice en el mes de octubre y se festejen también los 50 años de la Congregacion.'
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
    title: 'Campanario',
    textTop: 'culto de inauguración del día 23 de octubre de 1938, La nueva construcción tiene campana-110 pero no tiene campanas. Es entonces que comienza un largo trámite que duraria nada menos que 10 años. ',
    textMiddle: 'Se reciben además aportes de la Comunidad Evangélica de Esperanza y la Comisión de Fomento. Con la venta de los materiales de la demolición del Antiguo Templo, se cubre la deuda total, demostrando así que "nada se pierde todo se transforma" La energía de paredes y techos, las risas, cantos y llantos de que estaban impregnados, no se fueron con los carros que llevaban los productos de la demolición.',
    textBottom: 'Quedaron acá para siempre en estos testigos musicales que dan sus notas al aire, diciendo "somos aquellos que fuimos y seremos en la historia y el recuerdo". El 12 de noviembre de 1950 fueron consagradas las campanas. En mayo de 1959, se radica el Pastor Otto Vohringer con su tamilia'
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
    title: 'Damas Evangélicas',
    textTop: '22 de marzo de 1928, se formó la primera comisión directiva de la Sociedad de Damas Evangélicas, su rol era fundamental, se preocupaban por las distintas áreas de los ministerios de la iglesia, como por ejemplo la catequesis, clases de confirmación, escuela dominical, Coro de la Iglesia, escuela de alemán.',
    textMiddle: 'Ellas eran quienes recaudaban fondos para cubrir gastos, además para el sostenimiento de la iglesia y mantenimiento de las instalaciones. Damas, junto con la familia del pastor Johan Vöhringer, celebraron Navidad y en ese culto fue la primera Fiesta del Arbolito, que hasta la actualidad se sigue con la tradición de adornar un árbol natural.',
    textBottom: 'Uno de sus grandes anhelos fue construir un espacio para reuniones y demás actividades relacionadas con la iglesia. El 8 de julio de 1988, recordando el primer Centenario de la Comunidad Evangélica, se inauguró el salón parroquial,'
  },
  // Pagina 6
{
    bgColor: '#355C7D',
    image1Side: 'left',
    image1: 'img/escuela.jpeg',
    image1Width: '50%',
    image2Side: 'right',
    image2: 'img/escuela2.jpeg',
    image2Width: '60%',
    title: 'Escuelita Bíblica',
    textTop: 'La educación cristiana es uno de los pilares importantes para el crecimiento de la fe. Un espacio dedicado a nuestros pequeños y adolescentes. Con ellos compartimos encuentros semanales, donde después de cantos, oraciones, ofrendas, se los divide por edades para compartir ',
    textMiddle: ' y aprender de las historias bíblicas como así también distintos temas que tienen que ver con la vida cotidiana. Ellos participan de encuentros, campamentos y cultos especiales. Estamos llamados a compartir la fe de generación en generación y así cumplir con el mandato de nuestro señor Jesús.',
    textBottom: ''
  },
  // Pagina 7
{
    bgColor: '#355C7D',
    image1Side: 'left',
    image1: 'img/diaconia.jpeg',
    image1Width: '100%',
    image2Side: 'right',
    image2: '',
    image2Width: '',
    title: 'Grupo de Diaconía',
    textTop: 'Como iglesia tenemos la misión de servir y acompañar a la gente. Es por eso que ante la necesidad económica de algunas familias nació la iniciativa de hacer algo concreto. La asistente social nos animó a iniciar un trabajo comunitario al cual se le llamó grupo de diaconía.',
    textMiddle: ' Con el transcurso de los años se lo conoce como "el rope-rito". En este espacio se realiza la entrega de ropa, calzado, útiles escolares, leche en polvo y otros elementos de uso cotidia no. Podemos hacer esta tarea gracias a los aportes y donaciones de la comunidad.',
    textBottom: 'Damos gracias a Dios por el amor hacia el prójimo el cual es el mensaje de nuestro Señor Jesucristo.'
  },
  // CONTRATAPA

  {
    fullImage: true,
    backgroundClass: 'bg-contratapa',
    footerImage: 'img/mapa.png'
    
  }
  
];

let currentPage = 0;
const book = document.getElementById('book');

// Precargar imágenes
const preloadImages = () => {
  pages.forEach(page => {
    if (page.image1) {
      const img1 = new Image();
      img1.src = page.image1;
    }
    if (page.image2) {
      const img2 = new Image();
      img2.src = page.image2;
    }
  });
};
preloadImages();

// Renderizar pagina actual
function renderPage(index) {
  book.innerHTML = ''; // Limpiar

  const pageData = pages[index];
  const page = document.createElement('div');
page.classList.add('page', 'page-transition');

  // Página de imagen completa
  if (pageData.fullImage && pageData.backgroundClass) {
    page.classList.add(pageData.backgroundClass);
  
    const wrapper = document.createElement('div');
    wrapper.style.height = '100%';
    wrapper.style.width = '100%';
    wrapper.style.position = 'relative';
  
    // COLOCAR IMAGENE EN LA CONTRATAPA
    if (pageData.footerImage) {
      const link = document.createElement('a');
      link.href = 'https://maps.app.goo.gl/1B7wxEM5rENRSRh29';
      link.target = '_blank';
      link.style.position = 'absolute';
      link.style.bottom = '100px';
      link.style.left = '50%';
      link.style.transform = 'translateX(-50%)';
      link.style.maxWidth = '43%';
      link.style.height = 'auto';
      link.style.display = 'block'; // Asegura que se vea como bloque
      link.style.zIndex = '1000';   // Asegura que esté por encima de otros elementos
    
      const footerImg = document.createElement('img');
      footerImg.src = pageData.footerImage;
      footerImg.alt = "Imagen contratapa";
      footerImg.style.width = '100%';
      footerImg.style.height = 'auto';
      footerImg.style.pointerEvents = 'auto'; // Permite clics
    
      // Evita que el clic en el link propague hacia el fondo
      link.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    
      link.appendChild(footerImg);
      wrapper.appendChild(link);
    }    
  
    page.appendChild(wrapper);
  }else {
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

// Mostrar modal al cargar
window.addEventListener('load', () => {
  const modal = document.getElementById('tutorialModal');
  const closeBtn = document.getElementById('closeModal');

  modal.style.display = 'flex';

  closeBtn.onclick = () => {
    modal.style.display = 'none';
  };

  // Cerrar si se hace clic fuera del contenido
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
});


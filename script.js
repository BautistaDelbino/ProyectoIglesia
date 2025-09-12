// Lista de paginas (tapa, contenido, contratapa)
const pages = [
  // TAPA
  {
    fullImage: true,
    backgroundClass: 'bg-tapa'
  },

  // Pagina 1
  {
  image1Side: 'left',
  image1: 'img/iglesia1.jpeg',
  image1Width: '60%',
  image2Side: 'right',
  image2: 'img/iglesia2.jpeg',
  image2Width: '60%',
  title: 'Fundación',
    textTop: '',
    textMiddle: 'La fecha de fundación de la Congregación Evangélica de Humboldt fue el 8 de julio de 1888. El presidente de la primera Comisión Directiva fue Santiago Deppeler. ',
    textBottom: 'El pastor Forster venía de la comunidad de Esperanza a celebrar los cultos, pero en casa de familias, porque no existía un lugar físico determinado para ello.',
    subtitle: 'Culto',
   footerText: '',
  },

  //Pagina 2
  {
  image1Side: 'center',
  image1: 'img/templo.jpeg',
  image1Width: '100%',
  image2Side: '',
  image2: '',
  title: 'El Templo',
    textTop: 'Se levanta la construcción en tiempo récord. Este Templo humilde, levantado con dedicación, entusiasmo y alegría, fue el guardián de la Palabra del Señor y el lugar al que concurrían las familias para dar testimonio de su fe y renovar sus esperanzas',
    textMiddle: '',
    textBottom: 'Los encuentros con la Santa Cena y los sermones de los Pastores, marcaban la senda que no se debía abandonar. El viejo templo fue testigo de cultos, bautismos, reuniones de comisiones y asambleas, confirmaciones, ensayos de coro, navidades, y toda otra actividad.',
    footerText: '',
  },
  // Pagina 3
  {
    image1Side: 'left',
    image1: 'img/Peter Bartning.jpg',
    image1Width: '50%',
    image2Side: 'right',
    image2: '',
    image2Width: '40%',
    title: 'Peter Bartning',
    textTop: 'En mayo de 1937, se nombra una comisión constructora del nuevo templo y se acepta que un arquitecto alemán se haga cargo de la nueva obra. Se trata del joven Peter Bartning de 24 años, que originario de Berlín viaja a bordo de un barco, el 19 de noviembre de 1937',
    textMiddle: 'El 15 de abril, viernes santo de ese 1938, con mucho frío y lluvia es colocada la piedra fundamental. El 4 de agosto de 1938, el joven Arquitecto Peter Bartning entrega una carta recibo, donde da por concluida la obra.',
    textBottom: 'Se decide en reunión, que la inauguración se realice en el mes de octubre festejándose también los 50 años de la Congregación.',
    footerText: '',
  },
  // Pagina 4
{
    image1Side: 'left',
    image1: 'img/campanario.jpeg',
    image1Width: '70%',
    image2Side: 'right',
    image2: '',
    image2Width: '60%',
    title: 'Campanario',
    textTop: 'El Culto de inauguración fue el día 23 de octubre de 1938. La nueva iglesia tiene campanario pero no tiene campanas. Es entonces que comienza un largo trámite que duraria nada menos que 10 años para adquirir las mismas. ',
    textMiddle: 'Se reciben aportes de la Comunidad Evangélica de Esperanza y la Comisión de Fomento Local, para la compra de las 3 campanas, Esperanza, Fé y Caridad. Con la venta de los materiales de la demolición del Antiguo Templo, se cubre la deuda total, demostrando así que "nada se pierde todo se transforma".',
    textBottom: '',
  },
  // Pagina 5
{
    image1Side: 'center',
    image1: 'img/campanario22.jpg',
    image1Width: '100%',
    image2Side: '',
    image2: '',
    image2Width: '',
    title: 'Campanario',
    textTop: 'La energía de paredes y techos, las risas, cantos y llantos que estaban impregnados, no se fueron con los carros que llevaban los productos de la demolición sino que quedaron acá para siempre en estos testigos musicales que dan sus notas al aire, diciendo "somos aquellos que fuimos y seremos en la historia y el recuerdo".',
    textMiddle: '',
    textBottom: 'El 12 de noviembre de 1950 fueron consagradas las campanas. En mayo de 1959, se radica el primer pastor, señor Otto Vohringer con su familia.',
  },
  // Pagina 6
{
    image1Side: 'center',
    image1: 'img/damas.jpeg',
    image1Width: '100%',
    image2Side: 'right',
    image2: '',
    image2Width: '40%',
    title: 'Damas Evangélicas',
    textTop: 'El 22 de marzo de 1928, se formó la primera comisión directiva de la Sociedad de Damas Evangélicas, su rol era fundamental, se preocupaban por las distintas áreas de los ministerios de la iglesia, como por ejemplo la catequesis, clases de confirmación, escuela dominical, Coro de la Iglesia, escuela de alemán.',
    textMiddle: 'Ellas eran quienes recaudaban fondos para cubrir gastos, además para el sostenimiento de la iglesia y mantenimiento de las instalaciones.',
    textBottom: '',
    footerText: '',
  },
  // Pagina 7
{
    image1Side: 'center',
    image1: 'img/damas2.jpeg',
    image1Width: '100%',
    image2Side: 'right',
    image2: '',
    image2Width: '40%',
    title: 'Damas Evangélicas',
    textTop: ' La sociedad de Damas, junto con la familia del pastor Johan Vöhringer, celebraron Navidad y en ese culto fue la primera Fiesta del Arbolito, que hasta la actualidad se sigue con la tradición de adornar un árbol natural.',
    textMiddle: 'Uno de sus grandes anhelos fue construir un espacio para reuniones y demás actividades relacionadas con la iglesia. El 8 de julio de 1988, recordando el primer Centenario de la Comunidad Evangélica, se inauguró el salón parroquial',
    textBottom: '',
    footerText: '',
  },
  // Pagina 8
{
    image1Side: 'left',
    image1: 'img/escuela.jpeg',
    image1Width: '50%',
    image2Side: 'right',
    image2: 'img/escuela2.jpeg',
    image2Width: '45%',
    title: 'Escuelita Bíblica',
    textTop: 'La educación cristiana es uno de los pilares importantes para el crecimiento de la fe. Un espacio dedicado a nuestros pequeños y adolescentes. Con ellos compartimos encuentros semanales, donde después de cantos, oraciones, ofrendas, se los divide por edades para aprender de las historias bíblicas como así también distintos temas que tienen que ver con la vida cotidiana.',
    textMiddle: 'Ellos participan de encuentros, campamentos y cultos especiales. Estamos llamados a compartir la fe de generación en generación y así cumplir con el mandato de nuestro señor Jesús.',
    textBottom: '',
    footerText: '',
  },
  // Pagina 9
{
    image1Side: 'left',
    image1: 'img/diaconia.jpeg',
    image1Width: '100%',
    image2Side: 'right',
    image2: '',
    image2Width: '',
    title: 'Grupo de Diaconía',
    textTop: 'Como iglesia tenemos la misión de servir y acompañar a la gente. Es por eso que ante la necesidad económica de algunas familias nació la iniciativa de hacer algo concreto. La asistente social Cardozo Mirelly, en el año 2001, nos animó a iniciar un trabajo comunitario al cual se lo llamó grupo de diaconía, "EL ROPERITO".',
    textMiddle: 'En este espacio se realiza la entrega de ropa, calzado, útiles escolares, leche en polvo y otros elementos de uso cotidiano. Podemos hacer esta tarea gracias a los aportes y donaciones de la comunidad.',
    textBottom: 'Damos gracias a Dios por el amor hacia el prójimo el cual es el mensaje de nuestro Señor Jesucristo.',
    footerText: '',
  },
  // Pagina 10
{
    image1Side: '',
    image1: '',
    image1Width: '',
    image2Side: 'center',
    image2: 'img/nenes.png',
    image2Width: '100%',
    title: 'Casita Nazareth',
    textTop: 'En ella se realizan las actividades de Escuelita Bíblica los días sábados y luego se destina a un proyecto que comenzó a funcionar en Noviembre del 2024',
    textMiddle: '',
    textBottom: 'Ofreciendo talleres gratuitos para niños de edad escolar que tienen alguna dificultad de participar en actividades extra escolares, y facilitar así, la socialización y el desarrollo de su estima. Para ello se les brindan talleres como Juegoteca, Huerta y Jardín, Cocina, Música y Manualidades.',
  },
  // CONTRATAPA
  {
    fullImage: true,
    backgroundClass: 'bg-contratapa',
    footerImage: 'img/mapa.png',
    extraButtons: [
      {
        imgSrc: 'img/celular.png',
        url: 'https://wa.me/3496542002',
      },
      {
        imgSrc: 'img/mail.png',
        url: 'mailto:com.humboldt.ie@gmail.com',
      }
    ]
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
  book.innerHTML = ''; // Limpiar contenido

  const pageData = pages[index];
  const page = document.createElement('div');
  page.classList.add('page', 'page-transition');

  // Si es una página con imagen completa de fondo (como tapa o contratapa)
  if (pageData.fullImage && pageData.backgroundClass) {
    page.classList.add(pageData.backgroundClass);

    const wrapper = document.createElement('div');
    wrapper.style.height = '100%';
    wrapper.style.width = '100%';
    wrapper.style.position = 'relative';

    // --- CONTRATAPA: Mapa y botones ---
    if (pageData.footerImage) {
      const container = document.createElement('div');
      container.className = 'footer-content-container';

      // Mapa
      const mapContainer = document.createElement('div');
      mapContainer.className = 'map-image-container';

      const mapLink = document.createElement('a');
      mapLink.href = 'https://maps.app.goo.gl/1B7wxEM5rENRSRh29';
      mapLink.target = '_blank';

      const footerImg = document.createElement('img');
      footerImg.src = pageData.footerImage;
      footerImg.alt = "Ubicación en el mapa";

      mapLink.appendChild(footerImg);
      mapContainer.appendChild(mapLink);

      // Botones extra
      const buttonsContainer = document.createElement('div');
      buttonsContainer.className = 'extra-buttons-container';

      if (pageData.extraButtons && Array.isArray(pageData.extraButtons)) {
        pageData.extraButtons.forEach(btn => {
          const buttonLink = document.createElement('a');
          buttonLink.href = btn.url;
          buttonLink.target = '_blank';
          buttonLink.className = 'extra-button';

          const img = document.createElement('img');
          img.src = btn.imgSrc;
          img.alt = "Botón extra";

          buttonLink.appendChild(img);
          buttonsContainer.appendChild(buttonLink);
        });
      }

      container.appendChild(mapContainer);
      container.appendChild(buttonsContainer);
      wrapper.appendChild(container);
    }

    page.appendChild(wrapper);
  } else {
    // Páginas con contenido
    page.style.backgroundColor = pageData.bgColor || '#fff';

    const textDiv = document.createElement('div');
    textDiv.className = 'content';

    // Imágenes dentro de contenido
    let imagesHTML = '';
    if (pageData.image1) {
      imagesHTML += `
        <img 
          src="${pageData.image1}" 
          alt="Imagen 1" 
          class="float-${pageData.image1Side || 'left'}" 
          style="width: ${pageData.image1Width || '100%'};">
      `;
    }
    if (pageData.image2) {
      imagesHTML += `
        <img 
          src="${pageData.image2}" 
          alt="Imagen 2" 
          class="float-${pageData.image2Side || 'right'}" 
          style="width: ${pageData.image2Width || '100%'};">
      `;
    }

    // Contenido textual
    textDiv.innerHTML = `
      ${pageData.title ? `<h1 class="page-title">${pageData.title}</h1>` : ''}
      <p>${pageData.textTop || ''}</p>
      ${imagesHTML}
      <p>${pageData.textMiddle || ''}</p>
      ${pageData.subtitle ? `<h3 class="page-subtitle">${pageData.subtitle}</h3>` : ''}
      <p>${pageData.textBottom || ''}</p>
      ${pageData.footerText ? `<div class="page-footer-text">${pageData.footerText}</div>` : ''}
      <div style="clear: both;"></div>
    `;

    page.appendChild(textDiv);
  }

  book.appendChild(page);
}

// Navegación por click/touch
book.addEventListener('click', (e) => {
  const x = e.clientX || e.touches?.[0]?.clientX;
  if (x < window.innerWidth / 2) {
    goToPage(-1);
  } else {
    goToPage(1);
  }
});

// Cambio de página
function goToPage(delta) {
  const nextPage = currentPage + delta;
  if (nextPage >= 0 && nextPage < pages.length) {
    currentPage = nextPage;
    renderPage(currentPage);
  }
}

// Cargar primera página
renderPage(currentPage);

// Mostrar modal al cargar
window.addEventListener('load', () => {
  const modal = document.getElementById('tutorialModal');
  const closeBtn = document.getElementById('closeModal');

  modal.style.display = 'flex';

  closeBtn.onclick = () => {
    modal.style.display = 'none';
  };

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
});
// JavaScript para efectos de scroll en los enlaces
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const frases = [" JavaScript ", " React.js ", " Web "];
    let i = 0;
    let j = 0;
    let actual = "";
    let isDeleting = false;
    const textoElement = document.getElementById("escribir");

    function escribir() {
        const palabraCompleta = frases[i];

        if (isDeleting) {
            actual = palabraCompleta.substring(0, j--);
        } else {
            actual = palabraCompleta.substring(0, j++);
        }

        textoElement.textContent = actual;

        if (!isDeleting && j === palabraCompleta.length) {
            isDeleting = true;
            setTimeout(escribir, 1500); // Pausa al final de cada frase
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % frases.length;
            setTimeout(escribir, 800); // Pausa antes de comenzar a escribir la nueva frase
        } else {
            setTimeout(escribir, isDeleting ? 70 : 80); // Velocidad de escritura y borrado
        }
    }

    escribir();
});

document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // Cambiar el ícono del botón según el modo
    if(document.body.classList.contains('dark-mode')) {
        this.textContent = '☀️'; // Ícono de sol para modo claro
    } else {
        this.textContent = '🌙'; // Ícono de luna para modo oscuro
    }
});

document.getElementById('languageSelector').addEventListener('change', changeLanguage);

function changeLanguage() {
    const language = document.getElementById('languageSelector').value;
    
    fetch(`./idioma-${language}.json`)
    .then(response => response.json())
    .then(data => {
        
        
        // Cambiar texto en el header
        document.getElementById('inicio').textContent = data.header.inicio;
        document.getElementById('proyecto').textContent = data.header.proyectos;
        document.getElementById('sobre-mi').textContent = data.header.sobre_mi;
        document.getElementById('contacto').textContent = data.header.contacto;
        // document.getElementById('toggle-dark-mode').textContent = data.header.toggle_dark_mode;
        
        // // Cambiar texto en la sección hero
        // document.getElementById('hero-title').textContent = data.hero.titulo;
        // document.getElementById('escribir').textContent = data.hero.subtitulo;
        // document.getElementById('hero-description').textContent = data.hero.descripcion;
        // document.getElementById('boton-proyectos').textContent = data.hero.boton_proyectos;
        
        // // Cambiar texto en la sección de proyectos
        // document.getElementById('proyectos-title').textContent = data.proyectos.titulo;
        // document.getElementById('proyecto1-titulo').textContent = data.proyectos.proyecto1.titulo;
        // document.getElementById('proyecto1-descripcion').textContent = data.proyectos.proyecto1.descripcion;
        // document.getElementById('proyecto1-github').textContent = data.proyectos.proyecto1.github;
        // document.getElementById('proyecto1-link').textContent = data.proyectos.proyecto1.link_proyecto;

        // document.getElementById('proyecto2-titulo').textContent = data.proyectos.proyecto2.titulo;
        // document.getElementById('proyecto2-descripcion').textContent = data.proyectos.proyecto2.descripcion;
        // document.getElementById('proyecto2-github').textContent = data.proyectos.proyecto2.github;
        // document.getElementById('proyecto2-link').textContent = data.proyectos.proyecto2.link_proyecto;
        
        // // Cambiar texto en la sección sobre mí
        // document.getElementById('sobre-mi-title').textContent = data.sobre_mi.titulo;
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

// Inicializar con el idioma por defecto
changeLanguage();

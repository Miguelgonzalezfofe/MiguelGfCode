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
    const frases = [" JavaScript ", " React ", " Paginas Web "];
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


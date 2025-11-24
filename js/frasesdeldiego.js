const frasesMaradona = [
    "La pelota no se mancha",
    "Dios me iluminó en ese momento",
    "Si me das a elegir, yo elijo siempre a Maradona",
    "Ganarle a River es como que tu mamá te venga a despertar con un beso a la mañana",
    "Yo amo a Boca, pero ojo, que mi corazoncito ama al Tripero",
    "Enfrente hay una yunta que me tiró de los huevos para abajo y esa no se la perdono a nadie",
    "Yo sigo si el presidente sigue. Solamente las ratas huyen cuando el barco se hunde, yo rata no soy",
    "Lo único que le pido a Dios es que Macri llegue como presidente a cortar el pan dulce",
    "Pelé debutó con un pibe… Y le pegó a la jermu",
    "Si a Sampaoli le tirás la pelota, te la devuelve con la mano",
    "Bilardo es como Berisso: está detrás de La Plata",
    "Segurola y Habana 4310, séptimo piso. Y vamos a ver si me dura 30 segundos",
    "Para jugar contra Australia nos daban café veloz",
    "La Tota integró la barrera cuando me peloteaban de todos lados",
    "Pasman, vos también la tenés adentro",
    "La lista que me pidió Grondona, que yo se la di, era un tocuen. Tocuen es cuento",
    "Bush es un asesino, yo prefiero ser amigo de Fidel",
    "Ser Maradona es hermoso. Soy un tipo normal que por hacerle un gol a los ingleses, que nos mataron a los pibes en Malvinas, hoy la gente me conoce. Pero soy el tipo más normal",
    "Crecí en un barrio privado de Buenos Aires. Privado de luz, de agua, de teléfono",
    "Esto te da vida, el fútbol te da vida",
    "Voy a ser Cristinista, hasta los huevos",
    "Mi viejo fue peronista, mi vieja adoraba a Evita, y yo fui, soy, y seré siempre peronista",
    "Si voy al banco es para sacar plata, fiera",
    "El juez Bernasconi es muy rápido: es capaz de meterle un supositorio a una liebre",
    "Quiero ver el sol y acostarme de noche. Antes no quería ni acostarme ni sabía lo que era una almohada",
    "Yo no soy ningún mago: los magos son los que están en Fiorito porque viven con mil pesos por mes",
    "Tus decisiones le cagaron la vida a las próximas dos generaciones de argentinos. Hacete cargo, querido. Ya lo dijo tu padre...",
    "¿Me van a contar a mí cómo es Juan Simón? Lo conozco hace diez años. Es capaz de tomarle la leche al gato",
    "Si el país no llega al arco contrario, tenemos que hacer cambios, aunque sea al Presidente",
    "Tampoco muerto encontraría paz. Me utilizan en vida, y encontrarán el momento de hacerlo estando muerto",
    "Pensé que venía Berlusconi y me encontré con el cartonero Báez",
    "Me siento más sólo que Kung Fu",
    "La droga es un pacman que te va comiendo toda tu familia",
    "Me había propuesto hacerle dos goles a Gatti, pero ahora que me dijo 'gordito' le voy a meter cuatro",
    "Yo quería ir a Estados Unidos, pero el cabeza de termo de Clinton no me deja entrar",
    "Le digo sanguchito porque está siempre cerca de la torta",
    "En mi puta vida pensé que iba a estar en Cuba jugando al golf",
    "La rinoscopía, el pelo corto... Un día los muchachos de la Selección se van a rascar un huevo y Passarella se los va a mandar a cortar",
    "Miren que me han puesto apodos pero 'Pelusa' es el que más va conmigo porque me devuelve a la infancia en Fiorito. Me acuerdo de los Cebollitas, de los arcos de caña cuando jugábamos solamente por la Coca y el sándwich. Eso era más puro",
    "Creeme que me cortaron las piernas…",
    "Lástima no se le tiene a nadie, maestro. Si vos le tenés bronca, pelealo. Pero lástima a nadie",
    "Hoy no hablo, muchachos. Tengo menos palabras que un telegrama",
    "Cuando dicen que soy Dios, yo respondo que están equivocados: soy un simple jugador de fútbol. Dios es Dios y yo soy Diego",
    "A veces me agarran bajones, pero pongo 'El Chavo' y se me pasa todo",
    "¿Qué sos guapo? ¿Qué saltás canguro?, sos una cosa chiquitita",
    "Del Lobo y de Estancia Chica me va a tener que sacar la gendarmería",
    "Cuando salí a la cancha, creía que el corazón me iba a explotar, pero alguien de arriba me frenó",
    "Esta camiseta es la más linda del mundo porque tienen nuestros colores. Acá estoy en mi casa",
    "Tengo memoria. Al que no creía, a los que no creyeron, con perdón de las damas, que la chupen y que la siguen chupando"
];

let frasesDisponibles = [];
let fraseActual = "";
let modoAleatorio = true; // Por defecto aleatorio puro

/* --- INICIALIZACIÓN --- */
document.addEventListener('DOMContentLoaded', () => {
    barajarFrases();
    cambiarFrase(); // Cargar la primera
    iniciarGestosMobile(); // Activar swipe
});

/* --- LÓGICA CORE --- */
function barajarFrases() {
    frasesDisponibles = [...frasesMaradona];
    // Fisher-Yates shuffle
    for (let i = frasesDisponibles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [frasesDisponibles[i], frasesDisponibles[j]] = [frasesDisponibles[j], frasesDisponibles[i]];
    }
}

function obtenerFrase() {
    if (frasesDisponibles.length === 0) {
        barajarFrases();
        // Reset visual sutil
        console.log("Mazo reiniciado");
    }
    
    // Sacamos la última del array barajado
    const frase = frasesDisponibles.pop();
    fraseActual = frase;
    return frase;
}

/* --- INTERFAZ & ANIMACIONES --- */
function cambiarFrase() {
    const contenedor = document.getElementById('contenedorAnimado');
    const texto = document.getElementById('fraseDiego');
    const contador = document.getElementById('contadorFrases');

    // 1. Animación de Salida
    contenedor.classList.remove('animate__fadeInUp'); // Quitar entrada anterior
    contenedor.classList.add('animate__fadeOutLeft'); // Salida hacia izquierda

    setTimeout(() => {
        // 2. Cambio de Texto (mientras está invisible)
        const nuevaFrase = obtenerFrase();
        texto.textContent = `"${nuevaFrase}"`;

        // 2.5 Actualizar contador
        if(contador) {
            let restantes = frasesDisponibles.length;
            let total = frasesMaradona.length;
            contador.textContent = `${total - restantes}/${total}`;
        }

        // 3. Animación de Entrada
        contenedor.classList.remove('animate__fadeOutLeft');
        contenedor.classList.add('animate__fadeInRight'); // Entra por derecha
    }, 300); // Esperar a que termine la animación de salida (aprox 300ms)
}

/* --- FUNCIONALIDADES EXTRA --- */

// Modo
function cambiarModo() {
    modoAleatorio = !modoAleatorio;
    const btn = document.getElementById('botonModo');
    const icon = btn.querySelector('i');
    
    if(modoAleatorio) {
        icon.className = "fas fa-random";
        barajarFrases(); // Re-barajar
    } else {
        icon.className = "fas fa-list-ol"; // Icono de orden secuencial
        frasesDisponibles = [...frasesMaradona]; // Orden original (o como quieras definir "no aleatorio")
    }
    
    // Pequeña animación en el botón
    btn.classList.add('animate__animated', 'animate__rubberBand');
    setTimeout(() => btn.classList.remove('animate__animated', 'animate__rubberBand'), 1000);
}

// Compartir
function compartirFrase() {
    const data = {
        title: 'Frases del Diego',
        text: `"${fraseActual}" - #DiegoEterno`,
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(data).catch(console.error);
    } else {
        // Fallback: Copiar al portapapeles
        navigator.clipboard.writeText(`"${fraseActual}" - Diego Maradona`).then(() => {
            alert("¡Frase copiada! Pegala donde quieras.");
        });
    }
}

/* --- GESTOS TÁCTILES (SWIPE) --- */
function iniciarGestosMobile() {
    let touchStartX = 0;
    let touchEndX = 0;
    const zona = document.getElementById('inicio');

    zona.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    zona.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});

    function handleSwipe() {
        // Si desliza más de 50px
        if (touchEndX < touchStartX - 50) {
            cambiarFrase(); // Swipe izquierda -> Siguiente
        }
        // (Opcional) Swipe derecha -> Anterior
        // if (touchEndX > touchStartX + 50) { ... }
    }
}

// Tecla Espacio para PC
document.addEventListener('keydown', (e) => {
    if (e.code === "Space") {
        e.preventDefault();
        cambiarFrase();
    }
});

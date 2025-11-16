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

// Eliminé el array duplicado que tenías

// 1. Creamos nuestro "mazo" de frases disponibles
let frasesDisponibles = [];
let fraseActual = "";
let frasesMostradas = [];
let modoAleatorio = false;

// 2. Función para barajar el mazo original y llenar el mazo disponible
function barajarFrases() {
    // Copiamos el array original y lo mezclamos (algoritmo Fisher-Yates mejorado)
    let mazoTemporal = [...frasesMaradona];
    for (let i = mazoTemporal.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mazoTemporal[i], mazoTemporal[j]] = [mazoTemporal[j], mazoTemporal[i]];
    }
    frasesDisponibles = mazoTemporal;
}

// 3. Función para obtener una frase aleatoria sin repetición inmediata
function obtenerFraseAleatoria() {
    if (frasesDisponibles.length === 0) {
        barajarFrases();
        // Reiniciamos el historial cuando se reciclan todas las frases
        frasesMostradas = [];
    }

    let fraseElegida;
    
    // Si estamos en modo aleatorio o es la primera frase
    if (modoAleatorio || frasesMostradas.length === 0) {
        fraseElegida = frasesDisponibles.pop();
    } else {
        // Evitamos repetir la última frase mostrada
        let indice;
        do {
            indice = Math.floor(Math.random() * frasesDisponibles.length);
            fraseElegida = frasesDisponibles[indice];
        } while (fraseElegida === fraseActual && frasesDisponibles.length > 1);
        
        // Eliminamos la frase seleccionada del mazo
        frasesDisponibles.splice(indice, 1);
    }
    
    // Actualizamos la frase actual y la añadimos al historial
    fraseActual = fraseElegida;
    frasesMostradas.push(fraseElegida);
    
    return fraseElegida;
}

// 4. Función principal para cambiar la frase
function cambiarFrase() {
    const fraseElegida = obtenerFraseAleatoria();
    
    const fraseElement = document.getElementById("fraseDiego");
    const contadorElement = document.getElementById("contadorFrases");
    
    // Efecto de desvanecimiento
    fraseElement.style.opacity = 0;
    
    setTimeout(() => {
        fraseElement.textContent = `"${fraseElegida}"`;
        fraseElement.style.opacity = 1;
        
        // Actualizar contador si existe
        if (contadorElement) {
            const frasesRestantes = frasesDisponibles.length;
            const totalFrases = frasesMaradona.length;
            contadorElement.textContent = `${frasesRestantes}/${totalFrases}`;
        }
    }, 300);
}

// 5. Función para cambiar entre modos de visualización
function cambiarModo() {
    modoAleatorio = !modoAleatorio;
    const botonModo = document.getElementById("botonModo");
    
    if (botonModo) {
        botonModo.textContent = modoAleatorio ? "Modo: Aleatorio" : "Modo: Sin Repetir";
        botonModo.classList.toggle("modo-aleatorio", modoAleatorio);
    }
    
    // Reiniciamos el mazo al cambiar de modo
    barajarFrases();
    frasesMostradas = [];
}

// 6. Función para compartir frase en redes sociales
function compartirFrase() {
    if (navigator.share) {
        navigator.share({
            title: 'Frase de Maradona',
            text: `"${fraseActual}" - Diego Armando Maradona`,
            url: window.location.href
        })
        .catch(error => console.log('Error al compartir:', error));
    } else {
        // Fallback para navegadores que no soportan Web Share API
        const textoCompartir = `"${fraseActual}" - Diego Armando Maradona\n\nMás frases en: ${window.location.href}`;
        navigator.clipboard.writeText(textoCompartir)
            .then(() => {
                alert('¡Frase copiada al portapapeles!');
            })
            .catch(err => {
                console.error('Error al copiar: ', err);
            });
    }
}

// 7. Función para obtener una frase específica por índice
function obtenerFrasePorIndice(indice) {
    if (indice >= 0 && indice < frasesMaradona.length) {
        return frasesMaradona[indice];
    }
    return null;
}

// 8. Función para buscar frases por palabra clave
function buscarFrases(palabraClave) {
    return frasesMaradona.filter(frase => 
        frase.toLowerCase().includes(palabraClave.toLowerCase())
    );
}

// 9. Función para obtener estadísticas de uso
function obtenerEstadisticas() {
    return {
        total: frasesMaradona.length,
        disponibles: frasesDisponibles.length,
        mostradas: frasesMostradas.length,
        porcentajeCompletado: ((frasesMostradas.length / frasesMaradona.length) * 100).toFixed(1)
    };
}

// 10. Función para reiniciar el mazo completamente
function reiniciarMazo() {
    barajarFrases();
    frasesMostradas = [];
    fraseActual = "";
    
    const contadorElement = document.getElementById("contadorFrases");
    if (contadorElement) {
        const totalFrases = frasesMaradona.length;
        contadorElement.textContent = `${totalFrases}/${totalFrases}`;
    }
    
    const fraseElement = document.getElementById("fraseDiego");
    if (fraseElement) {
        fraseElement.textContent = '¡Presiona el botón para una nueva frase!';
    }
}

// 11. Función para inicializar la aplicación
function inicializarApp() {
    barajarFrases();
    
    // Agregar event listeners si los elementos existen
    const botonReiniciar = document.getElementById("botonReiniciar");
    if (botonReiniciar) {
        botonReiniciar.addEventListener("click", reiniciarMazo);
    }
    
    const botonCompartir = document.getElementById("botonCompartir");
    if (botonCompartir) {
        botonCompartir.addEventListener("click", compartirFrase);
    }
    
    const botonModo = document.getElementById("botonModo");
    if (botonModo) {
        botonModo.addEventListener("click", cambiarModo);
    }
    
    // Permitir cambiar frase con la tecla Espacio
    document.addEventListener("keydown", (event) => {
        if (event.code === "Space") {
            event.preventDefault();
            cambiarFrase();
        }
    });
    
    console.log("App de frases de Maradona inicializada correctamente");
    console.log(`Total de frases: ${frasesMaradona.length}`);
}

// 12. Inicializar la aplicación cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarApp);
} else {
    inicializarApp();
}

// Exportar funciones para uso externo si es necesario
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        cambiarFrase,
        obtenerFrasePorIndice,
        buscarFrases,
        obtenerEstadisticas,
        reiniciarMazo,
        frasesMaradona
    };
}

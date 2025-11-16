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
    "Creeme que me cortaron las piernas…"
];

const frasesMaradona = [
    // ... (tu lista original de frases va aquí)
    "La pelota no se mancha",
    "Dios me iluminó en ese momento",
    // ... etc
    "Miren que me han puesto apodos pero 'Pelusa' es el que más va conmigo..."
];

// 1. Creamos nuestro "mazo" de frases disponibles
let frasesDisponibles = [];

// 2. Función para barajar el mazo original y llenar el mazo disponible
function barajarFrases() {
    // Copiamos el array original y lo mezclamos (algoritmo Fisher-Yates)
    let mazoTemporal = [...frasesMaradona];
    for (let i = mazoTemporal.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mazoTemporal[i], mazoTemporal[j]] = [mazoTemporal[j], mazoTemporal[i]];
    }
    frasesDisponibles = mazoTemporal;
}

function cambiarFrase() {
    // 3. Si nos quedamos sin frases en el mazo, lo volvemos a barajar
    if (frasesDisponibles.length === 0) {
        barajarFrases();
    }

    // 4. Sacamos una frase del mazo (usando .pop() que es muy eficiente)
    const fraseElegida = frasesDisponibles.pop();
    
    const fraseElement = document.getElementById("fraseDiego");
    fraseElement.textContent = `"${fraseElegida}"`;
}

// 5. ¡Importante! Barajamos el mazo por primera vez cuando se carga la página
barajarFrases();

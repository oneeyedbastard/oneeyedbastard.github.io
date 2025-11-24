class TranslationManager {
    constructor() {
        console.log('TranslationManager inicializado');
        this.originalTexts = {};
        this.translations = {
            'inmobiliaria': {
                'spanish': "Este proyecto es un sitio web profesional para una inmobiliaria, desarrollado íntegramente desde cero. Utilicé el ecosistema de Laravel para el backend, implementando Laravel Breeze para gestionar de forma segura el registro, inicio de sesión y perfiles de usuario. El frontend se construyó con plantillas Blade y CSS personalizado, logrando un diseño profesional y adaptable a dispositivos móviles. Me encargué del proceso completo, desde el desarrollo local hasta la configuración y despliegue final en producción.",
                'english': "This project is a professional website for a real estate agency, developed entirely from scratch. I used the Laravel ecosystem for the backend, implementing Laravel Breeze to securely manage user registration, login, and profiles. The frontend was built with Blade templates and custom CSS, achieving a professional design adaptable to mobile devices. I handled the entire process, from local development to final configuration and deployment in production.",
                'german': "Dieses Projekt ist eine professionelle Website für eine Immobilienagentur, die komplett von Grund auf entwickelt wurde. Ich habe das Laravel-Ökosystem für das Backend verwendet und Laravel Breeze implementiert, um Benutzerregistrierung, Anmeldung und Profile sicher zu verwalten. Das Frontend wurde mit Blade-Templates und benutzerdefiniertem CSS erstellt, was ein professionelles Design ergab, das an mobile Geräte angepasst werden kann. Ich habe den gesamten Prozess betreut, von der lokalen Entwicklung bis zur endgültigen Konfiguration und Bereitstellung in der Produktion."
            },
            'clasico': {
                'spanish': "Este proyecto personal, iniciado originalmente en JavaScript, fue reescrito y escalado utilizando Laravel y Breeze para robustecer su backend y funcionalidades. La idea de un simple filtro de partidos evolucionó hasta convertirse en un profundo trabajo de investigación. Esta nueva etapa implicó la recopilación y carga de una base de datos detallada. La plataforma permite a los usuarios filtrar por fecha, torneo y estadio, ofreciendo un nivel de detalle único para analizar la intensa rivalidad entre Gimnasia y Estudiantes.",
                'english': "This personal project, originally started in JavaScript, was rewritten and scaled using Laravel and Breeze to strengthen its backend and functionalities. The idea of a simple match filter evolved into a deep research work. This new stage involved collecting and loading a detailed database. The platform allows users to filter by date, tournament, and stadium, offering a unique level of detail to analyze the intense rivalry between Gimnasia and Estudiantes.",
                'german': "Dieses persönliche Projekt, ursprünglich in JavaScript begonnen, wurde mit Laravel und Breeze neu geschrieben und skaliert, um sein Backend und seine Funktionen zu stärken. Die Idee eines einfachen Spiel-Filters entwickelte sich zu einer tiefgehenden Forschungsarbeit. Diese neue Phase umfasste das Sammeln und Laden einer detaillierten Datenbank. Die Plattform ermöglicht es Benutzern, nach Datum, Turnier und Stadion zu filtern und bietet eine einzigartige Detailtiefe, um die intensive Rivalität zwischen Gimnasia und Estudiantes zu analysieren."
            },
            'diego': {
                'spanish': "El proyecto rinde homenaje al legado de Diego Armando Maradona presentando sus frases más emblemáticas a través de una experiencia web interactiva. Mediante una función desarrollada en JavaScript, el sistema selecciona aleatoriamente entre las citas más memorables del legendario futbolista argentino y las despliega dinámicamente en la interfaz. Cada actualización revela una nueva perla de la sabiduría futbolística y vital de Diego, capturando desde sus reflexiones más profundas hasta sus declaraciones más apasionadas. Esta implementación no solo tecnifica el recuerdo del ídolo, sino que mantiene viva su esencia a través de esas frases que trascendieron el ámbito deportivo para convertirse en parte del imaginario colectivo, permitiendo a los usuarios redescubrir en cada visita la autenticidad y el carisma que definieron al eterno Diez.",
                'english': "The project pays tribute to Diego Armando Maradona's legacy by presenting his most emblematic phrases through an interactive web experience. Through a function developed in JavaScript, the system randomly selects from the most memorable quotes of the legendary Argentine footballer and dynamically displays them in the interface. Each update reveals a new pearl of Diego's football and life wisdom, capturing from his deepest reflections to his most passionate statements. This implementation not only technifies the memory of the idol but keeps his essence alive through those phrases that transcended the sports field to become part of the collective imagination, allowing users to rediscover in each visit the authenticity and charisma that defined the eternal Ten.",
                'german': "Das Projekt würdigt das Vermächtnis von Diego Armando Maradona, indem es seine emblemischsten Phrasen durch ein interaktives Web-Erlebnis präsentiert. Durch eine in JavaScript entwickelte Funktion wählt das System zufällig aus den denkwürdigsten Zitaten des legendären argentinischen Fußballers aus und zeigt sie dynamisch in der Benutzeroberfläche an. Jedes Update enthüllt una nueva Perle von Diegos Fußball- und Lebensweisheit, die von seinen tiefgründigsten Reflexionen bis zu seinen leidenschaftlichsten Aussagen reicht. Diese Implementierung technifiziert nicht nur die Erinnerung an den Idol, sondern hält sein Wesen durch jene Phrasen lebendig, die den Sportbereich transzendierten und Teil des kollektiven Imaginären wurden, sodass die Benutzer bei jedem Besuch die Authentizität und den Charisma wiederentdecken können, die den ewigen Zehn definierten."
            },
            'moviez': {
                'spanish': "Este proyecto, originalmente parte de ARGENTINA PROGRAMA, se ha personalizado con mejoras y extensiones. Diseñado con JavaScript, Bootstrap y CSS, utiliza la API de The Movie Database (TMDb) como su fuente principal de datos sobre películas. Permite a los usuarios explorar películas populares, las mejor valoradas y los próximos estrenos, así como buscar películas por director o actor. Al seleccionar una película, muestra un modal con detalles esenciales como título, descripción, calificación y año de estreno. Esta interfaz simplificada está orientada a facilitar la exploración y acceso a información relevante sobre películas mediante la integración de la API de TMDb.",
                'english': "This project, originally part of ARGENTINA PROGRAMA, has been customized with improvements and extensions. Designed with JavaScript, Bootstrap, and CSS, it uses The Movie Database (TMDb) API as its primary source of movie data. It allows users to explore popular movies, the highest rated, and upcoming releases, as well as search for movies by director or actor. When selecting a movie, it displays a modal with essential details such as title, description, rating, and release year. This simplified interface is aimed at facilitating the exploration and access to relevant movie information through the integration of the TMDb API.",
                'german': "Dieses Projekt, ursprünglich Teil von ARGENTINA PROGRAMA, wurde mit Verbesserungen und Erweiterungen angepasst. Entworfen mit JavaScript, Bootstrap und CSS, verwendet es die The Movie Database (TMDb) API als primäre Quelle für Filmdaten. Es ermöglicht Benutzern, beliebte Filme, die bestbewerteten und kommende Veröffentlichungen zu erkunden sowie nach Filmen nach Regisseur oder Schauspieler zu suchen. Bei der Auswahl eines Films wird ein Modal mit wesentlichen Details wie Titel, Beschreibung, Bewertung und Erscheinungsjahr angezeigt. Diese vereinfachte Benutzeroberfläche zielt darauf ab, die Erkundung und den Zugang zu relevanten Filminformationen durch die Integration der TMDb-API zu erleichtern."
            },
            'about': {
                'spanish': "Creo que programar y componer música tienen mucho en común: ambos requieren estructura, creatividad y armonía. Soy Desarrollador Fullstack y estudiante de la UNLP, pero mi camino hacia el código fue una elección consciente de reinvención a los 46 años. Me especializo en crear aplicaciones web dinámicas con Laravel, PHP, JavaScript y MySQL. Lo que me diferencia es mi enfoque híbrido: utilizo Inteligencia Artificial para ser más eficiente en el desarrollo y aplico la sensibilidad artística de la música para cuidar la experiencia de usuario. No solo escribo código; construyo soluciones completas con la dedicación de quien ha elegido su pasión con madurez.",
                'english': "I believe coding and composing music have a lot in common: both require structure, creativity, and harmony. I am a Fullstack Developer and UNLP student, but my path to code was a conscious choice of reinvention at 46. I specialize in creating dynamic web applications with Laravel, PHP, JavaScript, and MySQL. What differentiates me is my hybrid approach: I use Artificial Intelligence to be more efficient in development and apply the artistic sensitivity of music to care for the user experience. I don't just write code; I build complete solutions with the dedication of someone who has chosen their passion with maturity.",
                'german': "Ich glaube, Programmieren und Komponieren haben viel gemeinsam: Beides erfordert Struktur, Kreativität und Harmonie. Ich bin Fullstack-Entwickler und Student an der UNLP, aber mein Weg zum Code war eine bewusste Entscheidung zur Neuerfindung mit 46 Jahren. Ich spezialisiere mich auf die Erstellung dynamischer Webanwendungen mit Laravel, PHP, JavaScript und MySQL. Was mich unterscheidet, ist mein hybrider Ansatz: Ich nutze KI, um effizienter zu entwickeln, und wende die künstlerische Sensibilität der Musik an, um die Benutzererfahrung zu pflegen. Ich schreibe nicht nur Code; ich baue komplette Lösungen mit der Hingabe von jemandem, der seine Leidenschaft mit Reife gewählt hat."
            }
        };

        this.init();
    }

    init() {
        console.log('Inicializando TranslationManager...');
        this.captureOriginalTexts();
        this.addButtonListeners();
    }

    captureOriginalTexts() {
        console.log('Capturando textos originales...');
        const elements = {
            'inmobiliaria': document.getElementById('desc-inmobiliaria'),
            'clasico': document.getElementById('desc-clasico'),
            'diego': document.getElementById('desc-diego'),
            'moviez': document.getElementById('desc-moviez'),
            'about': document.getElementById('desc-about')
        };

        for (const [key, element] of Object.entries(elements)) {
            if (element) {
                // Guardamos el innerHTML para respetar saltos de linea si los hubiera
                this.originalTexts[key] = element.innerHTML;
                console.log(`✓ Texto original capturado para: ${key}`);
            } else {
                console.warn(`✗ Elemento no encontrado: desc-${key}`);
            }
        }
    }

    addButtonListeners() {
        console.log('Agregando event listeners a los botones...');
        const allButtons = document.querySelectorAll('button');

        allButtons.forEach(button => {
            const buttonText = button.textContent.trim();
            
            if (buttonText === 'ESP' || buttonText === 'ENG' || buttonText === 'DEU') {
                
                // 1. Verificamos si es el botón de la sección "Sobre Mí"
                if (button.closest('.sobre-mi')) {
                    button.onclick = () => {
                        const lang = buttonText === 'ESP' ? 'spanish' : 
                                     buttonText === 'ENG' ? 'english' : 'german';
                        this.translateAbout(lang);
                    };
                } 
                // 2. Si no, verificamos si es una tarjeta de proyecto normal
                else {
                    const card = button.closest('.card-proyecto');
                    if (card) {
                        const titleElement = card.querySelector('h3');
                        if (titleElement) {
                            const title = titleElement.textContent.toLowerCase();
                            let projectId = '';
                            
                            if (title.includes('inmobiliaria')) projectId = 'inmobiliaria';
                            else if (title.includes('clásico')) projectId = 'clasico';
                            else if (title.includes('diego')) projectId = 'diego';
                            else if (title.includes('moviez')) projectId = 'moviez';
                            
                            if (projectId) {
                                button.onclick = () => {
                                    const lang = buttonText === 'ESP' ? 'spanish' : 
                                                 buttonText === 'ENG' ? 'english' : 'german';
                                    this.translateProject(projectId, lang);
                                };
                            }
                        }
                    }
                }
            }
        });
    }

    translateProject(projectId, language) {
        console.log(`Traduciendo proyecto: ${projectId} a ${language}`);
        
        try {
            const element = document.getElementById(`desc-${projectId}`);
            if (!element) return;

            if (language === 'spanish') {
                if (this.originalTexts[projectId]) {
                    element.innerHTML = this.originalTexts[projectId];
                }
            } else if (this.translations[projectId] && this.translations[projectId][language]) {
                element.innerHTML = this.translations[projectId][language];
            }
        } catch (error) {
            console.error(`✗ Error al traducir proyecto '${projectId}':`, error);
        }
    }

    translateAbout(language) {
        this.translateProject('about', language);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    window.TranslationManager = new TranslationManager();
});

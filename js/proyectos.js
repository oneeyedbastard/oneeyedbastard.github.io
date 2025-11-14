function translateText(project, language) {
    const translations = {
        moviez: {
            english: "This project, originally part of ARGENTINA PROGRAMA, has been customized with improvements and extensions. Designed with JavaScript, Bootstrap, and CSS, it uses The Movie Database (TMDb) API as its main data source for movies. It allows users to explore popular movies, top-rated ones, and upcoming releases, as well as search for movies by director or actor. When a movie is selected, it displays a modal with essential details such as title, description, rating, and release year. This simplified interface is aimed at facilitating the exploration and access to relevant movie information through the integration of the TMDb API.",
            german: "Dieses Projekt, das ursprünglich Teil von ARGENTINA PROGRAMA war, wurde mit Verbesserungen und Erweiterungen angepasst. Es wurde mit JavaScript, Bootstrap und CSS entwickelt und nutzt die API von The Movie Database (TMDb) als Hauptdatenquelle für Filme. Es ermöglicht Benutzern, beliebte Filme, am besten bewertete Filme und bevorstehende Veröffentlichungen zu erkunden sowie nach Filmen nach Regisseur oder Schauspieler zu suchen. Bei Auswahl eines Films wird ein Modal mit wesentlichen Details wie Titel, Beschreibung, Bewertung und Erscheinungsjahr angezeigt. Diese vereinfachte Benutzeroberfläche zielt darauf ab, die Erkundung und den Zugriff auf relevante Filminformationen durch die Integration der TMDb-API zu erleichtern."
        },
        diego: {
            english: "The project focuses on displaying random quotes from Diego Armando Maradona on a webpage. A JavaScript function was implemented to randomly select one of the legendary Argentine footballer's famous quotes and dynamically display it in an HTML element. These phrases represent iconic and memorable expressions from Diego's legacy.",
            german: "Das Projekt konzentriert sich darauf, zufällige Zitate von Diego Armando Maradona auf einer Webseite anzuzeigen. Es wurde eine JavaScript-Funktion implementiert, die zufällig eine der berühmten Phrasen des legendären argentinischen Fußballers auswählt und sie dynamisch in einem HTML-Element anzeigt. Diese Sätze repräsentieren ikonische und unvergessliche Ausdrücke aus Diegos Erbe."
        },
        clasico: {
            english: "This personal project, originally started in JavaScript, was rewritten and scaled using Laravel and Breeze to strengthen its backend and functionalities. The idea of a simple match filter evolved into a deep research project.\n\nThis new stage involved compiling and loading a detailed database. The platform allows users to filter by date, tournament, and stadium, offering a unique level of detail to analyze the intense rivalry between Gimnasia and Estudiantes.",
            german: "Dieses persönliche Projekt, das ursprünglich in JavaScript begonnen wurde, wurde neu geschrieben und mithilfe von Laravel und Breeze skaliert, um sein Backend und seine Funktionalitäten zu stärken. Die Idee eines einfachen Spielfilters entwickelte sich zu einer tiefgreifenden Forschungsarbeit.\n\nDiese neue Phase umfasste die Sammlung und das Laden einer detaillierten Datenbank. Die Plattform ermöglicht es den Benutzern, nach Datum, Turnier und Stadion zu filtern und bietet so einen einzigartigen Detaillierungsgrad, um die intensive Rivalität zwischen Gimnasia und Estudiantes zu analysieren."
        },
        inmobiliaria: {
            english: "This project is a professional website for a real estate agency, developed entirely from scratch. I used the Laravel ecosystem for the backend, implementing Laravel Breeze to securely manage user registration, login, and profiles. The frontend was built with Blade templates and custom CSS, achieving a professional and mobile-responsive design. I handled the entire process, from local development to the final configuration and deployment in production.",
            german: "Dieses Projekt ist eine professionelle Website für eine Immobilienagentur, die vollständig von Grund auf neu entwickelt wurde. Ich habe das Laravel-Ökosystem für das Backend verwendet und Laravel Breeze implementiert, um die Benutzerregistrierung, Anmeldung und Profile sicher zu verwalten. Das Frontend wurde mit Blade-Vorlagen und benutzerdefiniertem CSS erstellt, wodurch ein professionelles und mobil-responsives Design erreicht wurde. Ich habe den gesamten Prozess übernommen, von der lokalen Entwicklung bis zur endgültigen Konfigurierung und Bereitstellung in der Produktionsumgebung."
        }
    };

    if (!translations[project]) {
        console.error(`Error: No se encontraron traducciones para el proyecto "${project}".`);
        return;
    }

    const translatedText = translations[project][language];

    if (!translatedText) {
        console.error(`Error: No se encontró el idioma "${language}" para el proyecto "${project}".`);
        return;
    }

    const textElement = document.querySelector(`.proyecto-${project} p`);

    if (textElement) {
        textElement.innerHTML = translatedText;
    } else {
        console.warn(`Advertencia: No se encontró el elemento ".proyecto-${project} p" en el DOM.`);
    }
}

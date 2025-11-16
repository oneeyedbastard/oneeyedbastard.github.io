function translateToEnglish() {
    const text = document.querySelector('.sobre-mi p');
    const translatedText = `As a full-stack developer, my experience spans PHP development using the popular Laravel framework for building robust and efficient web applications. My knowledge in JavaScript, CSS, and HTML enables me to design interactive and appealing interfaces, optimizing user experience in each project.

    My expertise in database management complements my technical ability, allowing me to create solid and scalable systems. I have worked with different types of databases, ensuring efficient and secure information storage.
    
    My comprehensive approach to web development ranges from implementing backend logic with PHP and Laravel to constructing dynamic interfaces with JavaScript, CSS, and HTML. This versatility enables me to offer complete solutions, from conceptualization to implementation and final product deployment.
    
    With a strong command of the mentioned technologies and a deep understanding of their interaction, I am equipped to tackle complex challenges and materialize innovative ideas into functional and appealing web projects for end users.`;

    text.textContent = translatedText;
}

function translateToGerman() {
    const text = document.querySelector('.sobre-mi p');
    const translatedText = `Als Full-Stack-Entwickler umfasst meine Erfahrung die PHP-Entwicklung unter Verwendung des beliebten Laravel-Frameworks zum Aufbau robuster und effizienter Webanwendungen. Mein Wissen in JavaScript, CSS und HTML ermöglicht es mir, interaktive und ansprechende Benutzeroberflächen zu gestalten und die Benutzererfahrung in jedem Projekt zu optimieren.

    Meine Expertise im Datenbankmanagement ergänzt meine technischen Fähigkeiten und ermöglicht es mir, solide und skalierbare Systeme zu erstellen. Ich habe mit verschiedenen Arten von Datenbanken gearbeitet und so eine effiziente und sichere Speicherung von Informationen gewährleistet.
    
    Mein umfassender Ansatz für die Webentwicklung reicht von der Implementierung von Backend-Logik mit PHP und Laravel bis hin zum Aufbau dynamischer Benutzeroberflächen mit JavaScript, CSS und HTML. Diese Vielseitigkeit ermöglicht es mir, vollständige Lösungen anzubieten, von der Konzeption bis zur Implementierung und Bereitstellung des Endprodukts.
    
    Mit einem fundierten Verständnis der genannten Technologien und deren Interaktion bin ich in der Lage, komplexe Herausforderungen anzugehen und innovative Ideen in funktionale und ansprechende Webprojekte für Endbenutzer umzusetzen.`;

    text.textContent = translatedText;
}


// Random PHP codes
const phpCodes = [
    `<?php
    function squareNumber($number) {
        return $number * $number;
    }
    ?>`,
    
    "<?php $variable = 10; echo $variable * 5; ?>",
    "<?php function greet() { return 'Hello!'; } echo greet(); ?>",
    "<?php $name = 'Mundo'; echo '¡Hola, ' . $name . '!'; ?>",
    "<?php $colors = ['rojo', 'verde', 'azul']; echo $colors[0]; ?>",
    "<?php for ($i = 1; $i <= 3; $i++) { echo $i . '... '; } ?>",
    "<?php $age = 20; echo ($age >= 18) ? 'Adulto' : 'Menor'; ?>",
    "<?php echo 'Hoy es ' . date('Y-m-d'); ?>",
    "<?php print_r(['a', 'b', 'c']); ?>",
    "<?php $a = 5; $b = 10; echo $a + $b; ?>",
    
    // --- Más ejemplos ---
    
    "<?php if (true) { echo 'Verdadero'; } else { echo 'Falso'; } ?>",
    "<?php $i = 0; while ($i < 3) { echo $i; $i++; } ?>",
    `<?php
    class User {
        public $name;
        public function __construct($name) {
            $this->name = $name;
        }
    }
    $user = new User('Juan');
    echo $user->name;
    ?>`,
    "<?php $data = ['id' => 1, 'name' => 'Test']; echo json_encode($data); ?>",
    "<?php session_start(); $_SESSION['user_id'] = 123; ?>",
    "<?php echo strlen('Hola Mundo'); // Imprime 10 ?>",
    "<?php $text = 'hola'; echo strtoupper($text); // Imprime HOLA ?>",
    "<?php $array = [3, 1, 2]; sort($array); print_r($array); ?>",
    "<?php echo $_SERVER['HTTP_HOST']; // Muestra el host ?>",
    `<?php
    try {
        $pdo = new PDO('mysql:host=localhost;dbname=test', 'root', '');
        echo 'Conectado';
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
    ?>`,
    "<?php $file = 'test.txt'; file_put_contents($file, 'Contenido'); ?>",
    "<?php $content = file_get_contents('test.txt'); echo $content; ?>"
];


let currentCodeIndex = 0;
let currentCharacterIndex = 0;
let interval;

// Function to display a random PHP code letter by letter
function showPHPCode() {
    const phpCodeElement = document.getElementById("codigoPHP");
    if (phpCodeElement) {
        currentCodeIndex = Math.floor(Math.random() * phpCodes.length);
        const randomCode = phpCodes[currentCodeIndex];
        phpCodeElement.textContent = "";

        clearInterval(interval);
        currentCharacterIndex = 0;
        interval = setInterval(() => {
            if (currentCharacterIndex <= randomCode.length) {
                phpCodeElement.textContent = randomCode.slice(0, currentCharacterIndex);
                currentCharacterIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100); // 100-millisecond interval (changeable)
    }
}

// Assign the showPHPCode function on clicking the black square
document.getElementById("codigoPHP").addEventListener("load", showPHPCode);

// Show a random PHP code on page load
showPHPCode();

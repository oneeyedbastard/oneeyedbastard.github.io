// script.js - Versión corregida para múltiples elementos PHP
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script.js cargado correctamente');

    /* =========================================
       1. EFECTO DE ESCRITURA PHP (TYPEWRITER) - CORREGIDO
       ========================================= */
    const codigosPHP = [
        "<?php\nfunction elevar(\$n) {\n  return \$n * \$n;\n}\n?>",
        "<?php\n\$user = Auth::user();\necho \$user->name;\n?>",
        "<?php\n// Conexión PDO\n\$pdo = new PDO('mysql:host=localhost', \$u, \$p);\n?>",
        "<?php\nforeach (\$items as \$i) {\n  echo strtoupper(\$i);\n}\n?>",
        "<?php\nnamespace App\\Http\\Controllers;\nuse Illuminate\\Http\\Request;\n?>",
        "<?php\nif (\$error) {\n  die('Error crítico');\n}\n?>",
        "<?php\nreturn view('welcome', ['data' => \$data]);\n?>",
        "<?php\n\$fecha = date('Y-m-d H:i:s');\n?>",
        "<?php\nclass Usuario extends Model {\n  protected \$table = 'users';\n}\n?>",
        "<?php\necho 'Hello World';\n?>"
    ];

    // Objeto para almacenar los intervalos de cada elemento
    const intervals = {};

    function mostrarCodigoPHP(elementId) {
        const codigoPHPElement = document.getElementById(elementId);
        
        if (!codigoPHPElement) return;

        // Limpiar intervalo anterior si existe
        if (intervals[elementId]) {
            clearInterval(intervals[elementId]);
        }
        
        // Elegir código al azar
        const randomIndex = Math.floor(Math.random() * codigosPHP.length);
        const codigoAleatorio = codigosPHP[randomIndex];
        
        codigoPHPElement.textContent = "";
        let i = 0;

        // Iniciar escritura
        intervals[elementId] = setInterval(() => {
            if (i < codigoAleatorio.length) {
                codigoPHPElement.textContent += codigoAleatorio.charAt(i);
                i++;
            } else {
                clearInterval(intervals[elementId]);
                // Opcional: Esperar 5 segundos y escribir otro automáticamente
                // setTimeout(() => mostrarCodigoPHP(elementId), 5000); 
            }
        }, 50);
    }

    /* =========================================
       2. INICIALIZACIÓN DEL EFECTO PHP PARA TODOS LOS ELEMENTOS
       ========================================= */
    // IDs de todos los elementos que deben mostrar código PHP
    const phpElements = [
        'php-bg-hero',
        'php-bg-sobre-mi',
        'php-bg-proyectos'
    ];

    // Iniciar efecto PHP para todos los elementos
    phpElements.forEach(elementId => {
        mostrarCodigoPHP(elementId);
        
        // Si el usuario hace click en el cuadrado negro, cambia el código
        const box = document.getElementById(elementId);
        if(box) {
            box.addEventListener("click", () => mostrarCodigoPHP(elementId));
        }
    });

    /* =========================================
       3. SCROLL SUAVE
       ========================================= */
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /* =========================================
       4. ANIMACIÓN DE CARDS
       ========================================= */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const projectCards = document.querySelectorAll('.card-proyecto');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    /* =========================================
       5. MANEJO DEL NAVBAR RESPONSIVE
       ========================================= */
    window.addEventListener('resize', function() {
        const nav = document.querySelector('.nav');
        const menuIcon = document.querySelector('.menu-icon');
        
        if (window.innerWidth > 768) {
            nav.classList.remove('nav-active');
            if (menuIcon) {
                menuIcon.classList.remove('toggle');
            }
        }
    });

   

    /* =========================================
       7. VERIFICACIÓN DE ELEMENTOS
       ========================================= */
    console.log('Elementos verificados:');
    console.log('- Elementos PHP:', phpElements.length);
    console.log('- cards proyectos:', projectCards.length);
    console.log('- enlaces scroll suave:', links.length);
});

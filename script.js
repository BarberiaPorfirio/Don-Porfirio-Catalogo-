// ==========================================
// APARTADO 1: BASE DE DATOS DE CORTES Y CATEGORÍAS (JSON)
// ==========================================
const nivelesCortes = [
    {
        categoria: "Barba",
        items: [
            { 
                nombre: "Arreglos de Barba", 
                descripcion: "Aseo y mantenimiento para una barba limpia.", 
                imagen:"images/barba-3.jpeg", 
                variantes: [
                    "images/barba.jpeg",
                    "images/barba-1.jpeg", 
                    "images/barba-2.png",
                    "images/barba-3.jpeg" 
                ] 
            },
            { 
                nombre: "Rituales de Barba", 
                descripcion: "Experiencia completa para el rostro y la barba.", 
                imagen: "images/ritualdebarba.jpeg", 
                variantes: [
                    "images/ritualdebarba.jpeg", 
                    "images/ritualdebarba-1.jpeg", 
                    "images/ritualdebarba-2.jpeg",
                    "images/barba-nuevo.jpeg"
                ] 
            }
        ]
    },
    {
        categoria: "Clásicos",
        items: [
            { 
                nombre: "Militar", 
                descripcion: "Muy corto, práctico y de bajo mantenimiento.", 
                imagen: "images/militar.jpeg", 
                variantes: [
                    "images/militar.jpeg", 
                    "images/militar-1.png", 
                    "images/militar-2.png"
                ] 
            },
            { 
                nombre: "Casquete Corto", 
                descripcion: "Corte corto, limpio y fácil de mantener.", 
                imagen: "images/casquetecorto.jpeg",
                variantes: [
                    
                    "images/casquetecorto.jpeg",
                    "images/casquetecorto-nuevo.jpeg"
                ] 
            },
            { 
                nombre: "Casquete Regular", 
                descripcion: "Versión un poco más larga con acabado uniforme.", 
                imagen: "images/casqueteregular-2.jpg", 
                variantes: [
                    "images/casqueteregular-2.jpg",
                    "images/casqueteregularcuadrado.jpg",
                    "images/casqueteregularredondo-1.jpg",
                    "images/casqueteregular.jpeg", 
                    "images/casqueteregular-1.jpeg"
                ] 
            },
            { 
                nombre: "Casquete Francés", 
                descripcion: "Parte superior con textura y laterales cortos.", 
                imagen: "images/casquetefrances-3.jpeg", 
                variantes: [
                    "images/casquetefrances-3.jpeg",
                    "images/casquetefrances.jpeg",
                    "images/casquetefrances-2.jpeg"
                ] 
            }
        ]
    },
    {
        categoria: "Modernos",
        items: [
            { 
                nombre: "Low Fade", 
                descripcion: "Degradado bajo y suave para un look moderno.", 
                imagen: "images/lowfade-2.jpeg", 
                variantes: [
                    "images/lowfade-2.jpeg",
                    "images/lowfade.jpeg", 
                    "images/lowfade-1.jpeg"
                ] 
            },
            { 
                nombre: "Mid Fade", 
                descripcion: "Degradado medio con transición equilibrada.", 
                imagen: "images/mid-fade-1.png", 
                variantes: [
                    "images/mid-fade-1.png",
                    "images/mid.png", 
                    "images/mid-1.jpeg"
                ] 
            },
            { 
                nombre: "High Fade", 
                descripcion: "Degradado alto con contraste marcado.", 
                imagen: "images/highfade.jpeg", 
                variantes: [
                    "images/highfade.jpeg", 
                    "images/highfade-1.png", 
                    "images/highfade-2.png",
                    "images/highfade-nuevo.jpeg"
                ] 
            },
            { 
                nombre: "Buzz Fade", 
                descripcion: "Corte uniforme y corto con fade lateral.", 
                imagen: "images/BUZZ FADE.jpeg", 
                variantes: [
                    "images/BUZZ FADE.jpeg", 
                    "images/buzzfade-1.jpeg", 
                    "images/buzzfade-2.jpeg"
                ] 
            },
            { 
                nombre: "Pompadour", 
                descripcion: "Volumen estilizado y laterales limpios.", 
                imagen: "images/pompadour.jpeg", 
                variantes: [
                    "images/pompadour.jpeg",
                    "images/pompadour-1.jpeg"
                ] 
            },
            { 
                nombre: "Blending", 
                descripcion: "Transición suave entre longitudes, discreto y formal.", 
                imagen: "images/Blending.png", 
                variantes: ["images/Blending.png"] 
            },
            { 
                nombre: "French Crop", 
                descripcion: "Corte texturizado en la parte superior con un flequillo recto y degradado lateral.", 
                imagen: "images/french-crop.jpeg", 
                variantes: [
                    "images/french-crop.jpeg", 
                    "images/french-crop-1.jpeg",
                    "images/french-crop-2.png"
                ] 
            }
        ]
    },
    {
        categoria: "Urbanos",
        items: [
            { 
                nombre: "Taper Fade", 
                descripcion: "Degradado progresivo y limpio en patillas y nuca, atemporal.", 
                imagen: "images/taper-fade.jpeg", 
                variantes: [
                    "images/taper-fade.jpeg",
                    "images/taperfade-1.jpeg",
                    "images/clasico-nuevo.jpeg"
                ] 
            },
            { 
                nombre: "Mullet", 
                descripcion: "Largo atrás y corto a los lados.", 
                imagen: "images/mullet.jpeg", 
                variantes: [
                    "images/mullet.jpeg", 
                    "images/mullet-1.jpeg" 
                ] 
            },
            { 
                nombre: "Burts Fade", 
                descripcion: "Fade circular alrededor de la oreja.", 
                imagen: "images/burtsfade.jpeg", 
                variantes: [
                    "images/burtsfade.jpeg", 
                    "images/burtsfade-1.jpg", 
                    "images/burtsfade-2.png"
                ] 
            },
            { 
                nombre: "Mohan", 
                descripcion: "Estilo atrevido con volumen, textura y presencia.", 
                imagen: "images/mohan.jpeg", 
                variantes: [
                    "images/mohan.jpeg", 
                    "images/mohan-1.jpeg", 
                    "images/mohan-2.jpeg",
                    "images/moderno-nuevo.jpeg"
                ] 
            }
        ]
    },
    {
        categoria: "Diseño y Color",
        items: [
            { 
                nombre: "Tintes de Fantasía", 
                descripcion: "Efectos de color creativos y llamativos.", 
                imagen: "images/tintesdefantasia.jpeg", 
                variantes: [
                    "images/tintesdefantasia.jpeg", 
                    "images/tintesdefantasia-1.jpeg", 
                    "images/tintesdefantasia-2.jpeg", 
                    "images/tintesdefantacia-3.jpeg", 
                    "images/tintesdefantasia-4.png"
                ] 
            },
            { 
                nombre: "Líneas de Diseño", 
                descripcion: "Diseños precisos marcados con navaja.", 
                imagen: "images/lineasdediseño.jpeg", 
                variantes: [
                    "images/lineasdediseño.jpeg", 
                    "images/lineasdediseño-1.jpeg", 
                    "images/lineaddediseño-2.png", 
                    "images/lineasdediseño-3.png", 
                    "images/lineasdediseño-4.jpeg",
                    "images/diseno-nuevo.jpeg"
                ] 
            },
            { 
                nombre: "Matización de Cana", 
                descripcion: "Limpieza y sofisticación de canas.", 
                imagen: "images/matizaciondecana.jpeg", 
                variantes: [
                    "images/matizaciondecana.jpeg", 
                    "images/matizaciondecana-1.jpeg" 
                ] 
            }
        ]
    }
];

// ==========================================
// APARTADO 2: LÓGICA DE FILTRADO Y RENDERIZADO
// ==========================================
const contenedorCortes = document.getElementById('contenedorCortes');

function filtrarCategoria(nombreCategoria) {
    if (!contenedorCortes) return;

    // Limpiar el contenedor antes de agregar la nueva categoría
    contenedorCortes.innerHTML = '';

    const categoriaEncontrada = nivelesCortes.find(cat => cat.categoria.toLowerCase() === nombreCategoria.toLowerCase());

    if (categoriaEncontrada) {
        const seccion = document.createElement('div');
        seccion.className = 'nivel-section';
        
        const titulo = document.createElement('h3');
        titulo.className = 'categoria-titulo';
        titulo.textContent = categoriaEncontrada.categoria;
        seccion.appendChild(titulo);

        const grid = document.createElement('div');
        grid.className = 'nivel-grid';

        categoriaEncontrada.items.forEach(item => {
            const card = document.createElement('article');
            card.className = 'corte-card';
            
            // Evento para abrir el modal al hacer clic en la tarjeta
            card.onclick = () => abrirVariantes(item.nombre);

            card.innerHTML = `
                <div class="corte-imagen">
                    <img src="${item.imagen}" alt="${item.nombre}" loading="lazy" 
                         onerror="this.onerror=null; this.src='https://via.placeholder.com/300x320?text=Subir+Imagen';">
                    <div class="overlay-ver-mas">
                        <span><i class="fas fa-search-plus"></i> Ver más</span>
                    </div>
                </div>
                <div class="corte-info">
                    <h4>${item.nombre}</h4>
                    <p class="corte-descripcion">${item.descripcion}</p>
                </div>
            `;
            grid.appendChild(card);
        });

        seccion.appendChild(grid);
        contenedorCortes.appendChild(seccion);

        // Desplazamiento suave hacia la sección mostrada
        const separador = document.querySelector('.separador-premium');
        if (separador) {
            window.scrollTo({
                top: separador.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    }
}

function mostrarMensajeInicial() {
    if (contenedorCortes) {
        contenedorCortes.innerHTML = `
            <div class="mensaje-inicial">
                <i class="fas fa-hand-pointer"></i>
                <p>Elige un estilo en el menú superior para comenzar.</p>
            </div>
        `;
    }
}

// ==========================================
// APARTADO 3: LÓGICA DEL MODAL DE VARIANTES (FOTOS VERTICALES)
// ==========================================
const modal = document.getElementById('modalVariantes');
const contenedorVariantes = document.getElementById('contenedorVariantes');
const modalTitulo = document.getElementById('modalTitulo');
const btnCerrar = document.querySelector('.close-modal');

function abrirVariantes(nombreCorte) {
    let corteSeleccionado = null;
    
    // Buscar el corte dentro de la base de datos
    nivelesCortes.forEach(cat => {
        const encontrado = cat.items.find(i => i.nombre === nombreCorte);
        if (encontrado) corteSeleccionado = encontrado;
    });

    if (corteSeleccionado && corteSeleccionado.variantes.length > 0) {
        modalTitulo.textContent = `Acabados: ${corteSeleccionado.nombre}`;
        contenedorVariantes.innerHTML = ''; 
        
        // Agregar las imágenes de las variantes al modal
        corteSeleccionado.variantes.forEach(rutaImagen => {
            const img = document.createElement('img');
            img.src = rutaImagen;
            img.alt = corteSeleccionado.nombre;
            // Si la imagen no carga, se oculta para no dejar espacios rotos
            img.onerror = function() { this.style.display = 'none'; }; 
            contenedorVariantes.appendChild(img);
        });

        // Mostrar el modal y bloquear el scroll del fondo
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; 
    }
}

// Cerrar modal con el botón "X"
if (btnCerrar) {
    btnCerrar.onclick = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};

// Cargar el mensaje inicial al iniciar la página
document.addEventListener('DOMContentLoaded', mostrarMensajeInicial);
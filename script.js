
/* =========================================
   LISTA DE PRODUCTOS
========================================= */

const productos = [

    {
        nombre: "Bomber de paño",
        categoria: "PAÑOS",
        precioUnidad: 220,
        precioMayor: 165,
        tallas: ["S", "M", "L"],
        descripcion: "Material paño con forro por dentro, estilo oversize.",
        imagen: "imagenes/paños/bombers/cadete-paño-part1.jpeg",
        imagenesColores: [
            "imagenes/paños/bombers/cadete-paño-part2.jpeg",
            "imagenes/paños/bombers/bomber-paño.jpeg",
            "imagenes/paños/bombers/bom-paño-col1.jpeg",
            "imagenes/paños/bombers/bom-paño-col2.jpeg"
        ]
    },

    {
        nombre: "Napoleon Paño",
        categoria: "PAÑOS",
        precioUnidad: 200,
        precioMayor: 160,
        tallas: ["S", "M", "L"],
        descripcion: "Material paño con forro por dentro.",
        imagen: "imagenes/paños/napoleon/napoleon.jpeg",
        imagenesColores: [
            "imagenes/paños/napoleon/napoleon.jpeg",
            "imagenes/paños/napoleon/napoleon-col1.jpeg",
            "imagenes/paños/napoleon/napoleon-col2.jpeg"
        ]
    },

    {
        nombre: "Oversize Jean",
        categoria: "JEANS",
        precioUnidad: 180,
        precioMayor: 140,
        tallas: ["S", "M", "L"],
        descripcion: "Corte oversize.",
        imagen: "imagenes/jeans/casaca/casaca-jean.jpeg",
        imagenesColores: [
            "imagenes/jeans/casaca/casaca-jean1.jpeg",
            "imagenes/jeans/casaca/casaca-jean2.jpeg",
            "imagenes/jeans/casaca/casaca-jean3.jpeg"
        ]
    },

    {
        nombre: "Blazer manga 3/4",
        categoria: "BLAZER",
        precioUnidad: 160,
        precioMayor: 115,
        tallas: ["S", "M", "L", "XL"],
        descripcion: "Material catania, colores segun temporada.",
        imagen: "imagenes/catania/blazer34/blazer-34.jpeg",
        imagenesColores: [
            "imagenes/catania/blazer34/blazer-34-part1.jpeg",
            "imagenes/catania/blazer34/blazer-34-part2.jpeg",
            "imagenes/catania/blazer34/blazer-34-part3.jpeg",
            "imagenes/catania/blazer34/blazer-34-part4.jpeg"
        ]
    },

    {
        nombre: "Napoleón Jean",
        categoria: "JEANS",
        precioUnidad: 195,
        precioMayor: 150,
        tallas: ["S", "M", "L"],
        descripcion: "Jean pre lavado 100% algodón, colores según temporada.",
        imagen: "imagenes/jeans/napoleon/napoleon-jean.jpeg",
        imagenesColores: [
            "imagenes/jeans/napoleon/napoleon-jean.jpeg",
            "imagenes/jeans/napoleon/napoleon-jean1.jpeg",
            "imagenes/jeans/napoleon/napoleon-jean2.jpeg"
        ]
    },

    {
        nombre: "Clasico Cuero",
        categoria: "CUEROS",
        precioUnidad: 170,
        precioMayor: 130,
        tallas: ["S", "M", "L"],
        descripcion: "Material eco cuero.",
        imagen: "imagenes/cueros/clasicos/clasico-cuero.jpeg",
        imagenesColores: [
            "imagenes/cueros/clasicos/clasico-cuero1.jpeg",
            "imagenes/cueros/clasicos/clasico-cuero2.jpeg",
            "imagenes/cueros/clasicos/clasico-cuero3.jpeg",
            "imagenes/cueros/clasicos/clasico-cuero4.jpeg"
        ]
    },

    {
        nombre: "Biker Jean",
        categoria: "JEANS",
        precioUnidad: 160,
        precioMayor: 135,
        tallas: ["P", "S", "M", "L"],
        descripcion: "Horma semi oversize.",
        imagen: "imagenes/jeans/biker/biker-jean.jpeg",
        imagenesColores: [
            "imagenes/jeans/biker/biker-jean4.jpeg",
            "imagenes/jeans/biker/biker-jean1.jpeg",
            "imagenes/jeans/biker/biker-jean2.jpeg",
            "imagenes/jeans/biker/biker-jean3.jpeg"
        ]
    },

    {
        nombre: "Bomber Cuero",
        categoria: "CUEROS",
        precioUnidad: 220,
        precioMayor: 165,
        tallas: ["S", "M", "L"],
        descripcion: "ECO Cuero con forro por dentro, estilo oversize.",
        imagen: "imagenes/cueros/bombers/bombercuero.jpeg",
        imagenesColores: [
            "imagenes/cueros/bombers/bomber-cuero2.jpeg",
            "imagenes/cueros/bombers/bomber-cuero3.jpeg",
            "imagenes/cueros/bombers/bomber-cuero.jpeg",
            "imagenes/cueros/bombers/bom-cueros-part1.jpeg",
            "imagenes/cueros/bombers/bom-cueros-part2.jpeg",
            "imagenes/cueros/bombers/bom-cueros-part3.jpeg"
        ]
    },

    {
        nombre: "Camisaco Jean",
        categoria: "JEANS",
        precioUnidad: 180,
        precioMayor: 140,
        tallas: ["S", "M", "L"],
        descripcion: "Jean pre lavado 100% algodon,corte oversize.",
        imagen: "imagenes/jeans/camisacos/camisaco-jean.jpeg",
        imagenesColores: [
            "imagenes/jeans/camisacos/camisaco-jean1.jpeg",
            "imagenes/jeans/camisacos/camisaco-jean2.jpeg",
            "imagenes/jeans/camisacos/camisaco-jean3.jpeg"
        ]
    },

    {
        nombre: "Camisaco Cuero",
        categoria: "CUEROS",
        precioUnidad: 180,
        precioMayor: 135,
        tallas: ["S", "M", "L", "G"],
        descripcion: "Material eco cuero.",
        imagen: "imagenes/cueros/camisacos/camisaco-cuero.jpeg",
        imagenesColores: [
            "imagenes/cueros/camisacos/camisaco-cuero1.jpeg",
            "imagenes/cueros/camisacos/camisaco-cuero2.jpeg",
            "imagenes/cueros/camisacos/camisaco-cuero3.jpeg",
            "imagenes/cueros/camisacos/camisaco-cuero4.jpeg"
        ]
    },

    {
        nombre: "Casaca Carnero",
        categoria: "PAÑOS",
        precioUnidad: 210,
        precioMayor: 158,
        tallas: ["S", "M", "L"],
        descripcion: "Casaca con forro, material carnero, semi oversize.",
        imagen: "imagenes/paños/carnero/carnero-part1.jpeg",
        imagenesColores: [
            "imagenes/paños/carnero/carnero-part2.jpeg",
            "imagenes/paños/carnero/carnero-col1.jpeg",
            "imagenes/paños/carnero/carnero-col2.jpeg",
            "imagenes/paños/carnero/carnero-col3.jpeg",
            "imagenes/paños/carnero/carnero-col4.jpeg",
            "imagenes/paños/carnero/carnero-col5.jpeg",
            "imagenes/paños/carnero/carnero-col6.jpeg"
        ]
    },

    {
        nombre: "Biker Combinado",
        categoria: "CUEROS",
        precioUnidad: 220,
        precioMayor: 170,
        tallas: ["S", "M", "L"],
        descripcion: "Material eco cuero combinado con gamuza.",
        imagen: "imagenes/cueros/combinado/cuero-combinado.jpeg",
        imagenesColores: [
            "imagenes/cueros/combinado/cuero-combinado-col1.jpeg",
            "imagenes/cueros/combinado/cuero-combinado-col2.jpeg",
            "imagenes/cueros/combinado/cuero-combinado-col3.jpeg"
        ]
    },

    {
        nombre: "Bomber Corderoy",
        categoria: "TODOS",
        precioUnidad: 180,
        precioMayor: 130,
        tallas: ["S", "M", "L"],
        descripcion: "Material corderoy.",
        imagen: "imagenes/corderoy/bomber-corderoy.jpeg",
        imagenesColores: [
            "imagenes/corderoy/bomber-corderoy1.jpeg",
            "imagenes/corderoy/bomber-corderoy2.jpeg",
            "imagenes/corderoy/bomber-corderoy3.jpeg",
            "imagenes/corderoy/bomber-corderoy4.jpeg",
            "imagenes/corderoy/bomber-corderoy5.jpeg"
        ]
    },

    {
        nombre: "Casaca suede",
        categoria: "GAMUZADOS",
        precioUnidad: 170,
        precioMayor: 115,
        tallas: ["S", "M", "L"],
        descripcion: "Material gamuzado (suede), horma normal.",
        imagen: "imagenes/gamuzados/casacas/casaca-suede.jpeg",
        imagenesColores: [
            "imagenes/gamuzados/casacas/cas-suede-col1.jpeg",
            "imagenes/gamuzados/casacas/cas-suede-col2.jpeg",
            "imagenes/gamuzados/casacas/cas-suede-col3.jpeg"
        ]
    },

    {
        nombre: "Bomber Cuero Cadete",
        categoria: "CUEROS",
        precioUnidad: 220,
        precioMayor: 170,
        tallas: ["S", "M", "L"],
        descripcion: "Material eco cuero con forro, estilo oversize.",
        imagen: "imagenes/cueros/bombers/bomber-cadete.jpeg",
        imagenesColores: [
            "imagenes/cueros/bombers/bomber-cadete-col1.jpeg",
            "imagenes/cueros/bombers/bomber-cadete-col2.jpeg",
            "imagenes/cueros/bombers/bomber-cadete-col3.jpeg"
        ]
    },

    {
        nombre: "Biker Cuero",
        categoria: "CUEROS",
        precioUnidad: 190,
        precioMayor: 145,
        tallas: ["S", "M", "L"],
        descripcion: "Material eco cuero, con forro por dentro.",
        imagen: "imagenes/cueros/bikers/bikercuero.jpeg",
        imagenesColores: [
            "imagenes/cueros/bikers/biker-cuero-col1.jpeg",
            "imagenes/cueros/bikers/biker-cuero-col2.jpeg",
            "imagenes/cueros/bikers/biker-cuero-col3.jpeg",
            "imagenes/cueros/bikers/biker-cuero-col4.jpeg"
        ]
    },

    {
        nombre: "Chanel Con Estampado",
        categoria: "PAÑOS",
        precioUnidad: 195,
        precioMayor: 150,
        tallas: ["S", "M", "L"],
        descripcion: "Material paño con forro por dentro.",
        imagen: "imagenes/paños/chanel/chanel-estampado.jpeg",
        imagenesColores: [
            "imagenes/paños/chanel/chanel-estampado.jpeg",
            "imagenes/paños/chanel/chanel-estampado-col1.jpeg",
            "imagenes/paños/chanel/chanel-estampado-col2.jpeg",
            "imagenes/paños/chanel/chanel-estampado-col3.jpeg",
            "imagenes/paños/chanel/chanel-estampado-col4.jpeg",
            "imagenes/paños/chanel/chanel-estampado-col5.jpeg"
        ]
    },

    {
        nombre: "Jacket cadete",
        categoria: "CUEROS",
        precioUnidad: 190,
        precioMayor: 140,
        tallas: ["S", "M", "L"],
        descripcion: "Material eco cuero efecto mate (lavado).",
        imagen: "imagenes/cueros/cuero-mate/cuero-mate-col3.jpeg",
        imagenesColores: [
            "imagenes/cueros/cuero-mate/cuero-mate-col1.jpeg",
            "imagenes/cueros/cuero-mate/cuero-mate-col2.jpeg",
            "imagenes/cueros/cuero-mate/cuero-mate.jpeg",
            "imagenes/cueros/cuero-mate/cuero-mate-col4.jpeg",
            "imagenes/cueros/cuero-mate/cuero-mate-col5.jpeg"
        ]
    },

    {
        nombre: "Chanel de paño",
        categoria: "PAÑOS",
        precioUnidad: 210,
        precioMayor: 160,
        tallas: ["S", "M", "L"],
        descripcion: "Material paño peinado con forro por dentro, horma normal.",
        imagen: "imagenes/paños/chanel/chanel-paño.jpeg",
        imagenesColores: [
            "imagenes/paños/chanel/chan-paño-col1.jpeg",
            "imagenes/paños/chanel/chan-paño-col2.jpeg"
        ]
    },

    {
        nombre: "Gabardina de paño",
        categoria: "PAÑOS",
        precioUnidad: 210,
        precioMayor: 155,
        tallas: ["S", "M", "L"],
        descripcion: "Material paño, clasico horma normal.",
        imagen: "imagenes/paños/gabardinas/gabardina-paño.jpeg",
        imagenesColores: [
            "imagenes/paños/gabardinas/gab-paño-col.jpeg"
        ]
    }

];


/* =========================================
   ELEMENTOS DEL HTML
========================================= */

const lista = document.getElementById("lista-productos");
const buscador = document.getElementById("buscar");
const limpiarBusqueda = document.getElementById("limpiar-busqueda");
const botones = document.querySelectorAll(".categoria");

const modal = document.getElementById("modal-producto");
const cerrarModal = document.getElementById("cerrar-modal");
const tituloModal = document.getElementById("titulo-modal");
const galeria = document.getElementById("galeria-colores");
const precioModal = document.getElementById("precio-modal");
const tallasModal = document.getElementById("tallas-modal");

const listaPopulares = document.getElementById("lista-populares");
const anteriorPopular = document.getElementById("anterior-popular");
const siguientePopular = document.getElementById("siguiente-popular");

const seccionPopulares = document.querySelector(".modelos-populares");


/* =========================================
   MODELOS POPULARES SELECCIONADOS
========================================= */

const nombresPopulares = [
    "Bomber de paño",
    "Oversize Jean",
    "Blazer manga 3/4",
    "Bomber Cuero",
    "Chanel de paño",
    "Bomber Cuero Cadete",
    "Casaca suede",
    "Casaca Carnero",
    "Jacket cadete"
];


/* =========================================
   CATEGORÍA INICIAL
========================================= */

let categoriaActual = "Todas";


/* =========================================
   MOSTRAR U OCULTAR MODELOS POPULARES
========================================= */

function actualizarPopulares() {

    if (!seccionPopulares || !buscador) return;

    const texto = buscador.value.trim();

    const mostrarDestacados =
        categoriaActual.toLowerCase() === "todas" &&
        texto === "";

    seccionPopulares.style.display =
        mostrarDestacados ? "block" : "none";

}


/* =========================================
   MOSTRAR PRODUCTOS
========================================= */

function mostrarProductos() {

    if (!lista || !buscador) {
        console.error("No se encontró la lista de productos o el buscador.");
        return;
    }

    lista.innerHTML = "";

    const texto = buscador.value.toLowerCase().trim();

    // Actualizar visibilidad de modelos populares
    actualizarPopulares();

    const filtrados = productos.filter(producto => {

        const coincideNombre =
            producto.nombre.toLowerCase().includes(texto);

        const categoriaSeleccionada =
            categoriaActual.toLowerCase();

        const coincideCategoria =
            categoriaSeleccionada === "todas" ||
            categoriaSeleccionada === "todos" ||
            producto.categoria.toLowerCase() === categoriaSeleccionada;

        return coincideNombre && coincideCategoria;

    });


    // SI NO HAY PRODUCTOS

    if (filtrados.length === 0) {

        lista.innerHTML = `
            <div class="sin-productos">
                <h3>Próximamente ♡</h3>
                <p>Estamos preparando nuestra colección.</p>
            </div>
        `;

        return;
    }


    // CREAR TARJETAS

    filtrados.forEach(producto => {

        const tarjeta = document.createElement("div");

        tarjeta.className = "tarjeta";

        tarjeta.innerHTML = `
            <img
                src="${producto.imagen}"
                alt="${producto.nombre}"
                class="foto-producto"
            >

            <div class="info-producto">

                <h3 class="nombre-producto">
                    ${producto.nombre}
                </h3>

                <div class="precios-producto">

                    <p class="precio-unidad">
                        Unidad: Bs. ${producto.precioUnidad}
                    </p>

                    <p class="precio-mayor">
                        Por mayor: Bs. ${producto.precioMayor}
                    </p>

                </div>

                <p class="texto-tallas">
                    Tallas disponibles
                </p>

                <div class="tallas">
                    ${producto.tallas.map(talla => `
                        <span>${talla}</span>
                    `).join("")}
                </div>

                <p class="descripcion-producto">
                    ${producto.descripcion || ""}
                </p>

            </div>
        `;


        // ABRIR DETALLES AL PRESIONAR LA IMAGEN

        tarjeta.querySelector(".foto-producto")
            .addEventListener("click", () => {

                abrirModal(producto);

            });

        lista.appendChild(tarjeta);

    });

}


/* =========================================
   MOSTRAR MODELOS POPULARES
========================================= */

function mostrarPopulares() {

    if (!listaPopulares) {
        console.error("No se encontró #lista-populares en el HTML.");
        return;
    }

    listaPopulares.innerHTML = "";

    nombresPopulares.forEach(nombre => {

        const producto = productos.find(
            p => p.nombre === nombre
        );

        if (!producto) return;

        const tarjeta = document.createElement("div");

        tarjeta.className = "tarjeta-popular";

        tarjeta.innerHTML = `
            <img
                src="${producto.imagen}"
                alt="${producto.nombre}"
                class="foto-popular"
            >

            <div class="info-popular">
                <h3>${producto.nombre}</h3>
                <p>Por mayor: Bs. ${producto.precioMayor}</p>
            </div>
        `;

        tarjeta.querySelector(".foto-popular")
            .addEventListener("click", () => {

                abrirModal(producto);

            });

        listaPopulares.appendChild(tarjeta);

    });

}


/* =========================================
   DESPLAZAMIENTO DE MODELOS POPULARES
========================================= */

if (siguientePopular && listaPopulares) {

    siguientePopular.addEventListener("click", () => {

        const carrusel = listaPopulares.parentElement;

        carrusel.scrollBy({
            left: carrusel.clientWidth,
            behavior: "smooth"
        });

    });

}


if (anteriorPopular && listaPopulares) {

    anteriorPopular.addEventListener("click", () => {

        const carrusel = listaPopulares.parentElement;

        carrusel.scrollBy({
            left: -carrusel.clientWidth,
            behavior: "smooth"
        });

    });

}


/* =========================================
   ABRIR VENTANA DEL PRODUCTO
========================================= */

function abrirModal(producto) {

    if (!modal || !tituloModal || !galeria ||
        !precioModal || !tallasModal) {

        console.error("Faltan elementos del modal en el HTML.");
        return;

    }

    modal.style.display = "flex";

    tituloModal.textContent = producto.nombre;

    // LIMPIAR FOTOGRAFÍAS ANTERIORES

    galeria.innerHTML = "";


    // MOSTRAR TODAS LAS FOTOGRAFÍAS DE COLORES

    producto.imagenesColores.forEach(foto => {

        const imagen = document.createElement("img");

        imagen.src = foto;
        imagen.alt = "Colores disponibles de " + producto.nombre;
        imagen.className = "foto-color";

        galeria.appendChild(imagen);

    });


    // MOSTRAR PRECIOS

    precioModal.innerHTML = `
        <p class="precio-unidad">
            Precio por unidad: Bs. ${producto.precioUnidad}
        </p>

        <p class="precio-mayor">
            Precio por mayor: Bs. ${producto.precioMayor}
        </p>
    `;


    // MOSTRAR TALLAS

    tallasModal.textContent =
        "Tallas disponibles: " + producto.tallas.join(" · ");

}


/* =========================================
   CERRAR VENTANA
========================================= */

if (cerrarModal && modal) {

    cerrarModal.addEventListener("click", () => {

        modal.style.display = "none";

    });


    modal.addEventListener("click", evento => {

        if (evento.target === modal) {

            modal.style.display = "none";

        }

    });

}


document.addEventListener("keydown", evento => {

    if (evento.key === "Escape" && modal) {

        modal.style.display = "none";

    }

});


/* =========================================
   BUSCADOR
========================================= */

if (buscador) {

    buscador.addEventListener("input", () => {

        mostrarProductos();

    });

}


/* =========================================
   LIMPIAR BUSCADOR
========================================= */

if (limpiarBusqueda && buscador) {

    limpiarBusqueda.addEventListener("click", () => {

        buscador.value = "";

        mostrarProductos();

    });

}


/* =========================================
   FILTRAR CATEGORÍAS
========================================= */

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        // QUITAR CATEGORÍA ACTIVA ANTERIOR

        botones.forEach(b => {

            b.classList.remove("activa");

        });


        // ACTIVAR CATEGORÍA SELECCIONADA

        boton.classList.add("activa");

        categoriaActual = boton.dataset.categoria;

        // Actualizar productos y ocultar populares
        mostrarProductos();

    });

});


/* =========================================
   INICIAR CATÁLOGO AUTOMÁTICAMENTE
========================================= */

categoriaActual = "Todas";

botones.forEach(boton => {

    const categoria = (boton.dataset.categoria || "").toLowerCase();

    boton.classList.toggle(
        "activa",
        categoria === "todas" || categoria === "todos"
    );

});

mostrarProductos();
mostrarPopulares();

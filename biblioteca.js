// Clase para gestionar libros
class Libro {
    constructor(titulo, autor, isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn; // Identificador único
    }
}

// Clase para gestionar tareas
class Tarea {
    constructor(titulo, prioridad) {
        this.titulo = titulo;
        this.prioridad = prioridad; // Alta, Media, Baja
    }
}

// Clase para gestionar productos
class Producto {
    constructor(nombre, cantidad, precioUnitario) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precioUnitario = precioUnitario;
        this.precioTotal = cantidad * precioUnitario;
    }
}

// Clase para gestionar usuarios
class Usuario {
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo; // Identificador único
    }
}

// Arrays para almacenar datos
const biblioteca = [];
const tareas = [];
const inventario = [];
const usuarios = [];

// Funciones comunes para validación
function validarTexto(input) {
    return input && input.trim().length > 0;
}

// Funciones específicas para cada módulo
function agregarLibro() {
    const titulo = prompt("Ingrese el título del libro:");
    const autor = prompt("Ingrese el autor del libro:");
    const isbn = prompt("Ingrese el ISBN del libro:");
    if (!validarTexto(titulo) || !validarTexto(autor) || !validarTexto(isbn)) {
        console.log("Error: Todos los campos son obligatorios.");
        return;
    }
    if (biblioteca.some(libro => libro.isbn === isbn)) {
        console.log("Error: Ya existe un libro con ese ISBN.");
    } else {
        biblioteca.push(new Libro(titulo, autor, isbn));
        console.log("Libro agregado correctamente.");
    }
}

function agregarTarea() {
    const titulo = prompt("Ingrese el título de la tarea:");
    const prioridad = prompt("Ingrese la prioridad de la tarea (Alta, Media, Baja):");
    if (!validarTexto(titulo) || !["Alta", "Media", "Baja"].includes(prioridad)) {
        console.log("Error: La prioridad debe ser 'Alta', 'Media' o 'Baja'.");
        return;
    }
    tareas.push(new Tarea(titulo, prioridad));
    console.log("Tarea agregada correctamente.");
}

function agregarProducto() {
    const nombre = prompt("Ingrese el nombre del producto:");
    const cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
    const precioUnitario = parseFloat(prompt("Ingrese el precio unitario del producto:"));
    if (!validarTexto(nombre) || isNaN(cantidad) || isNaN(precioUnitario) || cantidad <= 0 || precioUnitario <= 0) {
        console.log("Error: Datos inválidos.");
        return;
    }
    if (inventario.some(producto => producto.nombre === nombre)) {
        console.log("Error: Ya existe un producto con ese nombre.");
    } else {
        inventario.push(new Producto(nombre, cantidad, precioUnitario));
        console.log("Producto agregado correctamente.");
    }
}

function agregarUsuario() {
    const nombre = prompt("Ingrese el nombre del usuario:");
    const correo = prompt("Ingrese el correo electrónico del usuario:");
    if (!validarTexto(nombre) || !validarTexto(correo)) {
        console.log("Error: Todos los campos son obligatorios.");
        return;
    }
    if (usuarios.some(usuario => usuario.correo === correo)) {
        console.log("Error: Ya existe un usuario con ese correo.");
    } else {
        usuarios.push(new Usuario(nombre, correo));
        console.log("Usuario registrado correctamente.");
    }
}

// Función para mostrar todos los datos
function mostrarDatos() {
    console.log("\n--- LIBROS ---");
    biblioteca.length > 0
        ? biblioteca.forEach(libro => console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}, ISBN: ${libro.isbn}`))
        : console.log("No hay libros registrados.");

    console.log("\n--- TAREAS ---");
    tareas.length > 0
        ? tareas.forEach(tarea => console.log(`Título: ${tarea.titulo}, Prioridad: ${tarea.prioridad}`))
        : console.log("No hay tareas pendientes.");

    console.log("\n--- INVENTARIO ---");
    inventario.length > 0
        ? inventario.forEach(producto => console.log(`Producto: ${producto.nombre}, Cantidad: ${producto.cantidad}, Precio Unitario: ${producto.precioUnitario}, Precio Total: ${producto.precioTotal}`))
        : console.log("No hay productos en el inventario.");

    console.log("\n--- USUARIOS ---");
    usuarios.length > 0
        ? usuarios.forEach(usuario => console.log(`Nombre: ${usuario.nombre}, Correo: ${usuario.correo}`))
        : console.log("No hay usuarios registrados.");
}

// Menú principal
function menuBiblioteca() {
    let opcion;
    do {
        console.log("\n--- MENÚ DE BIBLIOTECA ---");
        console.log("1. Agregar libro");
        console.log("2. Agregar tarea");
        console.log("3. Agregar producto al inventario");
        console.log("4. Registrar usuario");
        console.log("5. Mostrar todos los datos");
        console.log("6. Salir");
        opcion = prompt("Seleccione una opción:");
        switch (opcion) {
            case "1":
                agregarLibro();
                break;
            case "2":
                agregarTarea();
                break;
            case "3":
                agregarProducto();
                break;
            case "4":
                agregarUsuario();
                break;
            case "5":
                mostrarDatos();
                break;
            case "6":
                console.log("Saliendo del sistema...");
                break;
            default:
                console.log("Opción no válida.");
        }
    } while (opcion !== "6");
}

menuBiblioteca();

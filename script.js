// Definir los conjuntos de letras
const C1 = ['A', 'B', 'C'];
const C2 = ['D', 'E', 'F', 'G'];
const C3 = ['H', 'I', 'J', 'K'];
const C4 = ['L', 'M', 'N', 'O'];
const C5 = ['P', 'Q', 'R', 'S'];
const C6 = ['T', 'U', 'V', 'Z'];

// Función para obtener dos letras aleatorias de diferentes conjuntos
function obtenerLetrasAleatorias() {
    const conjunto1 = C1[Math.floor(Math.random() * C1.length)];
    const conjunto2 = C2[Math.floor(Math.random() * C2.length)];
    const conjunto3 = C3[Math.floor(Math.random() * C3.length)];
    const conjunto4 = C4[Math.floor(Math.random() * C4.length)];
    const conjunto5 = C5[Math.floor(Math.random() * C5.length)];
    const conjunto6 = C6[Math.floor(Math.random() * C6.length)];

    const letrasAleatorias = [conjunto1, conjunto2, conjunto3, conjunto4, conjunto5, conjunto6];
    return letrasAleatorias;
}

// Función para mostrar las letras en la página
function mostrarLetras() {
    const letrasAleatorias = obtenerLetrasAleatorias();
    const letra1 = letrasAleatorias[Math.floor(Math.random() * letrasAleatorias.length)];
    letrasAleatorias.splice(letrasAleatorias.indexOf(letra1), 1);
    const letra2 = letrasAleatorias[Math.floor(Math.random() * letrasAleatorias.length)];

    document.getElementById('letrasAleatorias').textContent = `${letra1} ${letra2}`;
}

// Event listener para el botón
document.getElementById('generarLetras').addEventListener('click', mostrarLetras);

// Mostrar letras aleatorias al cargar la página
mostrarLetras();

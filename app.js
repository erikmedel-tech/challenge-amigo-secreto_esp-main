// Array para almacenar los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validación: campo vacío
    if (nombre === "") {
        alert("⚠️ Debes ingresar un nombre.");
        return;
    }

    // Validación: nombre repetido (insensible a mayúsculas/minúsculas)
    const existe = amigos.some(a => a.toLowerCase() === nombre.toLowerCase());
    if (existe) {
        alert("⚠️ Ese nombre ya fue agregado.");
        return;
    }

    // Agregar al array y actualizar lista
    amigos.push(nombre);
    actualizarLista();

    // Limpiar input y enfocar
    input.value = "";
    input.focus();
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, idx) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        // Extra: botón para eliminar
        const btn = document.createElement("button");
        btn.textContent = "Eliminar";
        btn.style.marginLeft = "10px";
        btn.onclick = () => eliminarAmigo(idx);

        li.appendChild(btn);
        lista.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
    document.getElementById("resultado").innerHTML = "";
}

// Función para sortear amigo secreto (derangement simple con reintentos)
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("⚠️ Debes agregar al menos 2 amigos para sortear.");
        return;
    }

    const asignaciones = generarDerangement(amigos);
    if (!asignaciones) {
        alert("⚠️ No se pudo realizar el sorteo correctamente. Inténtalo de nuevo.");
        return;
    }

    const resultado = amigos.map((a, i) => `${a} → ${asignaciones[i]}`);
    mostrarResultado(resultado);
}

// Genera una permutación sin puntos fijos (nadie se asigna a sí mismo)
function generarDerangement(arr, maxIntentos = 1000) {
    const n = arr.length;
    const original = [...arr];

    for (let intento = 0; intento < maxIntentos; intento++) {
        // barajar copia
        const copia = [...original].sort(() => Math.random() - 0.5);

        // verificar derangement
        let valido = true;
        for (let i = 0; i < n; i++) {
            if (copia[i] === original[i]) {
                valido = false;
                break;
            }
        }
        if (valido) return copia;
    }
    return null; // si falla
}

// Función para mostrar el resultado
function mostrarResultado(parejas) {
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = "";

    parejas.forEach(pareja => {
        const li = document.createElement("li");
        li.textContent = pareja;
        ulResultado.appendChild(li);
    });
}

// Accesibilidad: permitir Enter para agregar
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("amigo");
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") agregarAmigo();
    });
});

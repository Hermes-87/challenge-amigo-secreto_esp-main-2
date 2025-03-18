let amigos = []; // Array para almacenar los nombres

function agregarAmigo() {
    let nombreInput = document.getElementById("amigo"); // Corregido
    let nombre = nombreInput.value.trim(); // Eliminar espacios extra

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre); // Agregar al array
    nombreInput.value = ""; // Limpiar el campo de entrada
    actualizarLista(); // Actualizar la lista en pantalla
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Corregido
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay participantes en la lista.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉`;
}


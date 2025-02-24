let contador = document.getElementById("contador");
let tempo = 10;

let intervalo = setInterval(() => {
    if (tempo > 0) {
        tempo--;
        contador.textContent = tempo;
    } else {
        contador.textContent = "Tempo acabou!";
        contador.style.color = "green";
        clearInterval(intervalo);
    }
}, 1000);

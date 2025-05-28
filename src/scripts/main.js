document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-sorteador').addEventListener('submit', function (event) {
        event.preventDefault();
        let numeroMaximo = parseInt(document.getElementById('numero-maximo').value);

        if (isNaN(numeroMaximo) || numeroMaximo < 2) {
            alert("Digite um número maior que 1");
            return;
        }

        const numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    });
});

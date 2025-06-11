function atualizarContador() {
    const dataInicio = new Date('2020-11-07');
    const agora = new Date();
    const diff = agora - dataInicio;
    
    const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('contador').innerHTML = 
        `${anos} anos, ${meses} meses, ${dias} dias<br>
        ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

document.addEventListener('DOMContentLoaded', function() {
    const containerFotos = document.querySelector('.fotos');
    const scrollTotal = containerFotos.scrollWidth;
    const containerWidth = containerFotos.clientWidth;
    
    // Calcula a posição central
    const scrollCentral = (scrollTotal - containerWidth) / 2;
    
    // Define a posição do scroll
    containerFotos.scrollLeft = scrollCentral;
});

// Função para centralizar a rolagem da página
function centralizarRolagem() {
    const alturaTotal = document.documentElement.scrollHeight;
    const alturaJanela = window.innerHeight;
    const posicaoCentral = (alturaTotal - alturaJanela) / 2;
    window.scrollTo(0, posicaoCentral);
}

// Centraliza a rolagem quando a página carregar
window.addEventListener('load', centralizarRolagem);
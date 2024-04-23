
document.querySelectorAll('[rec-ajax]').forEach(link => {
    const conteudo = document.getElementById('conteudo');
    console.log('Elemento selecionado:', link);
    link.onclick = function(e) {
        e.preventDefault();
        console.log('Link clicado:', link.href);
        
        fetch(link.href)
            .then(resp => resp.text())
            .then(html => {
                console.log('HTML retornado:', html);
                conteudo.innerHTML = html;
            })
            .catch(error => {
                console.error('Erro na requisição fetch:', error);
            });
    };
});






const slider = document.querySelectorAll(".slider")
const btnVoltar = document.getElementById("btn-voltar")
const btnAvancar = document.getElementById("btn-avancar")

let slideAtivo = 0;

function esconderSlide(){
    slider.forEach(item => item.classList.remove('ativo'))
}

function mostrarSlider(){
    slider[slideAtivo].classList.add("ativo")
}

function proximoSlider(){
    esconderSlide()
    if(slideAtivo === slider.length - 1){
        slideAtivo = 0
    } else{
        slideAtivo++
    }
    mostrarSlider()
}

function voltarSlider(){
    esconderSlide()
    if(slideAtivo === 0){
        slideAtivo = slider.length -1
    } else{
        slideAtivo--
    }
    mostrarSlider()
}

function avancarAutomatico() {
    setInterval(() => {
        proximoSlider();
    }, 5000); // 5000 milissegundos = 5 segundos
}

avancarAutomatico()


btnAvancar.addEventListener('click', () => proximoSlider())
btnVoltar.addEventListener('click', () => voltarSlider())



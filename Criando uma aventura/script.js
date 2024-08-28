const avança= document.querySelectorAll ('.btn proximo');

avança.forEach( button => {
    button.addEventListener( 'click',function() {
        const atual = document.querySelector( 'ativo')
        const proximoPasso = 'Passo-' + this.getAttribute( data-proximo);
    atual.classList.remove(ativo);
    document.getElementById(proximoPasso).classList.add('ativo')


    } )
})
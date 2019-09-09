$(() => {
    $('#azul').click(() => {
        $('p').css('color', 'blue')
        $('p').fadeOut()
        $('p').delay(500)
        $('p').fadeIn()
    })
    $('#vermelho').click(() =>{

        $('p').css('color', 'red')
  //Consigo colocar em blocos o meu as minhas funções, assim eu consigo aproveitar a declaração      
        $('#mensagem')
        .text('Mensagem enviada com sucesso')
  //Consigo fazer uma declaração multipla caso eu uso o mesmo metodo varias vezes  
        .css({
            color:'red',
            border:'1px solid red',
            //Padrão de traços se altera para o camel case, padrão do javascript para valores
            // background-color:'1234'
            backgroundColor:'#F08080'
        })
        // .css('color', 'red')
        // .css('border', 'solid 1px red')
        .fadeIn()
        .fadeOut(2000)
    })
})
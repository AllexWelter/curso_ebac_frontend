$(document).ready(function(){
   
   
    $('form').on('submit', function(e) {
        e.preventDefault()

        const enderecoNovaTarefa = $('#endereco-tarefa-nova').val()
        const novoItem = $('<li></li>').text(enderecoNovaTarefa)
        $('ul').append(novoItem)
        $('#endereco-tarefa-nova').val('')

        novoItem.click(function() {
            $(this).toggleClass('completed')
        })
    })


})
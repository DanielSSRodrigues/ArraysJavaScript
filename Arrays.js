var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

personagens.push('C3pO') //insere novos dados no array

personagens.pop() //pop remove dados no array - ssempre remove o último dado

personagens = personagens.filter(function(p){   //Para remover um dado que não sejá o último, é necessario fazer esse procedimento - Faz com que a função rode item a item dentro do array
    return p !== 'Darth Vader'
})

console.log(personagens)


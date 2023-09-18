let usuarios = []
let topo = -1

for (let i = 0; topo <= 20; i++){
    var menu = prompt('Digite 1 para empilhar, Digite 2 para desempilhar, Digite 3 para limpar, Digite 4 para listar, Digite 5 para verificar')

    if (menu === '1'){
        var nome = prompt('Digite o nome do usuário')
        empilhar(nome)
        console.log(usuarios)
    }

    if (menu === '2'){
        desempilhar()
        console.log(usuarios)
    }

    if (menu === '3'){
        limpar()
        console.log(usuarios)
    }

    if (menu === '4'){
        listar()
        console.log(usuarios)
    }

    if (menu === '5'){
        isEmpty()
        console.log(usuarios)
    }

    if (menu === '' || menu === null){
        break
    }
}

function empilhar(nome){
    topo = topo + 1
    usuarios[topo] = nome
    alert(`O usuário ${nome} está na posição ${topo}`)
}

function desempilhar(){
    elemento = usuarios[topo]
    usuarios[topo] = null 
    topo = topo - 1
    return elemento
}

function limpar(){
    return usuarios = []
}

function listar(){
    let usuariosimp = []
    for (let i = 0; i <= topo; i++){
        usuariosimp[i] = usuarios[i]
    }
    alert(`${usuariosimp}`)
}

function isEmpty(){
    if (topo == -1){
        alert('Está vazio')
    } else {
        listar()
    }
}
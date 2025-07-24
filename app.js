// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let amigo  = document.querySelector('#amigo');
    if (amigo.value == ""){
        alert("Pon un nombre valido a tu amigo");
        return 
    }
    if(amigos.includes(amigo.value)){
        amigo.value = ''
        alert("Este amigo ya esta en tu lista");
        return 
    }
    amigos.push(amigo.value)
    actualizarLista()
    amigo.value = ''
    return 
}

function actualizarLista(){
    let lista = document.querySelector('#listaAmigos')
    lista.innerHTML = ''
    for (let i = 0; i<amigos.length;i++){
        let columna = document.createElement('li')
        columna.textContent = amigos[i]
        lista.append(columna)
    }
}

function posicionSecreto(){
    return Math.floor(Math.random()* amigos.length)
}

function sortearAmigo(){
    if (amigos == ""){
        alert('No hay amigos en tu lista :c')
        return
    }
    let listaAmigos = document.querySelector('#listaAmigos')
    listaAmigos.innerHTML = '';
    let lista = document.querySelector('#resultado');
    lista.innerHTML = '';
    let i = posicionSecreto();
    lista.append(`El amigo secreto sorteado es: ${amigos[i]}`)
}




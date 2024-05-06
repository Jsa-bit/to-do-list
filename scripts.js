const button =  document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const ListaCompleta = document.querySelector ('.list-tasks');

let minhaListaDeItens = [];

function adicionarNovaTarefa (){
    minhaListaDeItens.push({
        tarefa:input.value,
        concluida:false})
    input.value = ''
    
    mostrarTarefas()
};

function mostrarTarefas(){
    let novaLi = ''
    minhaListaDeItens.forEach( (item,posição) => {

        novaLi = novaLi +
        `<li class="task ${item.concluida && 'done'}">
        <img  src="img/checked.png" alt="Imagem de check" onClick= "concluirTarefa(${posição})">
        <p>${item.tarefa}</p>
        <img src="img/trash.png" alt="Lixeira" onClick= "deletarItem(${posição})">
        </li>`
    })
    ListaCompleta.innerHTML = novaLi
    localStorage.setItem('Lista', JSON.stringify(minhaListaDeItens))
};



function concluirTarefa(posição){
    minhaListaDeItens[posição].concluida = !minhaListaDeItens[posição].concluida
    mostrarTarefas()
};

function deletarItem(posição){
    minhaListaDeItens.splice(posição,1)
    mostrarTarefas()    
};

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('Lista')
   if (tarefasDoLocalStorage){
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    mostrarTarefas()}
};

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa);

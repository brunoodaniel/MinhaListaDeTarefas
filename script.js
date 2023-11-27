function adicionarTarefa() {
    var inputTarefa = document.getElementById('taskInput');
    var textoTarefa = inputTarefa.value;

    if (textoTarefa.trim() === '') {
        alert('Por favor, insira uma tarefa válida.');
        return;
    }

    var listaDeTarefas = document.getElementById('listaDeTarefas');

    var containerTarefa = document.createElement('div');
    containerTarefa.className = 'containerTarefa';
    containerTarefa.style.width = '50%';

    var li = document.createElement('li');
    li.className = 'tarefa';

    var span = document.createElement('span');
    span.innerText = textoTarefa;
    span.style.color = 'black';

    var acoesDiv = document.createElement('div');
    acoesDiv.className = 'acoesTarefa';

    var completaBtn = document.createElement('button');
    completaBtn.innerHTML = '✅';
    completaBtn.onclick = function () {
        li.classList.toggle('concluida');
        containerTarefa.style.backgroundColor = li.classList.contains('concluida') ? '#5dc460' : 'white';
    };

    var editarBtn = document.createElement('button');
    editarBtn.innerHTML = '✏️';
    editarBtn.onclick = function () {
        var novoTexto = prompt('Editar tarefa:', textoTarefa);
        if (novoTexto !== null) {
            span.innerText = novoTexto;
        }
    };

    var excluirBtn = document.createElement('button');
    excluirBtn.innerHTML = '🗑️';
    excluirBtn.onclick = function () {
        listaDeTarefas.removeChild(containerTarefa);
    };

    acoesDiv.appendChild(completaBtn);
    acoesDiv.appendChild(editarBtn);
    acoesDiv.appendChild(excluirBtn);

    li.appendChild(span);
    li.appendChild(acoesDiv);

    containerTarefa.appendChild(li);
    listaDeTarefas.appendChild(containerTarefa);

    inputTarefa.value = '';

    containerTarefa.addEventListener('click', function () {
        containerTarefa.classList.toggle('selecionada');
    });
}
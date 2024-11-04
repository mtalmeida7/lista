const listaTarefas = document.getElementById('lista-tarefas');
const formTarefa = document.getElementById('form-tarefa');
const inputTarefa = document.getElementById('tarefa');

formTarefa.addEventListener('submit', (e) => {
    e.preventDefault();
    const tarefa = inputTarefa.value.trim();
    if (tarefa) {
        const li = document.createElement('li');
        const checkbox = document.createElement('div');
        checkbox.classList.add('checkbox');
        const texto = document.createElement('span');
        texto.textContent = tarefa;
        const botaoExcluir = document.createElement('button');
        botaoExcluir.classList.add('botao-excluir');
        botaoExcluir.innerHTML = '<i class="fas fa-trash"></i>';
        li.appendChild(checkbox);
        li.appendChild(texto);
        li.appendChild(botaoExcluir);
        listaTarefas.appendChild(li);
        inputTarefa.value = '';

        checkbox.addEventListener('click', () => {
            checkbox.classList.toggle('checked');
            texto.classList.toggle('concluido');
        });

        botaoExcluir.addEventListener('click', () => {
            li.remove();
        });
    }
});
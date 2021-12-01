(() => {
  const handleCreateTask = (event) => {
    event.preventDefault();

    const input = document.querySelector('[data-form-input]');
    const valorInput = input.value;
    const list = document.querySelector('[data-list]');

    const task = document.createElement('li');
    task.classList = 'task';

    const contentTask = `<p class='content'>${valorInput}</p>`;

    task.innerHTML = contentTask;
    list.appendChild(task);
    task.appendChild(ButtonDone());

    input.value = '';
  };

  const newTask = document.querySelector('[data-form-button]');

  newTask.addEventListener('click', handleCreateTask);

  const ButtonDone = () => {
    const buttonDone = document.createElement('button');
    buttonDone.innerText = 'Done';
    buttonDone.classList = 'check-button';

    buttonDone.addEventListener('click', doneTask);

    return buttonDone;
  };

  const doneTask = (event) => {
    const buttonDone = event.target;
    const task = buttonDone.parentElement;

    task.classList.toggle('done');
  };
})();

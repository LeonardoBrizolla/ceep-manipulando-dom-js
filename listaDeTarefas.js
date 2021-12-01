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

  input.value = '';
};

const newTask = document.querySelector('[data-form-button]');

newTask.addEventListener('click', handleCreateTask);

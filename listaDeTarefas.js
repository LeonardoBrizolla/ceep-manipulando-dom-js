const handleCreateTask = (event) => {
  event.preventDefault();

  const input = document.querySelector('[data-form-input]');
  const valorInput = input.value;

  const itemTask = document.querySelector('[data-task]');
  const contentTask = `<p class='content'>${valorInput}</p>`;

  itemTask.innerHTML = contentTask;

  input.value = '';
};

const newTask = document.querySelector('[data-form-button]');

newTask.addEventListener('click', handleCreateTask);

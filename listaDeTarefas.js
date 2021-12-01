const handleCreateTask = (event) => {
  event.preventDefault();

  const input = document.querySelector('[data-form-input]');
  const valorInput = input.value;
  console.log(valorInput);
  input.value = '';
};

const newTask = document.querySelector('[data-form-button]');

newTask.addEventListener('click', handleCreateTask);

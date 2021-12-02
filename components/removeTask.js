const ButtonRemoveTask = () => {
  const buttonRemoveTask = document.createElement('button');

  buttonRemoveTask.innerText = 'Deletar';
  buttonRemoveTask.classList = 'delete-button';
  buttonRemoveTask.addEventListener('click', removeTask);

  return buttonRemoveTask;
};

const removeTask = (event) => {
  const buttonRemoveTask = event.target;
  const task = buttonRemoveTask.parentElement;
  task.remove();
};

export default ButtonRemoveTask;

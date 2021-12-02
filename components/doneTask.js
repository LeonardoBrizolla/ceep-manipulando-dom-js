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

export default ButtonDone;

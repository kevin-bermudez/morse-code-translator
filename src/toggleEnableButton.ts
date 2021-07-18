export const enableButton = (buttonTarget) => {
  console.log('holi button target',document.querySelector(buttonTarget))
  document.querySelector(buttonTarget).removeAttribute('disabled');
}

export const disableButton = (buttonTarget) => {
  document.querySelector(buttonTarget).setAttribute('disabled',true);
}
export const showButton = (buttonTarget) => {
  document.querySelector(buttonTarget).classList.add('show')
  document.querySelector(buttonTarget).classList.remove('hide')
}

export const hideButton = (buttonTarget) => {
  document.querySelector(buttonTarget).classList.add('hide')
    document.querySelector(buttonTarget).classList.remove('show')
}
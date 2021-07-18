import {textToMorse} from './textToMorse'
import {printMorseCode} from './printMorseCode'
import {startMorseSound} from './startMorseSound'
import {enableButton,disableButton} from './toggleEnableButton'
import {showButton,hideButton} from './toggleShowButton'

window.addEventListener('load',() => {
  document.querySelector('#button-translator').addEventListener('click',() => {
    try{
      hideButton('#error-output')
      disableButton('#button-translator')
      const toMorse = textToMorse(document.querySelector('#raw-text').value);
      printMorseCode(toMorse)
      enableButton('#button-translator')
      hideButton('#error-output')
    }
    catch(error){
      showButton('#error-output')
      enableButton('#button-translator')
      document.querySelector('#error-output').innerHTML = error.message;
    }
  })

  document.querySelector('#start-sound').addEventListener('click',() => {
    try{
      hideButton('#error-output')
      disableButton('#start-sound')
      const morseContent = document.querySelector('#morse-output').textContent;
      startMorseSound(morseContent,(finalTime) => {
        setTimeout(() => {
          enableButton('#start-sound')
        },finalTime*490)
      })
      
    }
    catch(error){
      showButton('#error-output')
      enableButton('#start-sound')
      document.querySelector('#error-output').innerHTML = error.message;
    }
  })
})


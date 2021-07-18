import {textToMorse} from './textToMorse'
import {printMorseCode} from './printMorseCode'
import {startMorseSound} from './startMorseSound'
import {enableButton,disableButton} from './toggleEnableButton'

window.addEventListener('load',() => {
  document.querySelector('#button-translator').addEventListener('click',() => {
    try{
      disableButton('#button-translator')
      const toMorse = textToMorse(document.querySelector('#raw-text').value);
      printMorseCode(toMorse)
      enableButton('#button-translator')
    }
    catch(error){
      document.querySelector('#error-output').innerHTML = error.message;
    }
  })

  document.querySelector('#start-sound').addEventListener('click',() => {
    try{
      disableButton('#start-sound')
      const morseContent = document.querySelector('#morse-output').textContent;
      startMorseSound(morseContent,(finalTime) => {
        setTimeout(() => {
          console.log('final time is',finalTime)
          enableButton('#start-sound')
        },finalTime*490)
      })
      
    }
    catch(error){
      document.querySelector('#error-output').innerHTML = error.message;
    }
  })
})


import {morseItem} from './textToMorse'

export const printMorseCode = (morseCode:morseItem[]) : void => {
  const morseOutput = morseCode.map((morseItem) => {
    return morseItem.morseCharacters.join(' ')
  }).join('  ')
  
  document.querySelector('#morse-output')?.innerHTML = morseOutput;
}
import {generatePointSound,generateStripeSound,generateCharacterSilence,generateSymbolSilence,generateWordSilence} from './generateSounds'

export const startMorseSound = (morseContent:string,callback:CallableFunction) => {
  let finalTime = null;

  morseContent.split('  ').forEach((element,index) => {
    const elementArray = element.split(' ');
    elementArray.forEach((letter,index) => {
      let quantitySymbols = 0;
      letter.split('').forEach(symbol => {
        quantitySymbols++;
        if(symbol === '.'){
          finalTime = generatePointSound(finalTime)
        }
        if(symbol === '-'){
          finalTime = generateStripeSound(finalTime)
        }
        if(quantitySymbols % 2 === 0 && quantitySymbols !== 1 && elementArray.length - 1 > index){
          finalTime = generateSymbolSilence(finalTime);
        }
      })

      if(elementArray.length - 1 > index){
        finalTime = generateCharacterSilence(finalTime);    
      }
      
    })

    if(morseContent.length - 1 > index){
      finalTime = generateWordSilence(finalTime);    
    }
  });

  callback(finalTime)
}
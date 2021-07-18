import {morseDictionary} from './morseDictionary'

export interface morseItem {
  word : string;
  order : number;
  morseCharacters : string[];
}

export const textToMorse = (rawText:string) => {
  const processedText = rawText.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const textByWords = processedText.split(' ');
  const toMorse:morseItem[] = [];
  
  let order = 1;

  textByWords.forEach((word) => {
    const wordByCharacters = word.split('');
    const newWord = {
      word,
      order,
      morseCharacters : []
    };

    wordByCharacters.forEach((character) => {
      if(!morseDictionary[character]){
        throw new Error('Texto invalido')
      }

      newWord.morseCharacters.push(morseDictionary[character]);
    })

    toMorse.push(newWord);

    order++;
  })

  return toMorse;
}
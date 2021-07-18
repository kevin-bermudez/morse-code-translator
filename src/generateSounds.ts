export const pointSoundDuration = 0.1;
export const stripePointDuration = 3 * pointSoundDuration;
export const frequency = 825;
export const oscillatorType = 'sine';

let context:any;

try{
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  context = new AudioContext();
}
catch(e){
  throw new Error("La API de sonido no funciona en su navegador.");
}

const createOscillator = () => {
  const currentTime = context.currentTime;

  const oscillator = context.createOscillator();
  oscillator.type = oscillatorType;
  oscillator.frequency.value = frequency;

  const gainNode = context.createGain();
  gainNode.gain.setValueAtTime(0, currentTime);

  return {
    oscillator,
    currentTime,
    gainNode
  }
}

const startOscillator = (oscillator,gainNode) => {
  oscillator.connect(gainNode);
  gainNode.connect(context.destination);

  oscillator.start();
}

const generateGenericSound = (time:number,accumulatedTime?:number):number => {
  const {oscillator, currentTime, gainNode} = createOscillator();
  let finalTime = accumulatedTime || currentTime;

  gainNode.gain.setValueAtTime(1, finalTime);
  finalTime += time;
  gainNode.gain.setValueAtTime(0, finalTime);
  finalTime += time;

  startOscillator(oscillator,gainNode);

  return finalTime
}

const generateGenericSilence = (time:number,accumulatedTime?:number):number => {
  const {oscillator, currentTime, gainNode} = createOscillator();
  let finalTime = accumulatedTime || currentTime;
  finalTime += time;
  startOscillator(oscillator, gainNode)
  
  return finalTime
}

export const generatePointSound = (finalTime?:number) => {
  return generateGenericSound(pointSoundDuration,finalTime)
}

export const generateStripeSound = (finalTime?:number) => {
  return generateGenericSound(stripePointDuration,finalTime)
}

export const generateSymbolSilence = (finalTime?:number) => {
  return generateGenericSilence(pointSoundDuration,finalTime)
}

export const generateCharacterSilence = (finalTime?:number) => {
  return generateGenericSilence(3 * pointSoundDuration,finalTime)
}

export const generateWordSilence = (finalTime?:number) => {
  return generateGenericSilence(3 * stripePointDuration,finalTime)
}
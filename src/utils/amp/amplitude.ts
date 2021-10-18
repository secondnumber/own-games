import amplitude from 'amplitude-js';

export const initAmplitude = () => {
  amplitude.getInstance().init('11421c2f458d0505c29f2ccb6080d92c');
};

export const sendAmplitudeData = (eventType: string) => {
  const Amplitude = typeof process !== 'undefined' ? require('amplitude-js') : null;
  if (Amplitude) {
    Amplitude.getInstance().logEvent(eventType);
  }
};

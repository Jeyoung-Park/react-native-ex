import {NativeModules} from 'react-native';

const {BrightnessModule} = NativeModules;

// 네이티브 모듈에 어떤 메서드들이 있는지 확인하기 위함
export const getBrightness = () => BrightnessModule.getBrightness();
export const setBrightness = brightness => {
  BrightnessModule.setBrightness(brightness);
};

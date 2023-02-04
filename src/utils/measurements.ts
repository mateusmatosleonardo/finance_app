import { Dimensions } from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width;
const SPACING = SLIDER_WIDTH * 0.02;
const CARD_LENGTH = SLIDER_WIDTH * 0.88;
const SIDECARD_LENGHT = (SLIDER_WIDTH * 0.12) / 2;

export const MEASUREMENTS = {
  SLIDER_WIDTH,
  SPACING,
  CARD_LENGTH,
  SIDECARD_LENGHT,
};

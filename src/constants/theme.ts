import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const COLORS = {
  // default font color
  font: '#000000',

  // base colors
  primary: '#0094FC',
  secondary: '#A3A1F7',
  tertiary: '#FFE358',

  // non-colors
  black: '#000020',
  white: '#FFFFFF',

  // color variations
  gray: '#535453',
  error: '#DC3545',
  warning: '#FFE358',
  success: '#4CD964',
  info: '#4DA1FF',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 16,
  radius: 30, // 4,
  padding: 26,

  // font sizes
  h1: 34,
  h2: 24,
  h3: 20,
  title: 18,
  subtitle: 14,
  caption: 12,
  small: 10,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  h1: {fontSize: SIZES.h1, letterSpacing: 0.15},
  h2: {fontSize: SIZES.h2, letterSpacing: 0},
  h3: {fontSize: SIZES.h3, letterSpacing: 0.15},
  title: {fontSize: SIZES.title, letterSpacing: 0.15},
  subtitle: {fontSize: SIZES.subtitle},
  caption: {fontSize: SIZES.caption, letterSpacing: 0.4},
  small: {fontSize: SIZES.small, letterSpacing: 1.5},
};

export const WEIGHTS = {
  regular: 'normal' as const,
  bold: 'bold' as const,
  semibold: '500' as const,
  medium: '400' as const,
  light: '300' as const,
};

export const SHADOW = {
  elevation: 3,
  shadowColor: COLORS.black,
  shadowOffset: {width: 0, height: 3 - 1},
  shadowOpacity: 0.1,
  shadowRadius: 3,
};

export default {
  colors: COLORS,
  sizes: SIZES,
  fonts: FONTS,
  weights: WEIGHTS,
  shadow: SHADOW,
};

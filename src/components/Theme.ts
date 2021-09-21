import {createText, createBox, useTheme as useReTheme} from '@shopify/restyle';
export const theme = {
  colors: {
    primary: '#3A474E',
    secoundary: '#4094A3',
    gray_dark: '#65727A',
    gray_light: '#B2B9BD',
    danger: '#D54F4A',
    green: '#34FAB9',
    white: '#FFFFFF',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xlm: 100,
  },

  borderRadii: {
    s: 8,
    m: 10,
    l: 24,
    xl: 50,
    xlm: 60,
  },
  textVariants: {
    title: {
      fontFamily: 'Roboto-Bold',
      fontSize: 28,
      lineHeight: 42.5,
      color: 'title',
    },
    button: {
      fontFamily: 'Roboto-Bold',
      fontSize: 13,
      lineHeight: 24,
      color: 'white',
    },
    title1: {
      fontFamily: 'Roboto-Light',
      fontSize: 24,
      color: 'secoundary',
    },
    title3: {
      fontFamily: 'Roboto-Regular',
      fontSize: 22,
      fontWeight: 'bold',
      lineHeight: 42.5,
      color: 'secoundary',
    },
    title4: {
      fontFamily: 'Roboto-Regular',
      fontSize: 18,

      color: 'secoundary',
    },
    title5: {
      fontFamily: 'Roboto-Regular',
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 42.5,
      color: 'secoundary',
    },
    link: {
      fontFamily: 'Roboto-Bold',
      fontSize: 13,
      lineHeight: 42.5,
      color: 'primary',
    },
    // body: {
    //   fontFamily: 'Roboto-Regular',
    //   fontSize: 13,
    //   color: 'body',
    // },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  cardVariants: {
    primary: {
      backgroundColor: 'primaryCardBackground',
      shadowOpacity: 0.3,
    },
    secondary: {
      backgroundColor: 'secondaryCardBackground',
      shadowOpacity: 0.1,
    },
  },
};

export type Theme = typeof theme;

export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export const useTheme = () => useReTheme<Theme>();

enum COLORS_LIGHT {
  DARK_GREY = '#27272a',
  GREY = '#52525b',
  LIGHT_GREY = '#71717a',
  LIGHTER_GREY = '#f4f4f5',
  WHITE = '#ffffff',
}

const THEMES = {
  light: {
    ...COLORS_LIGHT,
  },
  dark: {},
}

const COLORS = THEMES.light

export default COLORS

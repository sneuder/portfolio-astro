const styleProps = [
  'color',
  'fontSize',
  'lineHeight',
  'textAlign',
  'textWrap',
  'fontWeight',
  'backgroundColor',
  'border',
  'borderRadius',
  'boxShadow',
  'display',
  'flex',
  'flexDirection',
  'height',
  'justifyContent',
  'margin',
  'padding',
  'position',
  'top',
  'right',
  'bottom',
  'left',
  'width',
  'zIndex',
  'opacity',
  'overflow',
  'cursor',
  'visibility',
  'alignItems',
  'alignContent',
  'gridTemplateColumns',
  'gridTemplateRows',
  'gridColumnGap',
  'gridRowGap',
  'gridArea',
  'transform',
  'transition',
  'animation',
  'backgroundImage',
  'backgroundSize',
  'backgroundRepeat',
  'backgroundPosition',
] as const

type StyleProps = (typeof styleProps)[number]

export type Style = {
  [key in StyleProps]?: string | number
}

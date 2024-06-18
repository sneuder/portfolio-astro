export enum TypographyType {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
  QUATERNARY = 'QUATERNARY',
}

export interface BasicProps {
  title: string
  type: TypographyType
}

export interface CollectionStyle {
  lineHeight: string
  fontSize: string
  color: string
}

export type CollectionStyles = {
  [key in TypographyType]?: CollectionStyle
}

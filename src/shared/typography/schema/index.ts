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

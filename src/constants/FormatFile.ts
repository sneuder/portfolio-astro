export enum FormatImage {
  WEBP = 'webp',
  PNG = 'png',
  SVG = 'svg',
}

export enum FormatDoc {
  PDF = 'pdf',
}

export type FormatFile = FormatImage | FormatDoc

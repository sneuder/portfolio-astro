import { type FormatFile, FormatImage } from '@/constants/FormatFile'

const getDataFromLocalBase = (src: string, typeFile: FormatFile) => {
  return async (name: string, type = typeFile) => {
    return `/${src}/${name}.${type}`
  }
}

export const getImageFromLocal = getDataFromLocalBase(
  'assets/imgs',
  FormatImage.WEBP,
)

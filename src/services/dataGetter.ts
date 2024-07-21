import { type FormatFile, FormatImage } from '@/constants/FormatFile'

const getDataFromLocalBase = (src: string, typeFile: FormatFile) => {
  return async (name: string, type = typeFile) => {
    const imageImported = await import(`/src/${src}/${name}.${type}`)
    return imageImported.default.src.replace('/@fs/app', '') as string
  }
}

export const getImageFromLocal = getDataFromLocalBase(
  'assets/imgs',
  FormatImage.WEBP,
)

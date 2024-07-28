import { type FormatFile, FormatImage } from '@/constants/FormatFile'

const getDataFromLocalBase = (src: string, typeFile: FormatFile) => {
  return async (name: string, type = typeFile) => {
    return `/${src}/${name}.${type}`
  }
}

export const getImageProjectFromLocal = getDataFromLocalBase(
  'imgs/projects',
  FormatImage.WEBP,
)

export const getImageEducationFromLocal = getDataFromLocalBase(
  'imgs/education',
  FormatImage.WEBP,
)

export const getImageBrandFromLocal = getDataFromLocalBase(
  'imgs/brand',
  FormatImage.WEBP,
)

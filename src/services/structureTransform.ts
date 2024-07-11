export const enumToObject = <T extends { [key: string]: string | number }>(enumType: T): { [key: string]: T[keyof T] } => {
  const object: { [key: string]: T[keyof T] } = {};

  for (const key in enumType) {
    if (Object.prototype.hasOwnProperty.call(enumType, key)) {
      object[key.toLowerCase()] = enumType[key];
    }
  }

  return object;
};

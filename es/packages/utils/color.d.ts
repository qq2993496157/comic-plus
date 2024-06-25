declare const colorToRgba: (color: any) => number[] | never;
declare const colorBlend: (rgba: number[], deep: number, reverse?: boolean) => string;
export { colorToRgba, colorBlend };

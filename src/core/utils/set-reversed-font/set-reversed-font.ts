import type { Font } from '../../types';

export const setReversedFont = (font: Font): Font => {
  const fonts = font.split('-');

  return (fonts.length === 2 ? fonts[0] : `${font}-${font}`) as Font;
};

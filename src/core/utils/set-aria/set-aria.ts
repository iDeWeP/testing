import type { ElementType } from 'react';

const types = {
  button: (element?: ElementType) =>
    element === 'button' ? {} : { tabIndex: 0, role: 'button' }
};

export const setAria = (type: keyof typeof types, element?: ElementType) =>
  types[type](element);

import type { InputSize } from '../../types';

export const getInputSize = (size: InputSize, resize: boolean) =>
  resize ? 'full' : size;

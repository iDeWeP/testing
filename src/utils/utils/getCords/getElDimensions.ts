import type { RefObject } from 'react';

export type ElDimensions = {
  width: number;
  height: number;
  offsetWidth: number;
  offsetHeight: number;
};

export const getElDimensions = (
  ref: RefObject<HTMLElement | null>,
  offset: number
) => {
  const width = ref.current?.getBoundingClientRect().width ?? 0;
  const height = ref.current?.getBoundingClientRect().height ?? 0;

  return {
    width,
    height,
    offsetWidth: width + offset,
    offsetHeight: height + offset
  };
};

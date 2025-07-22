import type { ElementType } from 'react';

type Props = {
  element?: ElementType;
  disabled?: boolean;
};

type SetProps = Record<string, string | boolean | undefined> | undefined;

type Element = 'button' | 'switch';
type TypeMap = Record<Element, (props: Props) => SetProps>;

const typeMap: TypeMap = {
  button: ({ element, disabled }: Props): SetProps => {
    if (element === 'button') {
      return { disabled, type: 'button' };
    }
  },
  switch: (): SetProps => ({ type: 'checkbox' })
};

export const setProps = (
  type: keyof typeof typeMap,
  values: Props = {}
): SetProps => typeMap[type](values);

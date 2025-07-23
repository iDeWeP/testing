import { type ReactNode, useState } from 'react';
import { Radio } from '../../../core/components/Radio/Radio';
import type { RadioProps } from '../../../core/components/Radio/Radio.types';

export const Example = (props: RadioProps): ReactNode => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Radio
      checked={isChecked}
      onChange={(): void => setIsChecked((checked): boolean => !checked)}
      {...props}
    />
  );
};

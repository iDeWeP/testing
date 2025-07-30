import { type ReactNode, useState, useCallback } from 'react';
import { Radio } from '../../../core/components/Radio/Radio';
import type { RadioProps } from '../../../core/components/Radio/Radio.types';

export const Example = (props: RadioProps): ReactNode => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = useCallback(
    (): void => setIsChecked((checked): boolean => !checked),
    []
  );

  return (
    <Radio
      checked={isChecked}
      onChange={handleChange}
      {...props}
    />
  );
};

import { useState } from 'react';
import { Radio } from '../../../core/components/Radio/Radio';
import type { RadioProps } from '../../../core/components/Radio/Radio.types';

export const Example = (props: RadioProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Radio
      checked={isChecked}
      onChange={() => setIsChecked((checked) => !checked)}
      {...props}
    />
  );
};

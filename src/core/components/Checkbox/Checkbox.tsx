import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledCheckbox } from '../UnstyledCheckbox/UnstyledCheckbox';
import type { CheckboxProps } from './Checkbox.types';
import { checkboxConfig } from './checkboxConfig';

export const Checkbox = (props: CheckboxProps) => {
  const mergedProps = useMergeProps('checkbox', checkboxConfig.props, props);

  return (
    <UnstyledCheckbox
      type="checkbox"
      {...mergedProps}
    />
  );
};

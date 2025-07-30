import { type ReactNode, useState, useCallback } from 'react';
import { UnstyledListItem } from '../../../core/components/UnstyledListItem/UnstyledListItem';
import type { UnstyledListItemProps } from '../../../core/components/UnstyledListItem/UnstyledListItem.types';

type Props = {
  clear?: boolean;
} & UnstyledListItemProps<'li'>;

export const Example = ({
  clear,
  children = 'UNSTYLED-LIST-ITEM',
  ...restProps
}: Props): ReactNode => {
  const [selected, setSelected] = useState(false);

  const handleClick = useCallback(
    (): void => setSelected((selected): boolean => !selected),
    []
  );

  return (
    <UnstyledListItem
      selected={clear ? undefined : selected}
      color={clear ? 'unset' : 'primary'}
      ripple={clear ? 'none' : 'default'}
      onClick={handleClick}
      {...restProps}
    >
      {children}
    </UnstyledListItem>
  );
};

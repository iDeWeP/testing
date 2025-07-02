import { useRef, useState, useCallback } from 'react';
import { UnstyledButton } from '../../../core/components/UnstyledButton/UnstyledButton';
import { UnstyledPopper } from '../../../core/components/UnstyledPopper/UnstyledPopper';
import type { UnstyledPopperProps } from '../../../core/components/UnstyledPopper/UnstyledPopper.types';

type Props = {
  clear?: boolean;
  label?: string;
} & UnstyledPopperProps<'div'>;

export const ExampleUnstyledPopper = ({
  clear,
  label,
  children,
  ...restProps
}: Props) => {
  const ref = useRef<HTMLButtonElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => setIsOpen((isOpen) => !isOpen), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  const description =
    typeof children === 'string' ? children.toUpperCase() : 'UNSTYLED-POPPER';
  const buttonDescription = label ? label.toUpperCase() : description;

  return (
    <>
      <UnstyledButton
        ref={ref}
        variant="solid"
        onClick={handleClick}
      >
        {`Toggle ${buttonDescription}`}
      </UnstyledButton>
      <UnstyledPopper
        anchorRef={ref}
        open={isOpen}
        variant={clear ? 'none' : 'light'}
        color="primary"
        onClose={handleClose}
        {...restProps}
      >
        {children ?? 'POPPER'}
      </UnstyledPopper>
    </>
  );
};

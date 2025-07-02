import { UnstyledButton } from '../../../core/components/UnstyledButton/UnstyledButton';
import { UnstyledPopover } from '../../../core/components/UnstyledPopover/UnstyledPopover';
import type { UnstyledPopoverProps } from '../../../core/components/UnstyledPopover/UnstyledPopover.types';

type Props = {
  clear?: boolean;
  label?: string;
} & UnstyledPopoverProps<'div'>;

export const ExampleUnstyledPopover = ({
  clear,
  label,
  children,
  ...restProps
}: Props) => {
  /*const ref = useRef<HTMLButtonElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => setIsOpen((isOpen) => !isOpen), []);
  const handleClose = useCallback(() => setIsOpen(false), []); */

  const description =
    typeof children === 'string' ? children.toUpperCase() : 'UNSTYLED-Popover';
  const buttonDescription = label ? label.toUpperCase() : description;

  return (
    <>
      <UnstyledPopover
        // anchorRef={ref}
        // open={isOpen}
        variant={clear ? 'none' : 'light'}
        color="primary"
        // onClose={handleClose}
        anchor={
          <UnstyledButton variant="solid">
            {`Toggle ${buttonDescription}`}
          </UnstyledButton>
        }
        {...restProps}
      >
        {children ?? 'Popover'}
      </UnstyledPopover>
    </>
  );
};

/*
<UnstyledButton
        ref={ref}
        variant="solid"
        onClick={handleClick}
      >
        {`Toggle ${buttonDescription}`}
      </UnstyledButton>
*/

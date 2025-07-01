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
  /* const anchorRef = useRef<HTMLButtonElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => setIsOpen((isOpen) => !isOpen), []);
  const handleClose = useCallback(() => setIsOpen(false), []); */

  const description = label
    ? label.toUpperCase()
    : typeof children === 'string'
    ? children.toUpperCase()
    : 'UNSTYLED-POPPER';

  return (
    <UnstyledPopper
      // open={isOpen}
      // onClose={handleClose}
      // anchorRef={anchorRef}
      trigger="click"
      variant={clear ? 'none' : 'light'}
      color="primary"
      anchor={
        <UnstyledButton
        // onClick={handleClick}
        // ref={anchorRef}
        >
          {`Toggle ${description}`}
        </UnstyledButton>
      }
      {...restProps}
    >
      {children ?? 'POPPER'}
    </UnstyledPopper>
  );
};

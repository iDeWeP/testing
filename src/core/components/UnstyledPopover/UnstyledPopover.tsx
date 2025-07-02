import { type ElementType, useRef } from 'react';
import { useCursor } from '../../../hooks/hooks/use-cursor/use-cursor';
import { setProp } from '../../../utils/utils/set-prop/set-prop';
import { useControlledState } from '../../hooks/use-controlled-state/use-controlled-state';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledPopper } from '../UnstyledPopper/UnstyledPopper';
import type { UnstyledPopoverProps } from './UnstyledPopover.types';
import { UnstyledPopoverAnchor } from './UnstyledPopoverAnchor';
import { unstyledPopoverConfig } from './unstyledPopoverConfig';

export const UnstyledPopover = <E extends ElementType = 'div'>(
  props: UnstyledPopoverProps<E>
) => {
  const {
    anchorRef: anchorForwardedRef,
    open,
    defaultOpen,
    followCursor,
    trigger,
    onOpen,
    onClose,
    anchor,
    ...restProps
  } = mergeProps(unstyledPopoverConfig.props, props);

  const ref = useRef<HTMLDivElement>(null);

  const { isOpen, handleOpen, handleClose } = useControlledState(
    defaultOpen,
    open,
    onOpen,
    onClose
  );
  const { cursor, handleCursorMove } = useCursor();

  const anchorRef = anchorForwardedRef ?? ref;

  return (
    <>
      {anchor && (
        <UnstyledPopoverAnchor
          ref={ref}
          open={isOpen}
          trigger={trigger}
          followCursor={followCursor}
          onOpen={handleOpen}
          onClose={handleClose}
          onCursorMove={handleCursorMove}
        >
          {anchor}
        </UnstyledPopoverAnchor>
      )}
      <UnstyledPopper
        anchorRef={anchorRef}
        open={isOpen}
        followCursor={setProp(followCursor, cursor)}
        onClose={handleClose}
        {...restProps}
      />
    </>
  );
};

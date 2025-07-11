import type { ReactElement, ComponentPropsWithRef, ElementType } from 'react';
import type { Trigger, MergeProps } from '../../types';
import type {
  UnstyledPopperConfigProps,
  UnstyledPopperProps
} from '../UnstyledPopper/UnstyledPopper.types';

export type UnstyledPopoverOptionalProps = {
  open?: boolean;
  onOpen?: VoidFunction;
  anchor?: ReactElement<ComponentPropsWithRef<ElementType>> | null;
};

export type UnstyledPopoverDefaultProps = {
  defaultOpen?: boolean;
  followCursor?: boolean;
  trigger?: Trigger;
};

export type UnstyledPopoverConfigProps = MergeProps<
  UnstyledPopperConfigProps,
  UnstyledPopoverDefaultProps
>;

export type UnstyledPopoverProps<E extends ElementType> = MergeProps<
  UnstyledPopperProps<E>,
  UnstyledPopoverDefaultProps & UnstyledPopoverOptionalProps
>;

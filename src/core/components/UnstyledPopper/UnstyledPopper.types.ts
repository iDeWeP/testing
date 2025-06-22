import type {
  ReactElement,
  ComponentPropsWithRef,
  RefObject,
  ElementType
} from 'react';
import type {
  ArrowOffset,
  ComponentRefProps,
  TransitionProps,
  Placement,
  Collision,
  Trigger,
  Peak,
  MergeProps
} from '../../types';
import type {
  UnstyledFlexBoxConfigProps,
  UnstyledFlexBoxProps
} from '../UnstyledFlexBox/UnstyledFlexBox.types';

export type UnstyledPopperArrowProps = {
  offset?: ArrowOffset;
  children?: ReactElement<ComponentPropsWithRef<'svg'>>;
} & ComponentRefProps<'svg'>;

export type UnstyledPopperBackdropProps = {
  zIndex?: number;
  invisible?: boolean;
  blur?: boolean;
  portalEl?: Element | null;
  transitionProps?: TransitionProps;
} & ComponentRefProps<'div'>;

export type UnstyledPopperComponentProps = {
  arrow?: UnstyledPopperArrowProps;
  backdrop?: UnstyledPopperBackdropProps;
  polygon?: ComponentRefProps<'polygon'>;
};

type UnstyledPopperOptionalProps = {
  anchorRef?: RefObject<HTMLElement | null>;
  open?: boolean;
  onOpen?: VoidFunction;
  onClose?: VoidFunction;
  onPlacementChange?: (placement: Placement) => void;
};

export type UnstyledPopperDefaultProps = {
  defaultOpen?: boolean;
  collision?: Collision;
  trigger?: Trigger;
  followCursor?: boolean;
  closeOnOutClick?: boolean | RefObject<HTMLElement | null>;
  closeOnEsc?: boolean;
  focusOnOpen?: boolean | RefObject<HTMLElement | null>;
  focusOnClose?: boolean | RefObject<HTMLElement | null>;
  focusTrap?: boolean;
  lockScroll?: boolean;
  unmountOnExit?: boolean;
  peak?: Peak;
  placement?: Placement;
  offset?: number;
  zIndex?: number;
  duration?: number;
  portalEl?: Element | null;
  transitionProps?: TransitionProps;
  componentProps?: UnstyledPopperComponentProps;
  anchor?: ReactElement<ComponentPropsWithRef<ElementType>> | null;
  arrow?: boolean;
  backdrop?: boolean;
};

export type UnstyledPopperConfigProps = MergeProps<
  UnstyledFlexBoxConfigProps,
  UnstyledPopperDefaultProps
>;

export type UnstyledPopperProps<E extends ElementType> = MergeProps<
  UnstyledFlexBoxProps<E>,
  UnstyledPopperDefaultProps & UnstyledPopperOptionalProps
>;

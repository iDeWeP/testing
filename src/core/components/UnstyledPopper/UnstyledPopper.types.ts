import type {
  ReactElement,
  ComponentPropsWithRef,
  RefObject,
  ElementType
} from 'react';
import type {
  ComponentRefProps,
  Placement,
  Trigger,
  Peak,
  Float,
  TransitionProps,
  MergeProps
} from '../../types';
import type {
  UnstyledFlexBoxConfigProps,
  UnstyledFlexBoxProps
} from '../UnstyledFlexBox/UnstyledFlexBox.types';

export type UnstyledPopperArrowProps = {
  offset?: [number | string, number | string];
  children?: ReactElement<ComponentPropsWithRef<'svg'>>;
} & ComponentRefProps<'svg'>;

export type UnstyledPopperBackdropProps = {
  zIndex: number;
  invisible: boolean;
  blur: boolean;
  portalEl?: Element | null;
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
  float?: Float;
  zIndex?: number;
  offset?: number;
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

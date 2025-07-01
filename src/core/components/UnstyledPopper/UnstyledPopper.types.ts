import type {
  RefObject,
  ReactElement,
  ComponentPropsWithRef,
  ElementType
} from 'react';
import type {
  ArrowOffset,
  SVGNodeProps,
  ComponentRefProps,
  TransitionProps,
  Placement,
  Collision,
  Trigger,
  Peak,
  MergeProps
} from '../../types';
import type {
  UnstyledFlexConfigProps,
  UnstyledFlexProps
} from '../UnstyledFlexBox/UnstyledFlex.types';

export type UnstyledPopperArrowProps = {
  offset?: ArrowOffset;
  children?: SVGNodeProps;
} & ComponentRefProps<'svg'>;

export type UnstyledPopperBackdropProps = {
  zIndex?: number;
  invisible?: boolean;
  blur?: boolean;
  portalEl?: Element | null;
  transitionProps?: TransitionProps;
} & ComponentRefProps<'div'>;

export type UnstyledPopperComponentsProps = {
  arrow?: UnstyledPopperArrowProps;
  backdrop?: UnstyledPopperBackdropProps;
};

type OptionalProps = {
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
  componentProps?: UnstyledPopperComponentsProps;
  anchor?: ReactElement<ComponentPropsWithRef<ElementType>> | null;
  arrow?: boolean;
  backdrop?: boolean;
};

export type UnstyledPopperConfigProps = MergeProps<
  UnstyledFlexConfigProps,
  UnstyledPopperDefaultProps
>;

export type UnstyledPopperProps<E extends ElementType> = MergeProps<
  UnstyledFlexProps<E>,
  UnstyledPopperDefaultProps & OptionalProps
>;

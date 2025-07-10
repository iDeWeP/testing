import type { RefObject, ElementType } from 'react';
import type {
  ArrowOffset,
  SVGNodeProps,
  ComponentRefProps,
  AnimationProps,
  Cursor,
  CollisionFunction,
  Collision,
  Peak,
  Placement,
  PopperTransition,
  MergeProps
} from '../../types';
import type {
  UnstyledPaperConfigProps,
  UnstyledPaperProps
} from '../UnstyledPaper/UnstyledPaper.types';

export type UnstyledPopperArrowProps = {
  offset?: ArrowOffset;
  children?: SVGNodeProps;
} & Omit<ComponentRefProps<'svg'>, 'by'>;

export type UnstyledPopperBackdropProps = {
  zIndex?: number;
  invisible?: boolean;
  blur?: boolean;
  portalEl?: Element | null;
  animationProps?: AnimationProps;
} & ComponentRefProps<'div'>;

export type UnstyledPopperComponentsProps = {
  arrow?: UnstyledPopperArrowProps;
  backdrop?: UnstyledPopperBackdropProps;
};

type OptionalProps = {
  anchorRef?: RefObject<HTMLElement | null>;
  open?: boolean;
  followCursor?: Cursor;
  onClose?: VoidFunction;
  onCollision?: CollisionFunction;
};

export type UnstyledPopperDefaultProps = {
  collision?: Collision;
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
  threshold?: number;
  zIndex?: number;
  transition?: PopperTransition;
  duration?: number;
  portalEl?: Element | null;
  animationProps?: AnimationProps;
  componentProps?: UnstyledPopperComponentsProps;
  arrow?: boolean;
  backdrop?: boolean;
};

export type UnstyledPopperConfigProps = MergeProps<
  UnstyledPaperConfigProps,
  UnstyledPopperDefaultProps
>;

export type UnstyledPopperProps<E extends ElementType> = MergeProps<
  UnstyledPaperProps<E>,
  UnstyledPopperDefaultProps & OptionalProps
>;

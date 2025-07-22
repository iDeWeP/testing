export type AnchorDimension = {
  top: number;
  left: number;
  x: number;
  y: number;
  width: number;
  height: number;
  offsetWidth: number;
  offsetHeight: number;
};

export type ElDimension = {
  width: number;
  height: number;
  offsetWidth: number;
  offsetHeight: number;
};

export type ViewDimension = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

export type OverflowDimension = {
  horizontal: {
    start: number;
    end: number;
    viewStart: number;
    viewEnd: number;
    anchorStart: number;
    anchorEnd: number;
    centerStart: number;
    centerEnd: number;
  };
  vertical: {
    start: number;
    end: number;
    viewStart: number;
    viewEnd: number;
    anchorStart: number;
    anchorEnd: number;
    centerStart: number;
    centerEnd: number;
  };
  top: number;
  bottom: number;
  left: number;
  right: number;
};

export type SizeDimension = {
  horizontal: {
    start: number;
    end: number;
    center: number;
    viewStart: number;
    viewEnd: number;
  };
  vertical: {
    start: number;
    end: number;
    center: number;
    viewStart: number;
    viewEnd: number;
  };
  top: number;
  bottom: number;
  left: number;
  right: number;
};

export type TresholdDimension = ['top' | 'left', 'bottom' | 'right'];
export type Dimension = 'top' | 'left';
export type Orientation = 'vertical' | 'horizontal';

export type AnchorDimensions = {
  left: number;
  top: number;
  x: number;
  y: number;
  width: number;
  height: number;
  offsetWidth: number;
  offsetHeight: number;
};

export type ElDimensions = {
  width: number;
  height: number;
  offsetWidth: number;
  offsetHeight: number;
};

export type ViewDimensions = {
  top: number;
  left: number;
  width: number;
  height: number;
};

export type OverflowDimensions = {
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

export type SizeDimensions = {
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

export type Dimension = 'top' | 'left';
export type Length = 'width' | 'height';

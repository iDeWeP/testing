import type { Scale, ScaleSizes, ScaleWidth } from '../../../../types';

export const getScale = (scale: Scale): [ScaleSizes, ScaleWidth] => {
  const scales = scale.split('-');

  if (
    (scales[0] == 'square' || scales[0] == 'rect') &&
    (!scales[1] || scales[1] === 'fit' || scales[1] === 'full')
  ) {
    return [scales[0], !scales[1] ? 'default' : (scales[1] as ScaleWidth)];
  }

  return ['square', 'default'];
};

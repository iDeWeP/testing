import { circularProgressConfig } from '../../components/CircularProgress/circularProgressConfig';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';
import { getScale } from './scale';

export const styleCircularProgressContainer = (
  className: string,
  { size = 'md' }: Classes
) => {
  const { defaultScale, sizeScale } = getScale(size, 'square');

  return mergeClasses(
    circularProgressConfig.styles.root.default,
    systemStyles.size[defaultScale].square[sizeScale],
    className
  );
};

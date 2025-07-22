export const getElDimension = (
  dimension: 'right' | 'bottom'
): 'height' | 'width' => (dimension === 'right' ? 'width' : 'height');

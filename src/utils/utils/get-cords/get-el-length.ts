export const getElLength = (
  dimension: 'right' | 'bottom'
): 'height' | 'width' => (dimension === 'right' ? 'width' : 'height');

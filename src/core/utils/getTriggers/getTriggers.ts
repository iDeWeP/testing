import type { Trigger } from '../../types';

export const getTriggers = (triger: Trigger) => {
  const trigers = triger.split('-');
  const lastIdx = trigers.length - 1;

  return {
    clickOpen: trigers[0] === 'click',
    clickClose: trigers[lastIdx] === 'click',
    hoverOpen: trigers[0] === 'hover',
    hoverClose: trigers[lastIdx] === 'hover'
  };
};

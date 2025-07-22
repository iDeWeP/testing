import { useCallback, useState, type SyntheticEvent } from 'react';
import { combineHandlers } from '../../../utils/utils/combine-handlers/combine-handlers';

export type HandleFunction<E extends SyntheticEvent> = (
  event: E
) => void | false;

export type UseControlledStateResult<
  I extends SyntheticEvent,
  O extends SyntheticEvent
> = {
  isOn: boolean;
  handleOn?: HandleFunction<I>;
  handleOff?: HandleFunction<O>;
};

export const useControlledState = <
  I extends SyntheticEvent,
  O extends SyntheticEvent
>(
  defaultOn: boolean,
  on?: boolean,
  onOn?: HandleFunction<I> | VoidFunction,
  onOff?: HandleFunction<O> | VoidFunction
): UseControlledStateResult<I, O> => {
  const [isOn, setIsOn] = useState(defaultOn);

  const handleOn = useCallback(() => setIsOn(true), []);

  const handleOff = useCallback(() => setIsOn(false), []);

  const isControlled = on !== undefined;

  return {
    isOn: on ?? isOn,
    handleOn: isControlled ? onOn : combineHandlers(onOn, handleOn),
    handleOff: isControlled ? onOff : combineHandlers(onOff, handleOff)
  };
};

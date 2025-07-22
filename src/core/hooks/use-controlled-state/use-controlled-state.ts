import { useCallback, useState, type SyntheticEvent } from 'react';
import { combineHandlers } from '../../../utils/utils/combine-handlers/combine-handlers';

type ControlledState<I extends SyntheticEvent, O extends SyntheticEvent> = {
  isOn: boolean;
  handleOn?: (event: I) => void | false;
  handleOff?: (event: O) => void | false;
};

export const useControlledState = <
  I extends SyntheticEvent,
  O extends SyntheticEvent
>(
  defaultOn: boolean,
  on?: boolean,
  onOn?: ((event: I) => void | false) | VoidFunction,
  onOff?: ((event: O) => void | false) | VoidFunction
): ControlledState<I, O> => {
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

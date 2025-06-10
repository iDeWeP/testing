import {
  type ChangeEventHandler,
  type ChangeEvent,
  type FocusEventHandler,
  useReducer,
  useRef,
  useCallback,
  useMemo
} from 'react';

import {
  type FormConfig,
  type FormInputs,
  type FormState
} from './useForm.types';
import clearTimer from './utils/clearTimer';
import clearTimers from './utils/clearTimers';
import cloneFormState from './utils/cloneFormState';
import initializeInputState from './utils/initializeInputState';
import initTimers from './utils/initTimers';
import isFormValid from './utils/isFormValid';
import isInputValid from './utils/isInputValid';
import initPatterns from './utils/initPatterns';

enum ActionType {
  SET,
  DEBOUNCED_SET,
  SET_ERROR,
  RESET,
  RESET_FORM
}

interface ActionPayload {
  name?: string;
  value?: string;
  isValid?: boolean;
  error?: boolean;
  config?: FormConfig;
}

interface Action {
  type: ActionType;
  payload: ActionPayload;
}

type ChangeFunction = ChangeEventHandler<
  HTMLInputElement | HTMLTextAreaElement
>;

type DebouncedChangeFunction = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  delay?: number
) => void;

type BlurFunction = FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;

type ResetFunction = (
  name: string,
  value?: string,
  isValid?: boolean,
  error?: boolean
) => void;

type ResetFormFunction = (config?: FormConfig) => void;

interface UseFormReturn {
  isFormValid: boolean;
  inputs: FormInputs;
  change: ChangeFunction;
  debouncedChange: DebouncedChangeFunction;
  blur: BlurFunction;
  reset: ResetFunction;
  resetForm: ResetFormFunction;
}

const actionTypes: Record<
  number,
  (prevState: FormState, payload: ActionPayload) => FormState
> = {
  [ActionType.SET]: (prevState, { name = '', value = '', isValid = false }) => {
    const state = cloneFormState(prevState);

    state.inputs[name].value = value;
    state.inputs[name].isValid = isValid;
    state.inputs[name].error = !isValid;

    return state;
  },
  [ActionType.DEBOUNCED_SET]: (
    prevState,
    { name = '', value = '', isValid = false }
  ) => {
    const state = cloneFormState(prevState);

    state.inputs[name].value = value;
    state.inputs[name].isValid = isValid;
    state.inputs[name].error = isValid ? false : state.inputs[name].error;

    return state;
  },
  [ActionType.SET_ERROR]: (prevState, { name = '' }) => {
    const state = cloneFormState(prevState);

    state.inputs[name].error = true;

    return state;
  },
  [ActionType.RESET]: (
    prevState,
    { name = '', value = '', isValid = false, error = false }
  ) => {
    const state = cloneFormState(prevState);

    state.inputs[name].value = value;
    state.inputs[name].isValid = isValid;
    state.inputs[name].error = error;

    return state;
  },
  [ActionType.RESET_FORM]: (prevState, { config }) => {
    const state: FormState = { inputs: {}, isFormValid: false };

    for (const key in prevState.inputs) {
      state.inputs[key] = initializeInputState();
    }

    for (const key in config ?? {}) {
      state.inputs[key] = initializeInputState(config?.[key]);
    }

    return state;
  }
};

const actions = {
  set: (name: string, value: string, isValid: boolean): Action => ({
    type: ActionType.SET,
    payload: { name, value, isValid }
  }),
  debouncedSet: (name: string, value: string, isValid: boolean): Action => ({
    type: ActionType.DEBOUNCED_SET,
    payload: { name, value, isValid }
  }),
  setError: (name: string): Action => ({
    type: ActionType.SET_ERROR,
    payload: { name }
  }),
  reset: (
    name: string,
    value: string,
    isValid: boolean,
    error: boolean
  ): Action => ({
    type: ActionType.RESET,
    payload: { name, value, isValid, error }
  }),
  resetForm: (config?: FormConfig): Action => ({
    type: ActionType.RESET_FORM,
    payload: { config }
  })
};

const initializer = (config?: FormConfig): FormState => {
  const inputs: FormInputs = {};

  for (const key in config ?? {}) {
    inputs[key] = initializeInputState(config?.[key]);
  }

  return {
    inputs,
    isFormValid: isFormValid(inputs)
  };
};

const reducer = (
  prevState: FormState,
  { type, payload }: Action
): FormState => {
  const state = actionTypes[type](prevState, payload);

  state.isFormValid = isFormValid(state.inputs);

  return state;
};

const useForm = (config?: FormConfig): UseFormReturn => {
  const [{ isFormValid, inputs }, dispatch] = useReducer(
    reducer,
    config,
    initializer
  );

  const timers = useRef(initTimers(inputs, config));
  const patterns = useRef(initPatterns(config));

  const change = useCallback<ChangeFunction>(({ target }) => {
    clearTimer(timers, target.name);
    dispatch(actions.set(target.name, target.value, isInputValid(target, patterns.current[target.name])));
  }, []);

  const debouncedChange = useCallback<DebouncedChangeFunction>(
    ({ target }, delay = 1000) => {
      clearTimer(timers, target.name);
      const isTargetValid = isInputValid(target, patterns.current[target.name]);
      const name = target.name;

      if (!isTargetValid) {
        timers.current[name] = window.setTimeout(() => {
          clearTimer(timers, name);
          dispatch(actions.setError(name));
        }, delay);
      }

      dispatch(actions.debouncedSet(name, target.value, isTargetValid));
    },
    []
  );

  const blur = useCallback<BlurFunction>(({ target }) => {
    clearTimer(timers, target.name);
    dispatch(actions.set(target.name, target.value, isInputValid(target, patterns.current[target.name])));
  }, []);

  const reset = useCallback<ResetFunction>(
    (name, value = '', isValid = false, error = false) => {
      clearTimer(timers, name);
      dispatch(actions.reset(name, value, isValid, error));
    },
    []
  );

  const resetForm = useCallback<ResetFormFunction>((config) => {
    clearTimers(timers, config);
    dispatch(actions.resetForm(config));
  }, []);

  return useMemo(
    () => ({
      isFormValid,
      inputs,
      change,
      debouncedChange,
      blur,
      reset,
      resetForm
    }),
    [isFormValid, inputs, change, debouncedChange, blur, reset, resetForm]
  );
};

export default useForm;

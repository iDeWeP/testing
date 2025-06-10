import { createContext } from 'react';
import type { ComponentConfigContext } from './config.types';

const initialState: ComponentConfigContext = {};

const ConfigContext = createContext(initialState);

export default ConfigContext;

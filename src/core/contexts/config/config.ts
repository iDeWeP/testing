import { createContext } from 'react';
import type { ComponentConfigContext } from './config.types';

const initialState: ComponentConfigContext = {};

export const ConfigContext = createContext(initialState);

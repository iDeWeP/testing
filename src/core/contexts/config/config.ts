import { createContext } from 'react';
import type { Config } from 'tailwindcss';

const initialState: Config = {};

const ConfigContext = createContext(initialState);

export default ConfigContext;

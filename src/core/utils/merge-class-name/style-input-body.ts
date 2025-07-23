import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { sharedStyles } from '../../config/shared-styles';
import type { ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleInputBody = (className: string, { on = false }): ClassName =>
  mergeClasses(
    on && sharedStyles.state.on,
    unstyledInputConfig.styles.body.default,
    className
  );

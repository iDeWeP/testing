import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { sharedStyle } from '../../config/shared-style';
import type { ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleInputBody = (className: string, { on = false }): ClassName =>
  mergeClasses(
    on && sharedStyle.state.on,
    unstyledInputConfig.styles.shared.body,
    sharedStyle.position.relative,
    className
  );

import { createBrowserRouter } from 'react-router';
import { UnstyledBoxRoute } from './core/unstyledBox';
import { UnstyledFlexBoxRoute } from './core/unstyledFlexBox';
import { RootRoute } from './RootRoute';
import { UnstyledSpinnerRoute } from './core/unstyledSpinner';
import { UnstyledTransitionRoute } from './core/unstyledTransition';
import { UnstyledTypographyRoute } from './core/unstyledTypography';
import { UnstyledButtonRoute } from './core/unstyledButton';
import { UnstyledPopperRoute } from './core/UnstyledPopper';
import { UnstyledInputRoute } from './core/UnstyledInput';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootRoute,
    children: [
      UnstyledBoxRoute,
      UnstyledFlexBoxRoute,
      UnstyledSpinnerRoute,
      UnstyledTransitionRoute,
      UnstyledTypographyRoute,
      UnstyledButtonRoute,
      UnstyledPopperRoute,
      UnstyledInputRoute
    ]
  }
]);

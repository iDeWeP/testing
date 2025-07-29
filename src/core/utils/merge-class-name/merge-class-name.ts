import type { Classes, ClassName } from '../../types';
import { styleAppShell } from './style-app-shell';
import { styleBadge } from './style-badge';
import { styleBox } from './style-box';
import { styleButton } from './style-button';
import { styleCard } from './style-card';
import { styleCardBody } from './style-card-body';
import { styleCheckbox } from './style-checkbox';
import { styleCheckboxContainer } from './style-checkbox-container';
import { styleCheckboxIcon } from './style-checkbox-icon';
import { styleCheckboxTrail } from './style-checkbox-trail';
import { styleCircularProgressContainer } from './style-circular-progress-container';
import { styleCircularProgressLabel } from './style-circular-progress-label';
import { styleContainer } from './style-container';
import { styleDivider } from './style-divider';
import { styleDividerLine } from './style-divider-line';
import { styleFab } from './style-fab';
import { styleFlex } from './style-flex';
import { styleGrid } from './style-grid';
import { styleGroup } from './style-group';
import { styleIcon } from './style-icon';
import { styleImage } from './style-image';
import { styleInput } from './style-input';
import { styleInputBody } from './style-input-body';
import { styleInputClearance } from './style-input-clearance';
import { styleInputContainer } from './style-input-container';
import { styleInputDecorator } from './style-input-decorator';
import { styleInputFieldset } from './style-input-fieldset';
import { styleInputLabel } from './style-input-label';
import { styleLabel } from './style-label';
import { styleLayout } from './style-layout';
import { styleLinearProgress } from './style-linear-progress';
import { styleLinearProgressBar } from './style-linear-progress-bar';
import { styleLinearProgressLabel } from './style-linear-progress-label';
import { styleListItem } from './style-list-item';
import { styleLoader } from './style-loader';
import { stylePaper } from './style-paper';
import { styleRipple } from './style-ripple';
import { styleSpinner } from './style-spinner';
import { styleSpinnerBar } from './style-spinner-bar';
import { styleSwitch } from './style-switch';
import { styleSwitchBar } from './style-switch-bar';
import { styleSwitchContainer } from './style-switch-container';
import { styleSwitchIcon } from './style-switch-icon';
import { styleSwitchRipple } from './style-switch-ripple';
import { styleSwitchTrail } from './style-switch-trail';
import { styleToggleButton } from './style-toggle-button';
import { styleTransition } from './style-transition';

const componentsClasses = {
  appShell: styleAppShell,
  badge: styleBadge,
  box: styleBox,
  button: styleButton,
  cardBody: styleCardBody,
  card: styleCard,
  checkboxContainer: styleCheckboxContainer,
  checkboxIcon: styleCheckboxIcon,
  checkboxTrail: styleCheckboxTrail,
  checkbox: styleCheckbox,
  circularProgressContainer: styleCircularProgressContainer,
  circularProgressLabel: styleCircularProgressLabel,
  container: styleContainer,
  dividerLine: styleDividerLine,
  divider: styleDivider,
  fab: styleFab,
  flex: styleFlex,
  grid: styleGrid,
  group: styleGroup,
  icon: styleIcon,
  image: styleImage,
  inputBody: styleInputBody,
  inputClearance: styleInputClearance,
  inputContainer: styleInputContainer,
  inputDecorator: styleInputDecorator,
  inputFieldset: styleInputFieldset,
  inputLabel: styleInputLabel,
  input: styleInput,
  label: styleLabel,
  layout: styleLayout,
  linearProgressBar: styleLinearProgressBar,
  linearProgressLabel: styleLinearProgressLabel,
  linearProgress: styleLinearProgress,
  listItem: styleListItem,
  loader: styleLoader,
  paper: stylePaper,
  ripple: styleRipple,
  spinnerBar: styleSpinnerBar,
  spinner: styleSpinner,
  switchBar: styleSwitchBar,
  switchContainer: styleSwitchContainer,
  switchIcon: styleSwitchIcon,
  switchRipple: styleSwitchRipple,
  switchTrail: styleSwitchTrail,
  switch: styleSwitch,
  toggleButton: styleToggleButton,
  transition: styleTransition
};

export const mergeClassName = (
  component: keyof typeof componentsClasses,
  className?: string,
  classes?: Classes
): ClassName => componentsClasses[component](className ?? '', classes ?? {});

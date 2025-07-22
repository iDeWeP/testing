import { setValue } from '../set-value/set-value';

export const getFocusableElements = <E extends HTMLElement>(
  el?: E | null
): HTMLElement[] | undefined => {
  if (!el) {
    return undefined;
  }

  const focusableSelector =
    '[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';

  const focusableEls = [
    ...el.querySelectorAll<HTMLElement>(focusableSelector)
  ].filter(
    (el) =>
      !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true'
  );

  return setValue(focusableEls.length, focusableEls);
};

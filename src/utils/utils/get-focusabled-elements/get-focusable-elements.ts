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
    (el): boolean =>
      !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true'
  );

  if (focusableEls.length) {
    return focusableEls;
  }
};

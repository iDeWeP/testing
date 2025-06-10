// CHECK TYPES !!!
export const getFocusableElements = <E extends HTMLElement>(el?: E | null) => {
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

  return focusableEls.length ? focusableEls : undefined;
};

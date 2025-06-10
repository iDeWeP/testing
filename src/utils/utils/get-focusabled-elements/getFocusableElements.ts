// CHECK TYPES !!!
export const getFocusableElements = <E extends HTMLElement>(el?: E | null) => {
  if (!el) {
    return [];
  }

  const focusableSelector =
    '[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';

  return [...el.querySelectorAll<HTMLElement>(focusableSelector)].filter(
    (el) =>
      !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true'
  );
};

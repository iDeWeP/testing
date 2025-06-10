export default (
  input: HTMLInputElement | HTMLTextAreaElement,
  pattern?: RegExp
): boolean => {
  if (pattern) {
    return pattern.test(input.value);
  } else if (input instanceof HTMLInputElement && input.pattern) {
    return input.value.search(input.pattern) !== -1;
  } else if (input.required) {
    return input.checkValidity();
  }

  return true;
};

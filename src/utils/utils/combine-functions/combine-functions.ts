export const combineFunctions =
  (...handlers: ((() => void | boolean) | undefined | false)[]) =>
  () => {
    for (const handler of handlers) {
      if (handler && handler() === false) {
        return;
      }
    }
  };

export const mergeClasses = (className?: string, defaultClassName?: string) =>
  `${className ? className : ''} ${defaultClassName ? defaultClassName : ''}`;

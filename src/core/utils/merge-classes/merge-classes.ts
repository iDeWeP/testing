export const mergeClasses = (defaultClassName?: string, className?: string) =>
  `${defaultClassName ? defaultClassName : ''} ${className ? className : ''}`;

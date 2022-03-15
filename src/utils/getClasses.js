export const getClasses = (classes) => {
  const result = classes
    .filter((item) => item !== '')
    .join(' ')
    .trim();
  return result;
};

const validateSearch = (value: string | null | undefined): boolean => {
  if (typeof value !== "string") {
    return false;
  }
  const regexp = /[A-Za-z]+/g;
  const result = value.match(regexp);
  return result !== null;
};

export default validateSearch;

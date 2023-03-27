const validateYear = (value: string | null | undefined): boolean => {
  if (typeof value !== "string") {
    return false;
  }
  const regexp = /^\d+$/g;
  const result = value.match(regexp);
  return result !== null;
};

export default validateYear;

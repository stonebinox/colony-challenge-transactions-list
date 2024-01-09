export const convertToEth = (value: string | null) => {
  if (!value) return 0;

  return parseFloat(value) / 10 ** 18;
};

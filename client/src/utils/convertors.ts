/**
 * Converts from WEI to ETH
 *
 * @param {string} value string WEI value. Returns 0 if value is null
 * @returns {number}
 */
export const convertToEth = (value: string | null): number => {
  if (!value) return 0;

  return parseFloat(value) / 10 ** 18;
};

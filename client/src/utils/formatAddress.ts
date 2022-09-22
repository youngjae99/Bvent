export const formatAddress = (address: string): string => {
  return address
    ? `${address.substring(0, 8)}...${address.substring(address.length - 6)}`
    : '';
};

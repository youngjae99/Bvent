export const formatAddress = (address: string | null | undefined): string => {
  if (!address) {
    return '';
  }
  return address
    ? `${address.substring(0, 8)}...${address.substring(address.length - 6)}`
    : '';
};

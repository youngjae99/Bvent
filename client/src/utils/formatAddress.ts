export const formatAddress = (address: any) => {
  return address
    ? `${address.substring(0, 8)}...${address.substring(address.length - 6)}`
    : '';
};

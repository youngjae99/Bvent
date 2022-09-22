export const formatAccount = (account?: string | null): string => {
  return account
    ? `${account.substring(0, 5)}...${account.substring(account.length - 3)}`
    : '';
};

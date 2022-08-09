import getConfig from 'next/config';


const { publicRuntimeConfig } = getConfig();

export const Config = publicRuntimeConfig as {
  ENVIRONMENT: 'develop' | 'production';

  SENTRY_DSN: string;
  SENTRY_ENVIRONMENT: string;
  SENTRY_TOKEN: string;

  INFURA_ID: string;

  BASE_URL: string;

  MAIN_NET_SOUL_LINK_CONTRACT: string;
  MAIN_NET_MERCHANT_CONTRACT: string;
  SOUL_LINK_CONTRACT: string;
  MERCHANT_CONTRACT: string;
};
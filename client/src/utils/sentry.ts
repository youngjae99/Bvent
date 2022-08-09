import * as Sentry from '@sentry/browser';
import { Severity } from '@sentry/nextjs';

import { Account } from '../types/contract';

export const TAG_KEY = {
  CONNECTWALLET: 'connectWallet',
  CONTRACT: 'contract',
} as const;

type SentryTagKey = typeof TAG_KEY[keyof typeof TAG_KEY];

interface SentryPayload {
  tag: { key: SentryTagKey | string; value: string };
  error: any;
  level?: Severity;
  account?: Account;
}

export const captureExceptionToSentry = (sentryPayload: SentryPayload) => {
  const { tag, error, level, account } = sentryPayload;

  return Sentry.withScope((scope) => {
    const { key, value } = tag;
    // key - value
    scope.setTag(key, value);

    // Severity
    // "fatal" | "error" | "warning" | "log" | "info" | "debug" | "critical"
    // scope.setLevel(level ? level : "log");

    scope.setUser({
      id: account ? account : 'user not login',
      username: account ? account : 'user not login',
    });

    Sentry.captureException(error);
  });
};

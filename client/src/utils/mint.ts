import { AbstractConnector } from '@web3-react/abstract-connector';

import { Web3Provider } from '@ethersproject/providers';
import { providers, utils } from 'ethers';

import { LocalStorageKey } from '@/constants/localStorage';

import { IMerchant, ISoullinks } from '@/types/abi';
import { Account } from '@/types/contract';

import { getItem, removeItem, setItem } from './localStorage';

// mint logic
interface ICreateProvider {
  provider?: Web3Provider;
  abstractConnector?: AbstractConnector;
}

export const createProvider = async ({
  provider,
  abstractConnector,
}: ICreateProvider) => {
  if (provider) return provider;

  const currentProvider = await abstractConnector?.getProvider();
  return new providers.Web3Provider(currentProvider);
};

export interface IMerchantCall {
  amount: number;
  merchantContract: IMerchant;
  value: number;
}

export const exchangerCall = async ({
  amount,
  merchantContract,
  value,
}: IMerchantCall) => {
  const exchangerHash = getItem(LocalStorageKey.EXCHANGER_HASH);

  if (exchangerHash) {
    return Boolean(true);
  }

  const exchanger = await merchantContract.exchange(amount, {
    value: utils.parseEther(String(value)).mul(amount).toString(),
  });

  setItem(LocalStorageKey.EXCHANGER_HASH, exchanger.hash);
};

interface ITrackingExchangeTx {
  provider?: Web3Provider;
  abstractConnector?: AbstractConnector;
}

export const trackingExchangeTx = async ({
  provider,
  abstractConnector,
}: ITrackingExchangeTx) => {
  const exchangerHash = getItem(LocalStorageKey.EXCHANGER_HASH);

  if (!exchangerHash) {
    throw 'Error Code : 5002';
  }

  const web3Provider = await createProvider({ provider, abstractConnector });
  const exchangerReceipt = await web3Provider.waitForTransaction(exchangerHash);

  setItem(LocalStorageKey.EXCHANGER_RECEIPT, exchangerReceipt);
  removeItem(LocalStorageKey.EXCHANGER_HASH);

  return exchangerReceipt;
};

// 보유한 tokenId를 트래킹합니다.

export interface IGetTokenIdAll {
  soulLinkContract: ISoullinks;
  account: Account;
}

export const getTokenIdAll = async ({
  soulLinkContract,
  account,
}: IGetTokenIdAll) => {
  if (!account) {
    throw 'Error code : 5003';
  }

  const balance = (await soulLinkContract.balanceOf(account)).toNumber();
  const loopCount = Math.ceil(balance / 100);

  let offset = 0;
  let allTokens = [];
  for (let i = 0; i < loopCount; i += 1) {
    const limit = balance >= offset + 100 ? 100 : balance - offset;
    const tokens = await soulLinkContract.tokensOf(account, offset, limit);
    allTokens.push(
      tokens.map((tokenId) => Number(utils.formatUnits(tokenId, 'wei'))),
    );
    offset += 100;
  }

  return allTokens.flat();
};

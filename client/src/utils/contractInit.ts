// import contracts from '@/constants/contract';

// import { IMerchant__factory, ISoullinks__factory } from '@/types/abi';
// import { CustomSigner } from '@/types/contract';

// export const SUPPORT_CHAIN = 1;

// export const merchantContract = (signer: CustomSigner, chainId: number) => {
//   if (chainId !== SUPPORT_CHAIN) {
//     return null;
//   }

//   // todo : 배포 전 변경하기
//   const { address } = contracts.mainNet.merchant;
//   const retContract = IMerchant__factory.connect(address, signer);

//   return retContract;
// };

// export const soulLinkContract = (signer: CustomSigner, chainId: number) => {
//   if (chainId !== SUPPORT_CHAIN) {
//     return null;
//   }

//   const { address } = contracts.mainNet.soulLink;
//   const retContract = ISoullinks__factory.connect(address, signer);

//   return retContract;
// };

import { atom } from 'recoil';
import { Atoms } from '@/recoil/constants';

interface User {
  bio?: string;
  username?: string;
  total_coin?: number;
  profilePic?: string;
  isSignIn: boolean;
}

export const userState = atom<User>({
  key: Atoms.User,
  default: {
    isSignIn: false,
  },
});

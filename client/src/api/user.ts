import clientApi from './axios';

export const getCookie = (cookieName) => {
  if (document.cookie) {
    const array = document.cookie.split(escape(cookieName) + '=');
    if (array.length >= 2) {
      const arraySub = array[1].split(';');
      return unescape(arraySub[0]);
    }
  }
  return '';
};

const UserAPI = {
  getMyInfo: async () => {
    const token = getCookie('idToken');
    const { data } = await clientApi.get('/user/myself', {
      headers: {
        Authorization: token,
      },
    });
    return data;
  },
  getUserInfoWithAddress: async (address: string) => {
    const { data } = await clientApi.get(`/user/${address}`);
    return data;
  },
};
export default UserAPI;

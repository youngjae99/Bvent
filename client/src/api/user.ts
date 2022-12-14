import { stringify } from 'querystring';
import { serverApi, clientApi } from './axios';

function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp(
      // eslint-disable-next-line no-useless-escape
      '(?:^|; )' + name.replace(/([.$?*|{}()[]\\\/\+^])/g, '\\$1') + '=([^;]*)',
    ),
  );
  return matches ? decodeURIComponent(matches[1]) : '';
}

const UserAPI = {
  getMyInfo: async (isServer?, parsedToken?) => {
    if (isServer) {
      const { data } = await serverApi.get('/user/myself', {
        headers: {
          Authorization: parsedToken,
        },
      });
      return data;
    }
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
  updateMyInfo: async ({ username, bio }) => {
    const token = getCookie('idToken');
    const { data } = await clientApi.post(
      '/user/myself/update_info',
      {
        bio,
        username,
        location: '',
      },
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return data;
  },
  updateProfilePic: async ({ file }: any) => {
    const token = getCookie('idToken');
    const formData = new FormData();
    formData.append('profile_pic', file);
    const { data } = await clientApi.post(
      '/user/myself/profile_pic',
      formData,
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return data;
  },
};
export default UserAPI;

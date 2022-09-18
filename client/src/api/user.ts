import clientApi from './axios';

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
  updateMyInfo: async ({ username, bio }) => {
    const token = getCookie('idToken');
    const { data } = await clientApi.post('/user/myself/update_info', {
      bio,
      username,
      headers: {
        Authorization: token,
      },
    });
    return data;
  },
};
export default UserAPI;

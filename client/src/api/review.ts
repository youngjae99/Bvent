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

const ReviewAPI = {
  getReviews: async (subevent_id: string) => {
    const { data } = await clientApi.get(`/review?subevent_id=${subevent_id}`);
    return data;
  },
  getRecentReviews: async ({cnt}) => {
    const { data } = await clientApi.get(`/review?recent=${cnt}&subevent_id=0`);
    return data;
  },

  writeReview: async ({ review_content, event_name, subevent_id }) => {
    const token = getCookie('idToken');
    const { data } = await clientApi.post(
      `/review`,
      {
        review_content: review_content,
        event_name: event_name,
        subevent_id: subevent_id,
        amount: 0,
        timestamp: Date.now(),
      },
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return data;
  },
};
export default ReviewAPI;
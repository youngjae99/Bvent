import { clientApi } from './axios';

const EventAPI = {
  getAll: async () => {
    const { data } = await clientApi.get('/events');
    return data;
  },
  getByTitle: async ({ eventTitle }) => {
    const { data } = await clientApi.get(`/events/${eventTitle}`);
    return data;
  },
  getWithTags: async (tags: string) => {
    const { data } = await clientApi.get(`/events?tags=${tags}`);
    return data;
  },
  getEventByTitle: async (eventTitle: string) => {
    const { data } = await clientApi.get(`/subevent?event=${eventTitle}`);
    return data;
  },
  getSubeventById: async ({ eventTitle, subeventId }) => {
    const { data } = await clientApi.get(
      '/events/' + eventTitle + '/' + subeventId,
    );
    return data;
  },
};
export default EventAPI;

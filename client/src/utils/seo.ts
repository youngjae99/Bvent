import { Event, Subevent } from '@/types/event';

interface EventSeo {
  title: string;
  description: string;
  image_url: string;
}

export const generateMeta = ({ title, description, image_url }: EventSeo) => {
  return {
    title: title,
    description: description,
    openGraph: {
      type: 'website',
      title: title,
      description: description,
      images: [
        {
          url: image_url,
          width: 800,
          height: 600,
          alt: title,
        },
      ],
    },
  };
};

export const generateEventPageMeta = (eventInfo: Event) => {
  return generateMeta({
    title: eventInfo.event_title,
    description: `checkout ${eventInfo.event_title} info on Bvent`,
    image_url: eventInfo.event_img || '',
  });
};

export const generateSubeventPageMeta = (subeventInfo:Subevent) => {
  return generateMeta({
    title: subeventInfo.event_title + ' - ' + subeventInfo.subevent_title,
    description: subeventInfo.subevent_title,
    image_url: subeventInfo.subevent_img,
  });
};

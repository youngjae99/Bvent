export const generateMeta = ({ title, description, image_url }: any) => {
  //FIXME(youngjae): remove any
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

export const generateEventPageMeta = (eventInfo) => {
  return generateMeta({
    title: eventInfo.event_title,
    description: `checkout ${eventInfo.event_title} info on Bvent`,
    image_url: eventInfo.event_img,
  });
};

export const generateSubeventPageMeta = (eventInfo) => {
  return generateMeta({
    title: eventInfo.event_title + ' - ' + eventInfo.subevent_info,
    description: eventInfo.subevent_info,
    image_url: eventInfo.subevent_img,
  });
};

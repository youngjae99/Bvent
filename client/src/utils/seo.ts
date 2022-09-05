export const generateMeta = ({ title, description, image, og }: any) => { //FIXME(youngjae): remove any
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      image,
      ...og,
    },
  };
};

export const generateEventPageMeta = (eventInfo) => {
  return generateMeta({
    title: eventInfo.event_title,
    description: eventInfo.subevent_info,
    image: eventInfo.subevent_img,
  });
};


export const generateSubeventPageMeta = (eventInfo) => {
  return generateMeta({
    title: eventInfo.event_title,
    description: eventInfo.subevent_info,
    image: eventInfo.subevent_img,
  });
};

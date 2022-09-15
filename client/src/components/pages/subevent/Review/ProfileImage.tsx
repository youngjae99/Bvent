import React from 'react';

type Props = {
  src?: string;
};

const ProfileImage = (props: Props) => {
  const { src } = { ...props };
  if (src) {
    return (
      <img
        src={src}
        width="36rem"
        style={{ borderRadius: '18rem' }}
        alt="profileImage"
      />
    );
  } else {
    return (
      <img
        src="/icons/default_profile_pic.png"
        width="36rem"
        style={{ borderRadius: '18rem' }}
        alt="profileImage"
      />
    );
  }
};

export default ProfileImage;

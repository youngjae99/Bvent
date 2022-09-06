import React from 'react';

type Props = {
  address?: string;
};

const ProfileImage = (props: Props) => {
  const { address } = { ...props };
  if (address) {
    return (
      <img
        src="/icons/default-profile-image.png"
        width="36rem"
        style={{ borderRadius: '18rem' }}
        alt="profileImage"
      />
    );
  } else {
    return (
      <img
        src="/icons/default-profile-image.png"
        width="36rem"
        style={{ borderRadius: '18rem' }}
        alt="profileImage"
      />
    );
  }
};

export default ProfileImage;

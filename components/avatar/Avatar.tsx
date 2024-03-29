import React from 'react';
import Image, { StaticImageData } from 'next/image';

type ImageProps = {
  profileImg: string | StaticImageData;
};

const Avatar = ({profileImg}: ImageProps) => {
  return (
    <Image
            className="rounded-full"
            width={36}
            height={36}
            src={profileImg}
            alt="User"
          />
  )
}

export default Avatar;

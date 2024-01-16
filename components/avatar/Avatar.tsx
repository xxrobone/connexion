import React from 'react';
import Image, { StaticImageData } from 'next/image';

type ImageProps = {
  profileImg: string | StaticImageData;
};

const Avatar = ({ profileImg }: ImageProps) => {
  return <Image className='rounded-full' width={32} height={32} src={profileImg} alt='User' />;
};

export default Avatar;

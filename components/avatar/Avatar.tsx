import React from 'react'
import Image from 'next/image'

type ImageProps = {
    profileImg: string | HTMLImageElement
}

const Avatar = ({profileImg}: ImageProps) => {
  return (
    <Image
            className="rounded-full"
            width={112}
            height={112}
            src={profileImg}
            alt="User"
          />
  )
}

export default Avatar
import Image from 'next/image'
import * as React from 'react'
import { IconButton, PlusIcon } from '..'

type FollowCardProps = {
  avatar: string
  name: string
  shortDesc: string
}

const FollowCard = ({ avatar, name, shortDesc }: FollowCardProps) => {
  return (
    <div className="flex items-start gap-2">
      <div className="overflow-hidden rounded-full">
        <Image src={avatar} width={48} height={48} objectFit="contain" />
      </div>

      <div>
        <p className="text-sm font-medium text-black">{name}</p>
        <p className="text-[12px]">{shortDesc}</p>
        <IconButton
          iconClassName="!w-4 !h-4"
          className="my-2 w-max rounded-full border border-gray !p-1 !px-4 text-base"
          Icon={PlusIcon}
        >
          Follow
        </IconButton>
      </div>
    </div>
  )
}

export default FollowCard

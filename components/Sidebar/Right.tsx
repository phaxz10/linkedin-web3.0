import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'
import { ArrowRightIcon } from '..'
import FollowCard from './FollowCard'

const SidebarRight = () => {
  const { user } = useMoralis()

  const userName = user?.get('username')
  return (
    <div className="hidden max-w-max flex-grow flex-col gap-2 lg:flex">
      <div className="relative h-max w-[322px] max-w-[322px] rounded-md bg-white text-[12px] text-gray shadow-md">
        <p className="p-3 text-base font-medium text-black">Add to your feed</p>

        <div className="px-3">
          <FollowCard
            avatar="/images/User1.png"
            name="Microsoft"
            shortDesc="Company • Computer Software"
          />
          <FollowCard
            avatar="/images/User2.png"
            name="Uber"
            shortDesc="Company • Information Technology and Services"
          />
        </div>

        <p className="flex items-center gap-1 p-3 text-sm font-medium">
          View all recommendation <ArrowRightIcon className="h-3 w-3" />
        </p>
      </div>

      <div className="sticky top-[80px] h-max w-[322px] max-w-[322px] rounded-md bg-white p-3 text-[12px] text-gray shadow-md">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="pt-3">Opportunities are knocking on your door</p>

          <div className="flex gap-2 p-3">
            <Image
              src="/images/placeholder.png"
              width={76}
              height={76}
              objectFit="contain"
            />
            <Image
              src="/images/Trip.jpg"
              width={76}
              height={76}
              objectFit="contain"
            />
          </div>

          <p className="text-base text-black first-letter:capitalize">
            {userName}, explore relevant opportunities with Trip.com Group
          </p>

          <button
            type="button"
            className="my-2 w-max rounded-full border border-blue p-2 px-4 text-sm font-medium text-blue outline-none focus:outline-none"
          >
            Follow
          </button>
        </div>
      </div>
    </div>
  )
}

export default SidebarRight

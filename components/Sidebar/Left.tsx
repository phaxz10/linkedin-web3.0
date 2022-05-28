import Image from 'next/image'
import * as React from 'react'
import { useMoralis } from 'react-moralis'
import { PremiumIcon, RibbonIcon } from '..'
import Hashtag from '../base/Hashtag'

const SidebarLeft = () => {
  const { user } = useMoralis()

  const userName = user?.get('username')

  return (
    <div className="hidden min-w-[188px] max-w-[230px] flex-1 flex-col md:flex">
      <div className="relative h-max max-w-[230px] rounded-md bg-white text-[12px] text-gray shadow-md">
        <div className="absolute -top-1 left-0 overflow-hidden rounded-t-md">
          <Image
            src="/images/ProfileBanner.png"
            height={54}
            width={230}
            objectFit="contain"
          />
        </div>

        <div className="relative top-0 left-0 flex w-full flex-col">
          <div className="mt-5 mb-3 h-[68px] w-[68px] self-center rounded-full border-2 border-white">
            <Image
              src="/images/Placeholder.png"
              height={68}
              width={68}
              objectFit="contain"
            />
          </div>

          <div className="text-center">
            <p className="text-base capitalize text-black">{userName}</p>
            <p>Frontend Developer</p>
          </div>

          <hr className="my-2 opacity-30" />

          <div className="flex cursor-pointer items-center justify-between py-1 px-2">
            <p>Who's viewed your profile</p>
            <p className="font-bold text-blue">69</p>
          </div>
          <div className="flex cursor-pointer items-center justify-between py-1 px-2">
            <p>Impressions of your post</p>
            <p className="font-bold text-blue">10</p>
          </div>

          <hr className="my-2 opacity-30" />

          <div className="px-2">
            <p>Access exclusive tools & insights</p>

            <p className="flex cursor-pointer items-center gap-1 font-medium text-black">
              <PremiumIcon className=" h-3 w-3 rounded bg-yellow-400 text-orange" />
              Try Premium for free
            </p>
          </div>

          <hr className="my-2 opacity-30" />
          <p className="mb-2 flex cursor-pointer items-center gap-1 p-2 font-medium">
            <RibbonIcon className="h-4 w-4" /> My Items
          </p>
        </div>
      </div>

      <div className="sticky top-[80px] h-max max-w-[230px] rounded-md bg-white text-[12px] text-gray shadow-md">
        <div className="p-2">
          <p className="py-1 text-black">Recent</p>
          <Hashtag>Next.js</Hashtag>
          <Hashtag>TailwindCSS</Hashtag>
          <Hashtag>Redux + RTK</Hashtag>
          <Hashtag>Framer Motion</Hashtag>
          <p className="cursor-pointer py-2 font-medium text-blue hover:font-bold">
            Groups
          </p>
          <p className="cursor-pointer py-2 font-medium text-blue hover:font-bold">
            Followed Hashtags
          </p>
          <Hashtag>React.js</Hashtag>
          <Hashtag>Web 3</Hashtag>
          <Hashtag>Blockchain</Hashtag>
        </div>

        <hr className="mt-2 opacity-30" />

        <p className="cursor-pointer p-3 text-center text-sm font-medium hover:text-black">
          Discover more
        </p>
      </div>
    </div>
  )
}

export default SidebarLeft

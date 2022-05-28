import Image from 'next/image'
import * as React from 'react'
import {
  ImageIcon,
  VideoIcon,
  EventIcon,
  ArticleIcon,
  IconButton,
} from '../base'

const PostComposeCard = () => {
  return (
    <div className="mx-auto grid h-max max-w-[570px] gap-3 rounded-md border border-gray border-opacity-20 bg-white shadow-md">
      <div className="flex items-center gap-3 px-4 pt-3">
        <Image
          src="/images/placeholder.png"
          height={48}
          width={48}
          objectFit="contain"
        />

        <input
          type="text"
          className="flex-grow rounded-full border border-gray border-opacity-30 p-3 outline-none focus:outline-none"
          placeholder="Start a post"
        />
      </div>

      <div className="whitespace-nowra flex grid-cols-4 flex-wrap justify-evenly sm:grid">
        <IconButton
          Icon={ImageIcon}
          iconClassName="text-blue"
          className="text-xs sm:text-sm"
        >
          Photo
        </IconButton>
        <IconButton
          Icon={VideoIcon}
          iconClassName="text-green"
          className="text-xs sm:text-sm"
        >
          Video
        </IconButton>
        <IconButton
          Icon={EventIcon}
          iconClassName="text-orange"
          className="text-xs sm:text-sm"
        >
          Event
        </IconButton>
        <IconButton
          Icon={ArticleIcon}
          iconClassName="text-red"
          className="text-xs sm:text-sm"
        >
          Write Article
        </IconButton>
      </div>
    </div>
  )
}

export default PostComposeCard

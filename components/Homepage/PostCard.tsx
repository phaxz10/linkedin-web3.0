import Image, { ImageProps } from 'next/image'
import * as React from 'react'
import { useMoralis, useWeb3Transfer } from 'react-moralis'
import Moralis from 'moralis'
import { toast } from 'react-toastify'
import {
  ThreeDotsIcon,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
  IconButton,
  PlanetIcon,
} from '..'

type Author = {
  avatar: ImageProps['src']
  name: string
  followerCount: number
  address: string
}

type PostCardProps = {
  author?: Author
  featuredImage?: string
  content?: string
  datePosted: string
}

const PostCard = ({
  author,
  datePosted,
  featuredImage,
  content,
}: PostCardProps) => {
  const { user, enableWeb3 } = useMoralis()

  React.useEffect(() => {
    enableWeb3()
  }, [])

  const { fetch, error, isFetching } = useWeb3Transfer()

  return (
    <div className="mx-auto grid h-max max-w-[570px] flex-1 gap-3 rounded-md border border-gray border-opacity-20 bg-white text-gray shadow-md">
      <div className="flex flex-col">
        <div className="flex items-center justify-between p-4">
          <div className="flex gap-2">
            {author?.avatar && (
              <Image
                src={author.avatar}
                width={48}
                height={48}
                objectFit="contain"
              />
            )}

            <div className="text-[12px]">
              <p className="text-base text-black">{author?.name}</p>
              <p>{author?.followerCount} followers</p>
              <p className="flex items-center gap-1">
                {datePosted} <PlanetIcon className="h-[14px] w-[14px]" />
              </p>
            </div>
          </div>

          <ThreeDotsIcon className="h-1 w-5 cursor-pointer self-start" />
        </div>

        <p className="p-4 text-base text-black">{content}</p>
        {featuredImage && (
          <Image
            src={featuredImage}
            width={570}
            height={300}
            objectFit="cover"
          />
        )}

        <div className="grid grid-cols-3 items-center sm:flex">
          <IconButton
            Icon={LikeIcon}
            iconClassName="w-[19px] h-[21px]"
            className="text-xs sm:text-base"
            onClick={async () => {
              const res = await fetch({
                params: {
                  amount: Moralis.Units.ETH(0.001),
                  receiver: author?.address,
                  type: 'native',
                },
              })
              if (res) toast.success('Sent 0.001 ETH')
            }}
          >
            Like
          </IconButton>
          <IconButton
            Icon={CommentIcon}
            iconClassName="w-[19px] h-[21px]"
            className="text-xs sm:text-base"
          >
            Comment
          </IconButton>
          <IconButton
            Icon={ShareIcon}
            iconClassName="w-[19px] h-[21px]"
            className="text-xs sm:text-base"
          >
            Share
          </IconButton>
          <IconButton
            Icon={SendIcon}
            iconClassName="w-[19px] h-[21px]"
            className="hidden sm:flex"
          >
            Send
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default PostCard

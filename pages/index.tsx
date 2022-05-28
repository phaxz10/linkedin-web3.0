import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from '../components'
import PostCard from '../components/Homepage/PostCard'
import PostComposeCard from '../components/Homepage/PostComposeCard'
import withAuth from '../components/lib/withAuth'
import SidebarLeft from '../components/Sidebar/Left'
import SidebarRight from '../components/Sidebar/Right'

const postContent = [
  {
    author: {
      address: '0xf3B642b386431Ad2FEcF84F2c95C6dFfED229Ef5',
      avatar: '/images/User1.png',
      name: 'Microsoft',
      followerCount: 2000,
    },
    featuredImage: '/images/PostImage1.png',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt venenatis mi. Vestibulum ullamcorper massa vitae nulla lobortis porta in ac odio.',
    datePosted: '6d',
  },
  {
    author: {
      address: '0xf3B642b386431Ad2FEcF84F2c95C6dFfED229Ef5',
      avatar: '/images/User2.png',
      name: 'GitHub',
      followerCount: 3500,
    },
    featuredImage: '/images/PostImage2.png',
    content: `The 2020 State of the Octoverse uncovered COVID's impact on developer contributions, the OSS community pandemic response, and the challenge of securing the world’s software. Learn how developers turned challenges into opportunities on The ReadME Project.`,
    datePosted: '1w',
  },
  {
    author: {
      address: '0xf3B642b386431Ad2FEcF84F2c95C6dFfED229Ef5',
      avatar: '/images/User1.png',
      name: 'Meta',
      followerCount: 100,
    },
    featuredImage: '/images/PostImage3.png',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt venenatis mi. Vestibulum ullamcorper massa vitae nulla lobortis porta in ac odio.',
    datePosted: '1m',
  },
]

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>LinkedIn Web3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="mx-auto mt-8 max-w-[1440px] px-4 sm:px-8 xl:px-32">
          <div className="flex justify-center gap-2 md:justify-between">
            <SidebarLeft />

            <div className="flex max-w-max flex-grow flex-col gap-5">
              <div>
                <PostComposeCard />
              </div>

              {postContent.map(
                ({ author, content, datePosted, featuredImage }) => (
                  <PostCard
                    key={author.name}
                    datePosted={datePosted}
                    author={author}
                    content={content}
                    featuredImage={featuredImage}
                  />
                )
              )}
            </div>

            <SidebarRight />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default withAuth(Home)

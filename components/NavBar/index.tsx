import Image from 'next/image'
import * as React from 'react'
import { useMoralis } from 'react-moralis'
import {
  SearchInput,
  HomeIcon,
  NetworkIcon,
  BagIcon,
  MessagingIcon,
  BellIcon,
  WorkIcon,
  ArrowDownIcon,
  SearchIcon,
  NavIconLink,
} from '../base'

const NavBar = () => {
  const { logout } = useMoralis()
  return (
    <>
      <div className="sticky top-0 z-50 hidden bg-white shadow-md xs:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 sm:px-8 md:gap-2 xl:px-32">
          <div className="flex items-center md:gap-3">
            <div className="min-h-[36px] min-w-[36px] cursor-pointer pt-2">
              <Image
                src="/images/logo.png"
                width={36}
                height={36}
                objectFit="contain"
              />
            </div>

            <div className="grid w-[50px] place-items-center text-gray sm:w-[60px] md:pt-2 lg:hidden lg:w-[80px]">
              <SearchIcon className="h-6 w-6 transition-transform duration-200 hover:text-black active:scale-90" />
              <p className="hidden text-[12px] lg:block">Search</p>
            </div>

            <SearchInput
              id="search"
              variant="solid"
              className="hidden max-w-[280px] rounded p-2 lg:flex"
            />
          </div>

          <div className="flex flex-1 items-end justify-evenly self-stretch md:gap-1 xl:flex-none xl:gap-3">
            <NavIconLink Icon={HomeIcon} label="Home" path="/" />

            <NavIconLink
              Icon={NetworkIcon}
              label="My Network"
              path="/my-network"
              notifCount={3}
            />

            <NavIconLink Icon={BagIcon} label="Jobs" path="/jobs" />

            <NavIconLink
              Icon={MessagingIcon}
              label="Messaging"
              path="/messaging"
              notifCount={10}
            />

            <NavIconLink
              Icon={BellIcon}
              label="Notification"
              path="/notifications"
            />

            <div className="flex h-full w-[50px] cursor-pointer flex-col items-center justify-between self-center pb-3 pt-1 text-gray sm:w-[60px] lg:w-[80px]">
              <div
                className="-mb-1 overflow-hidden rounded-full pt-2"
                onClick={async () => await logout()}
              >
                <Image
                  src="/images/placeholder.png"
                  height={24}
                  width={24}
                  objectFit="contain"
                />
              </div>
              <div className="hidden items-center gap-1 text-[12px] lg:flex">
                Me <ArrowDownIcon className="h-[6px] w-[12px]" />
              </div>
            </div>

            <div className="hidden w-[1px] self-stretch bg-gray bg-opacity-30 sm:block" />

            <NavIconLink
              Icon={WorkIcon}
              label={
                <ArrowDownIcon className="flex h-[18px] w-[12px] items-end" />
              }
              path="/work"
            />

            <p className="hidden cursor-pointer self-center text-center text-[12px] text-brown sm:block">
              Try Premium for free
            </p>
          </div>
        </div>
      </div>

      <div className="sticky top-0 flex items-center justify-between gap-2 bg-white p-2 shadow-md xs:hidden">
        <Image
          src="/images/placeholder.png"
          height={32}
          width={32}
          objectFit="contain"
        />

        <SearchInput
          id="search"
          variant="solid"
          className=" flex-1 rounded p-2"
        />

        <MessagingIcon className="h-[32px] w-[32px]" />
      </div>
    </>
  )
}

export default NavBar

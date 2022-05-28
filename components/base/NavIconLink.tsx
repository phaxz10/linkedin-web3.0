import * as React from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

type NavIconLinkProps = {
  path: string
  Icon:
    | (({ ...props }: JSX.IntrinsicElements['svg']) => JSX.Element)
    | (({
        ...props
      }: {
        className?: string
      } & JSX.IntrinsicElements['path']) => JSX.Element)
  label: string | React.ReactNode
  className?: string
  notifCount?: number
}

const NavIconLink = ({
  notifCount,
  className,
  path,
  Icon,
  label,
}: NavIconLinkProps) => {
  const { asPath } = useRouter()

  const isActive = asPath === path

  return (
    <div className="h-full pt-3 md:pt-2">
      <Link href={path}>
        <a>
          <div
            className={classNames(
              'flex h-full w-[40px] flex-col place-items-center justify-between pb-3 text-gray sm:w-[60px] md:pt-2 lg:w-[80px]',
              {
                'pb-0 !text-black': isActive,
              },
              className
            )}
          >
            <div className="relative">
              {notifCount && notifCount > 0 && (
                <div className="absolute -top-1 -right-1 rounded-full bg-rose-800 p-2 text-white">
                  <div className="absolute top-0 left-0 grid h-full w-full place-items-center text-[10px]">
                    {notifCount}
                  </div>
                </div>
              )}
              <Icon className="h-6 w-6 transition-transform duration-200 hover:text-black active:scale-90" />
            </div>
            <p className="hidden text-[12px] lg:block">{label}</p>

            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  exit={{ width: 0 }}
                  className={classNames('mt-[6px] h-[2px] w-full bg-black')}
                />
              )}
            </AnimatePresence>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default NavIconLink

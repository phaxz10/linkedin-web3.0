import classNames from 'classnames'
import * as React from 'react'
import { HashIcon } from '.'

type HashtagProps = {
  children: React.ReactNode
  className?: string
}

const Hashtag = ({ className, children }: HashtagProps) => {
  return (
    <div
      className={classNames(
        className,
        'flex cursor-pointer items-center gap-1 py-1 hover:text-black'
      )}
    >
      <HashIcon className="h-3 w-3" />
      {children}
    </div>
  )
}

export default Hashtag

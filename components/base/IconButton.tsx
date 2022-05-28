import classNames from 'classnames'
import * as React from 'react'

type IconButtonProps = {
  Icon:
    | (({ ...props }: JSX.IntrinsicElements['svg']) => JSX.Element)
    | (({
        ...props
      }: {
        className?: string
      } & JSX.IntrinsicElements['path']) => JSX.Element)
  children: React.ReactNode
  iconClassName?: string
  className?: string
  onClick?: () => void
}

const IconButton = ({
  className,
  iconClassName,
  Icon,
  children,
  onClick,
}: IconButtonProps) => {
  return (
    <div
      className={classNames(
        'grid cursor-pointer select-none place-items-center p-3 hover:bg-gray hover:bg-opacity-20',
        className
      )}
      onClick={() => onClick?.()}
    >
      <div className="flex items-center gap-2">
        <Icon className={classNames('h-[16px] w-[20px]', iconClassName)} />{' '}
        <p>{children}</p>
      </div>
    </div>
  )
}

export default IconButton

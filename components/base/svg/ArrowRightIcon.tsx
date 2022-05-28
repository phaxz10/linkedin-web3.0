import * as React from 'react'
import classNames from 'classnames'

type Props = {
  className?: string
} & JSX.IntrinsicElements['path']

const ArrowRightIcon = ({ className, ...props }: Props) => (
  <div className={classNames(className)}>
    <svg viewBox="0 -2 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.175 0.5L19.5 8L14.175 15.5H10.5L14.76 9.5H0V6.5H14.76L10.5 0.5H14.175Z"
        fill="currentColor"
        fillOpacity="0.9"
        {...props}
      />
    </svg>
  </div>
)

export default ArrowRightIcon

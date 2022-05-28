import * as React from 'react'
import classNames from 'classnames'

type Props = {
  className?: string
} & JSX.IntrinsicElements['path']

const SendIcon = ({ className, ...props }: Props) => (
  <div className={classNames(className)}>
    <svg viewBox="-1 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 0L0 7L7.66 11.26L16 5L9.74 13.34L14 21L21 0Z"
        fill="currentColor"
        fillOpacity="0.9"
        {...props}
      />
    </svg>
  </div>
)

export default SendIcon

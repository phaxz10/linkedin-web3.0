import * as React from 'react'
import classNames from 'classnames'

type Props = {
  className?: string
} & JSX.IntrinsicElements['path']

const HashIcon = ({ className, ...props }: Props) => (
  <div className={classNames(className)}>
    <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.975 13.5H9.975L9.48 18H12.48L12.975 13.5H18V10.5H13.305L13.695 7.5H18V4.5H14.025L14.52 0H11.52L11.025 4.5H8.025L8.52 0H5.52L5.025 4.5H0V7.5H4.695L4.305 10.5H0V13.5H3.975L3.48 18H6.48L6.975 13.5ZM7.695 7.5H10.695L10.305 10.5H7.305L7.695 7.5Z"
        fill="currentColor"
        fillOpacity="0.9"
        {...props}
      />
    </svg>
  </div>
)

export default HashIcon

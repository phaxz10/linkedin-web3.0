import * as React from 'react'
import classNames from 'classnames'

type Props = {
  className?: string
} & JSX.IntrinsicElements['path']

const BellIcon = ({ className, ...props }: Props) => (
  <div className={classNames(className)}>
    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.7 17C11.9 17.3 12 17.6 12 18C12 19.1 11.1 20 10 20C8.9 20 8 19.1 8 18C8 17.6 8.1 17.3 8.3 17H0V16C0 15 0.4 14.1 1.2 13.2L2.2 12H17.9L18.9 13.2C19.7 14.2 20.1 15.1 20.1 16V17H11.7ZM16.2 5.4C15.8 2.3 13.1 0 10 0C6.9 0 4.2 2.3 3.8 5.4L3 11H17L16.2 5.4Z"
        fill="currentColor"
        fillOpacity="0.9"
        {...props}
      />
    </svg>
  </div>
)

export default BellIcon
